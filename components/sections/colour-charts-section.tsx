"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const standardCoatings = [
  { name: "Slate" },
  { name: "Tan" },
  { name: "Onyx Black" },
  { name: "Grey" },
  { name: "Titanium Grey" }
]

const advancedCoatings = [
  { name: "Ultra Flake" },
  { name: "Hyper Flake" },
  { name: "Grip Finish" },
  { name: "Quartz Shield" },
  { name: "Plain Epoxy" },
  { name: "Metallic" },
  { name: "Glitter Flooring" }
]

export default function ColourChartsSection() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
            Colour Charts
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12 font-body">
            Choose from our extensive range of coating colours and finishes to create the perfect look for your space.
          </p>
        </motion.div>

        {/* Standard Protective Coating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
              Standard Protective Coating
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {standardCoatings.map((coating, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
                whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
              >
                <div className="relative bg-white rounded-xl border-2 border-slate-200 hover:border-blue-300 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/20 overflow-hidden">
                  {/* Single Color Sample Placeholder */}
                  <div className="p-3">
                    <div className="relative h-24 rounded-lg mb-3 overflow-hidden">
                      <Image
                        src={`/images/${coating.name.toLowerCase()}.avif`}
                        alt={`${coating.name} coating sample`}
                        className="w-full h-full object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    {/* Color name only */}
                    <div className="text-center">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                        {coating.name}
                      </h4>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Advanced Protective Coating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
              Advanced Protective Coating
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4"
          >
            {advancedCoatings.map((coating, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
                whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
              >
                <div className="relative bg-white rounded-xl border-2 border-slate-200 hover:border-blue-300 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/20 overflow-hidden">
                  {/* Single Color Sample Placeholder */}
                  <div className="p-3">
                    <div className="relative h-20 rounded-lg mb-2 overflow-hidden">
                      <Image
                        src={`/images/${coating.name.toLowerCase().replace(/\s+/g, ' ')}.avif`}
                        alt={`${coating.name} coating sample`}
                        className="w-full h-full object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    {/* Color name only */}
                    <div className="text-center">
                      <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                        {coating.name}
                      </h4>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 