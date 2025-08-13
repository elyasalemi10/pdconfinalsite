"use client"

import { motion } from "framer-motion"
import Link from "next/link"
// SVG icons with CSS fallbacks for older browsers
const CalendarIcon = () => (
  <div className="mr-2 h-5 w-5 flex items-center justify-center relative">
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
    <style jsx>{`
      @supports not (display: inline-block) {
        svg { display: none !important; }
        .calendar-fallback { display: inline-block !important; }
      }
    `}</style>
    <span className="calendar-fallback absolute inset-0 flex items-center justify-center text-sm font-bold" style={{ display: 'none' }}>📅</span>
  </div>
);

const PhoneIcon = () => (
  <div className="mr-2 h-5 w-5 flex items-center justify-center relative">
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
    <style jsx>{`
      @supports not (display: inline-block) {
        svg { display: none !important; }
        .phone-fallback { display: inline-block !important; }
      }
    `}</style>
    <span className="phone-fallback absolute inset-0 flex items-center justify-center text-sm font-bold" style={{ display: 'none' }}>📞</span>
  </div>
);

export default function FinalCTASection() {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 text-white overflow-hidden" style={{ backgroundColor: '#161441' }}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/[0.03] to-blue-800/[0.05]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6"
        >
          {/* Main Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium-heading leading-tight text-white">
            Ready to Accelerate Your 
            <span className="text-white">
              {" "}Property Journey?
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-base sm:text-lg text-white/80 leading-relaxed font-body max-w-2xl mx-auto">
            Connect with PDCON today to discuss your‬‭ unique goals. Let our expertise‬‭ guide you to smarter decisions and greater success.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-2 sm:pt-4"
          >
            {/* Primary CTA Button */}
            <Link href="/contact">
              <button className="group text-white font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-body flex items-center cursor-pointer" style={{ 
                background: 'linear-gradient(to right, #eab308, #d97706)',
                backgroundColor: '#eab308' /* Fallback for older browsers */
              }}>
                <CalendarIcon />
                <span className="sm:hidden">Contact Us</span>
                <span className="hidden sm:inline">Schedule Your Consultation</span>
              </button>
            </Link>
            
            {/* Secondary CTA - Phone */}
            <button className="group border-2 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-lg font-body flex items-center" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(4px)'
            }}>
              <PhoneIcon />
              <span>
                Call: 
                <span className="ml-1">0408 255 259</span>
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 