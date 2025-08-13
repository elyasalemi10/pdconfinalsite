"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroGeometric() {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden" style={{ backgroundColor: '#0f172a' }}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/newhero1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Hero Content - Fully responsive layout */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center min-h-screen pt-20 sm:pt-24 md:pt-32 lg:pt-40">
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-6xl text-white w-full"
          >
            {/* Main Heading - Improved responsive text sizing */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium-heading mb-6 sm:mb-8 md:mb-10 leading-[1.1]"
            >
              <span className="block mb-3 sm:mb-4 md:mb-5" style={{ 
                color: '#B8860B' /* Darker, richer gold color */
              }}>Unlock Your Property‬‭ Potential</span>
            </motion.h1>

            {/* Subtitle - Responsive text and spacing */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 md:mb-12 max-w-4xl font-body font-light leading-relaxed"
            >
              From your first strategic purchase‬‭ to successful development‬‭ and long-term investment, we guide you every step, minimising risks and maximising‬‭ returns.
            </motion.p>

            {/* CTA Buttons - Responsive layout and sizing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <Link href="/contact" className="cursor-pointer">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-white border-0 px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-medium group transition-all duration-300 hover:scale-105 hover:shadow-xl font-body cursor-pointer"
                  style={{ 
                    borderRadius: '0',
                    backgroundColor: '#B8860B' /* Darker, richer gold color matching text */
                  }}
                >
                  Book Your Free Consultation
                  <ArrowRight className="w-4 sm:w-4 md:w-5 h-4 sm:h-4 md:h-5 ml-2 sm:ml-2 md:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              
              <Link href="/services" className="w-full sm:w-auto cursor-pointer">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-white hover:text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-medium transition-all duration-300 hover:scale-105 font-body cursor-pointer"
                  style={{ 
                    borderRadius: '0',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(4px)'
                  }}
                >
                  View Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>


    </section>
  )
}
