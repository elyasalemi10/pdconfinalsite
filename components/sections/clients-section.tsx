"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonialLogos = [
  "ABC Manufacturing",
  "Colorado Tech", 
  "Denver Motors",
  "Rocky Mountain Corp",
  "Front Range Industries",
  "Mile High Logistics",
  "Summit Construction",
  "Boulder Enterprises",
  "Peak Performance Co",
  "Alpine Solutions"
]

export default function ClientsSection() {
  return (
    <section className="relative py-12 md:py-16 bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/[0.5] via-transparent to-blue-100/[0.3]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-700">
            Our Clients
          </h2>
        </motion.div>

        {/* Client Logos Grid - 10 clients layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {testimonialLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Clean rectangle card with image placeholder */}
                <div className="relative p-4 bg-white rounded-xl border-2 border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-md group-hover:scale-105">
                  {/* Actual Client Logo */}
                  <div className="w-full h-12 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                    <Image
                      src={`/images/client${index === 0 || index === 1 || index === 8 || index === 9 ? ' ' : ''}${index + 1}.avif`}
                      alt={`${logo} logo`}
                      className="w-full h-full object-contain"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 