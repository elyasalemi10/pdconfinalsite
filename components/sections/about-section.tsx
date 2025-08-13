"use client"

import { motion } from "framer-motion"
import { CheckCircle, TrendingUp } from "lucide-react"
import Image from "next/image"

const benefits = [
  "Premium quality epoxy materials",
  "Expert installation team",
  "Lifetime warranty options",
  "Fast project completion",
  "Competitive pricing",
  "Custom design solutions",
]

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <section className="relative py-12 md:py-16 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/[0.3] via-transparent to-blue-100/[0.2]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-700">
              Why Choose Pro Epoxy?
            </h2>
            <p className="text-base md:text-lg text-slate-600 mb-6 leading-relaxed">
              We are the premier epoxy flooring specialists with over 15 years of experience transforming spaces across the region. Our commitment to quality, innovation, and customer satisfaction sets us apart.
            </p>

            {/* Benefits List - Card Style */}
            <div className="relative p-4 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-md mb-6">
              <div className="absolute top-3 right-3 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-2 group p-1 rounded-lg hover:bg-white transition-all duration-300"
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-slate-700 group-hover:text-slate-900 transition-colors duration-300 font-medium text-xs">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-slate-100 to-slate-200 border border-slate-300 text-slate-700 hover:from-slate-200 hover:to-slate-300 transition-all duration-300 group shadow-md hover:shadow-lg text-sm"
              >
                <TrendingUp className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-semibold">Learn More About Us</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Image Placeholder - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden border-2 border-dashed border-slate-300 hover:border-blue-400 transition-all duration-300 shadow-md hover:shadow-lg aspect-[4/3]">
              <Image
                src="/images/why choose.webp"
                alt="Professional epoxy flooring installation"
                className="w-full h-full object-cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
