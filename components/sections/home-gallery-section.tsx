"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function HomeGallerySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

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
            Gallery
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of completed epoxy flooring projects showcasing quality craftsmanship and stunning transformations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {Array.from({ length: 12 }, (_, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
            >
              {/* Gallery Item */}
              <div className="relative aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl border-2 border-slate-200 hover:border-blue-300 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/20 overflow-hidden">
                {/* Actual Image */}
                <Image
                  src={`/images/gallery${index + 1}.avif`}
                  alt={`Epoxy flooring project ${index + 1}`}
                  className="w-full h-full object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 