"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, Lightbulb, Settings, Hammer, Home, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/sections/footer"
import Image from "next/image"
import { useState } from "react"

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    info: "0408 255 259",
    description: "Speak directly with our team",
    available: "Mon-Fri: 9AM-5PM",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Mail,
    title: "Email Us",
    info: "info@pdcon.com.au",
    description: "Get detailed responses",
    available: "Our Team Will Respond",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    info: "Melbourne Office",
    description: "Schedule an in-person meeting",
    available: "By Appointment",
    color: "from-green-500 to-green-600"
  }
]

const serviceTypes = [
  {
    icon: Lightbulb,
    title: "Strategic Property Acquisition",
    description: "Expert guidance in identifying and securing properties with high development potential and investment value"
  },
  {
    icon: Settings,
    title: "Property Development Management",
    description: "Comprehensive project oversight from planning to completion, ensuring quality and timeline adherence"
  },
  {
    icon: Hammer,
    title: "Long-Term Investment Strategies",
    description: "Tailored investment approaches designed to build sustainable wealth through strategic property portfolio growth"
  },
  {
    icon: Home,
    title: "Specialised Renovation Projects",
    description: "Expert renovation and development services to maximise property value and return on investment"
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    email: '',
    confirmEmail: '',
    project: '',
    honeypot: '' // Hidden field for spam detection
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSuccess: false, isError: false, message: '' });

    // Check if emails match
    if (formData.email !== formData.confirmEmail) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Email addresses do not match. Please check and try again.'
      });
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          message: data.message
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          phone: '',
          email: '',
          confirmEmail: '',
          project: '',
          honeypot: ''
        });
      } else {
        throw new Error(data.error || 'Something went wrong');
      }
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <>
      <main className="relative">
        {/* Hero Section - Large Background Design */}
        <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden">
          {/* Large Background Image */}
          <div className="absolute inset-0">
                <Image
              src="/images/investment-web.jpg"
              alt="Your Property Journey Starts Here"
                  fill
              className="object-cover object-center"
              priority
                />
                <div className="absolute inset-0 bg-black/60" />
          </div>
                
          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
              
              {/* Content overlay - centered from header to bottom */}
              <div className="px-4 flex flex-col justify-center min-h-[calc(80vh-80px)] pt-20">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex justify-center mb-4 sm:mb-6"
                  >
                  <span className="text-white font-semibold text-sm sm:text-base md:text-lg font-body">Contact Us</span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium-heading text-white leading-tight mb-6 sm:mb-8"
                  >
                  Your Property Journey
                    <br />
                  <span className="text-white">
                    Starts Here
                    </span>
                  </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-6 sm:mb-8 font-body"
              >
                  Ready to discuss your property aspirations? Whether you have immediate questions or are ready to schedule a detailed consultation, our team is here to assist you.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold font-body hover:bg-white/10 hover:border-white/80 hover:text-white transition-none"
                  style={{ borderRadius: '0' }}
                >
                  <Phone className="w-4 sm:w-4 md:w-5 h-4 sm:h-4 md:h-5 mr-2 sm:mr-2 md:mr-3" />
                  Call: 0408 255 259
                </Button>
              </motion.div>
                </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section - Fully responsive */}
        <section className="relative py-8 sm:py-10 md:py-16 lg:py-20 bg-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-blue-50/30" />
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(30deg, transparent 40%, rgba(59, 130, 246, 0.03) 41%, rgba(59, 130, 246, 0.03) 42%, transparent 43%),
                  linear-gradient(-30deg, transparent 40%, rgba(168, 85, 247, 0.03) 41%, rgba(168, 85, 247, 0.03) 42%, transparent 43%)
                `,
                backgroundSize: '100px 100px'
              }}
              animate={{
                backgroundPosition: ['0px 0px', '100px 100px']
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
              
              {/* Contact Form - Responsive layout */}
              <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium-heading text-slate-900 mb-3 sm:mb-4">
                    Send Us a Message
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600 font-body">
                    Fill out the form below and we'll get back to you with a detailed response about your development project.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Honeypot field - hidden from users */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleInputChange}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Success Message */}
                  {formStatus.isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 border border-green-200 p-3 sm:p-4 flex items-center gap-3"
                    >
                      <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-600 flex-shrink-0" />
                      <p className="text-green-800 font-body text-sm sm:text-base">{formStatus.message}</p>
                    </motion.div>
                  )}

                  {/* Error Message */}
                  {formStatus.isError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 border border-red-200 p-3 sm:p-4 flex items-center gap-3"
                    >
                      <AlertCircle className="w-4 sm:w-5 h-4 sm:h-5 text-red-600 flex-shrink-0" />
                      <p className="text-red-800 font-body text-sm sm:text-base">{formStatus.message}</p>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2 font-body">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        maxLength={50}
                        disabled={formStatus.isSubmitting}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 font-body disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                        placeholder="Your Name"
                        style={{ borderRadius: '0' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2 font-body">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        maxLength={50}
                        disabled={formStatus.isSubmitting}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 font-body disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                        placeholder="Last Name"
                        style={{ borderRadius: '0' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2 font-body">
                      Your Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      maxLength={100}
                      disabled={formStatus.isSubmitting}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 font-body disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                      placeholder="Company Name"
                      style={{ borderRadius: '0' }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2 font-body">
                      Your Preferred Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      maxLength={20}
                      disabled={formStatus.isSubmitting}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 font-body disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                      placeholder="0400 000 000"
                      style={{ borderRadius: '0' }}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2 font-body">
                        Your Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        maxLength={254}
                        disabled={formStatus.isSubmitting}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 font-body disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                        placeholder="your@email.com"
                        style={{ borderRadius: '0' }}
                      />
                    </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2 font-body">
                        Confirm Email Address <span className="text-red-500">*</span>
                    </label>
                      <input
                        type="email"
                        name="confirmEmail"
                        value={formData.confirmEmail}
                        onChange={handleInputChange}
                        required
                        maxLength={254}
                        disabled={formStatus.isSubmitting}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 font-body disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                        placeholder="Confirm your email"
                        style={{ borderRadius: '0' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2 font-body">
                      What Is Your Enquiry About? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      required
                      maxLength={4000}
                      disabled={formStatus.isSubmitting}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 resize-none font-body disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                      placeholder="Please describe your project enquiry..."
                      style={{ borderRadius: '0' }}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={formStatus.isSubmitting}
                    className="w-full text-white border-0 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold group transition-all duration-300 hover:scale-105 hover:shadow-xl font-body disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
                    style={{ 
                      borderRadius: '0',
                      background: 'linear-gradient(to right, #eab308, #d97706)',
                      backgroundColor: '#eab308' /* Fallback for older browsers */
                    }}
                  >
                    <span className="flex items-center justify-center gap-2 sm:gap-3">
                      {formStatus.isSubmitting ? (
                        <>
                          <Loader2 className="w-4 sm:w-5 h-4 sm:h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Submit
                          <Send className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </span>
                  </Button>
                </form>
              </div>

              {/* Map Section - Responsive layout */}
              <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium-heading text-slate-900 mb-3 sm:mb-4">
                    Visit Our Office
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 font-body">
                    Located in Melbourne CBD, our office is easily accessible for in-person consultations and meetings with clients across Melbourne and south east Melbourne suburbs. Book a consultation to visit our office and discuss your property goals in person.
                  </p>
                </div>

                {/* Google Maps - Responsive height */}
                <div className="relative h-64 sm:h-80 md:h-96 border-2 border-slate-200 overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95439677660298!3d-37.81361174518205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57700e291dd8a65!2s263%20William%20St%2C%20Melbourne%20VIC%203000!5e0!3m2!1sen!2sau!4v1749771549137!5m2!1sen!2sau" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="PdCon Office Location"
                  />
                </div>

                {/* Office Info Card - Responsive spacing */}
                <div className="bg-transparent pl-0 pr-4 sm:pr-6 py-4 sm:py-6">
                  <h4 className="font-bold text-slate-900 mb-2 sm:mb-3 font-heading text-base sm:text-lg text-left">
                    PdCon
                  </h4>
                  <div className="space-y-1 sm:space-y-2 text-slate-600 font-body text-sm sm:text-base">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <MapPin className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span>Level 19, 263 William St, Melbourne 3000</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Clock className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Phone className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span>0408 255 259</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods Section - Fully responsive */}
        <section className="relative py-8 sm:py-10 md:py-16 lg:py-20 overflow-hidden" style={{ backgroundColor: '#161441' }}>
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/4 right-1/4 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 blur-3xl"
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-transparent p-4 sm:p-6 h-full">
                    <div className="relative mb-4 sm:mb-6">
                      <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-transparent flex items-center justify-center mx-auto">
                        <method.icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 font-heading">
                      {method.title}
                    </h3>
                    <div className="text-yellow-400 font-semibold mb-1 sm:mb-2 font-body text-sm sm:text-base">{method.info}</div>
                    <p className="text-white/70 text-xs sm:text-sm mb-1 sm:mb-2 font-body">{method.description}</p>
                    <div className="text-white/50 text-xs font-body">{method.available}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Options Section - Fully responsive */}
        <section className="relative py-8 sm:py-10 md:py-16 lg:py-20 bg-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-blue-50/30" />
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(30deg, transparent 40%, rgba(59, 130, 246, 0.03) 41%, rgba(59, 130, 246, 0.03) 42%, transparent 43%),
                  linear-gradient(-30deg, transparent 40%, rgba(168, 85, 247, 0.03) 41%, rgba(168, 85, 247, 0.03) 42%, transparent 43%)
                `,
                backgroundSize: '100px 100px'
              }}
              animate={{
                backgroundPosition: ['0px 0px', '100px 100px']
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 sm:mb-10 md:mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium-heading text-slate-900 mb-3 sm:mb-4">
                How Can We
                <br />
                <span className="text-slate-900">
                  Help You?
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto font-body">
                We offer comprehensive property development solutions tailored to your needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {serviceTypes.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-transparent p-6 sm:p-8 h-full">
                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                      <div className="w-12 sm:w-14 h-12 sm:h-14 bg-slate-900 flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 sm:w-7 h-6 sm:h-7" style={{ color: '#ffffff' }} />
                      </div>
                      
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2 sm:mb-3 font-heading">
                          {service.title}
                        </h3>
                        <p className="text-slate-600 font-body leading-relaxed text-sm sm:text-base">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}