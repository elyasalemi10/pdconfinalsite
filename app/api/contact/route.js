import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Initialize Resend only when needed to avoid build-time errors
let resend;

// Rate limiting storage (in production, use Redis or database)
const rateLimitMap = new Map();

// Rate limiting function
function isRateLimited(ip) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // Max 5 requests per 15 minutes

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }

  const record = rateLimitMap.get(ip);
  
  if (now > record.resetTime) {
    // Reset the window
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }

  if (record.count >= maxRequests) {
    return true;
  }

  record.count++;
  return false;
}

// Input validation and sanitization
function validateAndSanitize(data) {
  const errors = [];
  
  // Required fields validation
  if (!data.firstName?.trim()) errors.push('First name is required');
  if (!data.lastName?.trim()) errors.push('Last name is required');
  if (!data.phone?.trim()) errors.push('Phone number is required');
  if (!data.email?.trim()) errors.push('Email is required');
  if (!data.project?.trim()) errors.push('Project description is required');

  // Length validation
  if (data.firstName && data.firstName.length > 50) errors.push('First name must be 50 characters or less');
  if (data.lastName && data.lastName.length > 50) errors.push('Last name must be 50 characters or less');
  if (data.company && data.company.length > 100) errors.push('Company name must be 100 characters or less');
  if (data.phone && data.phone.length > 20) errors.push('Phone number must be 20 characters or less');
  if (data.email && data.email.length > 254) errors.push('Email address must be 254 characters or less');
  if (data.project && data.project.length > 4000) errors.push('Project description must be 4000 characters or less');

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (data.email && !emailRegex.test(data.email)) {
    errors.push('Please enter a valid email address');
  }

  // Phone validation (basic)
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  if (data.phone && !phoneRegex.test(data.phone)) {
    errors.push('Please enter a valid phone number');
  }

  // Sanitize inputs (basic HTML escape)
  const sanitize = (str) => {
    if (!str) return '';
    return str.trim().replace(/[<>]/g, '');
  };

  return {
    errors,
    sanitizedData: {
      firstName: sanitize(data.firstName),
      lastName: sanitize(data.lastName),
      company: sanitize(data.company),
      phone: sanitize(data.phone),
      email: sanitize(data.email),
      project: sanitize(data.project),
      honeypot: data.honeypot // For spam detection
    }
  };
}

// Email template for business owner
function createBusinessEmail(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #161441 0%, #1e1b4b 100%); padding: 30px; text-align: center; margin-bottom: 30px;">
        <h1 style="color: #fbbf24; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
        <p style="color: #e5e7eb; margin: 10px 0 0 0;">PdCon Property Development</p>
      </div>
      
      <div style="background: #f8fafc; padding: 25px; border-left: 4px solid #fbbf24; margin-bottom: 20px;">
        <h2 style="color: #161441; margin-top: 0;">Contact Details</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
      </div>
      
      <div style="background: #f8fafc; padding: 25px; border-left: 4px solid #fbbf24; margin-bottom: 20px;">
        <h2 style="color: #161441; margin-top: 0;">Project Enquiry</h2>
        <p style="white-space: pre-wrap;">${data.project}</p>
      </div>
      
      <div style="background: #161441; color: white; padding: 20px; text-align: center;">
        <p style="margin: 0; font-size: 14px;">This email was sent from your PdCon contact form</p>
        <p style="margin: 5px 0 0 0; font-size: 12px; color: #9ca3af;">Submitted on ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Melbourne' })}</p>
      </div>
    </body>
    </html>
  `;
}

// Confirmation email template for customer
function createCustomerEmail(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You - PdCon</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #161441 0%, #1e1b4b 100%); padding: 30px; text-align: center; margin-bottom: 30px;">
        <h1 style="color: #fbbf24; margin: 0; font-size: 28px;">Thank You!</h1>
        <p style="color: #e5e7eb; margin: 10px 0 0 0;">We've received your enquiry</p>
      </div>
      
      <div style="padding: 25px;">
        <p>Hi ${data.firstName},</p>
        
        <p>Thank you for reaching out to PdCon regarding your property development project. We've received your enquiry and our team will review the details you've provided.</p>
        
        <div style="background: #f8fafc; padding: 20px; border-left: 4px solid #fbbf24; margin: 20px 0;">
          <h3 style="color: #161441; margin-top: 0;">What happens next?</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li>Our team will review your project requirements</li>
            <li>We'll prepare a tailored response for your specific needs</li>
            <li>You can expect to hear from us within 24 hours</li>
            <li>We'll discuss how PdCon can help bring your vision to reality</li>
          </ul>
        </div>
        
        <p>In the meantime, feel free to call us directly at <strong>0408 255 259</strong> if you have any urgent questions.</p>
        
        <p>Best regards,<br>
        <strong>The PdCon Team</strong><br>
        Property Development Specialists</p>
      </div>
      
      <div style="background: #161441; color: white; padding: 20px; text-align: center;">
        <p style="margin: 0; font-size: 14px;"><strong>PdCon Property Development</strong></p>
        <p style="margin: 5px 0; font-size: 12px;">📞 0408 255 259 | ✉️ info@pdcon.com.au</p>
        <p style="margin: 5px 0 0 0; font-size: 12px; color: #9ca3af;">Melbourne & South East Melbourne Suburbs</p>
      </div>
    </body>
    </html>
  `;
}

export async function POST(request) {
  try {
    // Initialize Resend if not already done
    if (!resend) {
      if (!process.env.FORM_API) {
        return NextResponse.json(
          { error: 'Email service not configured' },
          { status: 500 }
        );
      }
      resend = new Resend(process.env.FORM_API);
    }

    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown';

    // Check rate limiting
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();

    // Check honeypot field (spam detection)
    if (body.honeypot) {
      return NextResponse.json(
        { error: 'Spam detected' },
        { status: 400 }
      );
    }

    // Validate and sanitize input
    const { errors, sanitizedData } = validateAndSanitize(body);

    if (errors.length > 0) {
      return NextResponse.json(
        { error: 'Validation failed', details: errors },
        { status: 400 }
      );
    }

    // Send email to business owner
    const businessEmailResult = await resend.emails.send({
      from: 'PdCon Contact Form <onboarding@resend.dev>',
      to: 'info@pdcon.com.au',
      subject: `New Contact Form Submission - ${sanitizedData.firstName} ${sanitizedData.lastName}`,
      html: createBusinessEmail(sanitizedData),
    });

    // Send confirmation email to customer
    const customerEmailResult = await resend.emails.send({
      from: 'PdCon <onboarding@resend.dev>',
      to: sanitizedData.email,
      subject: 'Thank you for your enquiry - PdCon',
      html: createCustomerEmail(sanitizedData),
    });

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully sent! We\'ll get back to you as soon as possible.',
      businessEmailId: businessEmailResult.data?.id,
      customerEmailId: customerEmailResult.data?.id,
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
} 