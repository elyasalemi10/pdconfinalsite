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
  const maxRequests = 10; // Max 10 feedback requests per 15 minutes

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
  if (!data.rating || data.rating < 1 || data.rating > 5) {
    errors.push('Rating must be between 1 and 5');
  }

  // Optional improvement text validation
  if (data.improvementText && data.improvementText.length > 2000) {
    errors.push('Improvement feedback must be 2000 characters or less');
  }

  // Sanitize inputs (basic HTML escape)
  const sanitize = (str) => {
    if (!str) return '';
    return str.trim().replace(/[<>]/g, '');
  };

  return {
    errors,
    sanitizedData: {
      rating: parseInt(data.rating),
      improvementText: sanitize(data.improvementText),
      honeypot: data.honeypot // For spam detection
    }
  };
}

// Email template for feedback
function createFeedbackEmail(data) {
  const ratingText = {
    1: "Needs Improvement",
    2: "Fair Service",
    3: "Good Experience", 
    4: "Very Satisfied",
    5: "Outstanding Service"
  };

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Feedback - PdCon</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: linear-gradient(135deg, #161441 0%, #1e1b4b 100%); padding: 30px; text-align: center; margin-bottom: 30px;">
        <h1 style="color: #fbbf24; margin: 0; font-size: 28px;">New Feedback</h1>
        <p style="color: #e5e7eb; margin: 10px 0 0 0;">PdCon Property Development</p>
      </div>
      
      <div style="background: #f8fafc; padding: 25px; border-left: 4px solid #fbbf24; margin-bottom: 20px;">
        <h2 style="color: #161441; margin-top: 0;">Customer Rating</h2>
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
          <div style="font-size: 24px; color: #fbbf24;">
            ${'★'.repeat(data.rating)}${'☆'.repeat(5 - data.rating)}
          </div>
          <span style="font-size: 18px; font-weight: bold; color: #161441;">
            ${data.rating}/5 - ${ratingText[data.rating]}
          </span>
        </div>
      </div>
      
      ${data.improvementText ? `
      <div style="background: #f8fafc; padding: 25px; border-left: 4px solid #fbbf24; margin-bottom: 20px;">
        <h2 style="color: #161441; margin-top: 0;">Improvement Feedback</h2>
        <p style="white-space: pre-wrap; margin: 0;">${data.improvementText}</p>
      </div>
      ` : ''}
      
      <div style="background: #161441; color: white; padding: 20px; text-align: center;">
        <p style="margin: 0; font-size: 14px;">This feedback was submitted from your PdCon feedback form</p>
        <p style="margin: 5px 0 0 0; font-size: 12px; color: #9ca3af;">Submitted on ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Melbourne' })}</p>
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
    
    // Validate and sanitize input
    const { errors, sanitizedData } = validateAndSanitize(body);
    
    if (errors.length > 0) {
      return NextResponse.json(
        { error: 'Validation failed', details: errors },
        { status: 400 }
      );
    }

    // Honeypot spam detection
    if (sanitizedData.honeypot) {
      return NextResponse.json(
        { success: true, message: 'Feedback received' },
        { status: 200 }
      );
    }

    // Send feedback email
    const emailResult = await resend.emails.send({
      from: 'PdCon Feedback <onboarding@resend.dev>',
      to: ['info@pdcon.com.au'],
      subject: 'New Feedback',
      html: createFeedbackEmail(sanitizedData)
    });

    if (emailResult.error) {
      console.error('Failed to send feedback email:', emailResult.error);
      return NextResponse.json(
        { error: 'Failed to send feedback email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Feedback submitted successfully',
        emailId: emailResult.data?.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Feedback API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 