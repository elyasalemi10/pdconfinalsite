"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function IntroSection() {
  return (
    <section className="relative py-12 md:py-16 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/[0.3] via-transparent to-blue-100/[0.2]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden shadow-2xl shadow-blue-500/20 border-4 border-white/20">
              <Image
                src="/images/1.jpg"
                alt="Professional property management services"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
              
              {/* Quality Badge - Sharp corners */}
              <div className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-600/95 to-blue-700/95 backdrop-blur-sm px-4 py-2 border border-blue-400/30 shadow-lg">
                <div className="text-xs font-bold text-white">Licensed & Bonded</div>
                <div className="text-xs text-blue-100">Full Service Management</div>
              </div>
            </div>
          </motion.div>

          {/* Text Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <h2 className="text-2xl md:text-4xl font-medium-heading mb-4 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-700">
              Comprehensive Property Solutions for Maximum Returns
            </h2>
            
            <p className="text-base md:text-lg text-slate-600 mb-6 leading-relaxed font-body">
              PdCon specialises in full-service property management, streamlined permit acquisition, and lucrative investment opportunities in Melbourne and south east Melbourne suburbs. With years of experience in the industry, we help property owners maximise their returns while minimising their involvement. From tenant screening and maintenance coordination to navigating complex permit processes and identifying high-yield investment properties, we handle every aspect so you can focus on growing your portfolio.
            </p>

            {/* CTA Button - Matching hero style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white border-0 px-10 py-6 text-lg font-medium group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-400/25 font-body"
                style={{ borderRadius: '0' }}
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}