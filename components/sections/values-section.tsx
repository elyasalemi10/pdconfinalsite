"use client"

import { motion } from "framer-motion"
import { Shield, Users, Target, Lightbulb } from "lucide-react"
import { cn } from "@/lib/utils"

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We believe in honest communication, transparent pricing, and delivering exactly what we promise. Your trust is our foundation.",
    borderColor: "border-blue-300",
    bgPattern: "bg-gradient-to-br from-blue-50 via-white to-blue-100/30",
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "Our certified installers bring years of experience and ongoing training to ensure every project meets the highest standards.",
    borderColor: "border-blue-300",
    bgPattern: "bg-gradient-to-br from-blue-50 via-white to-blue-100/30",
  },
  {
    icon: Target,
    title: "Accountability",
    description: "We take full responsibility for our work, standing behind every installation with comprehensive warranties and responsive support.",
    borderColor: "border-blue-400",
    bgPattern: "bg-gradient-to-br from-blue-100 via-white to-blue-50",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay at the forefront of epoxy technology, using the latest materials and techniques to deliver superior results.",
    borderColor: "border-blue-400",
    bgPattern: "bg-gradient-to-br from-blue-100 via-white to-blue-50",
  },
]

export default function ValuesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
            Our Core Values
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            The principles that guide every project and drive our commitment to excellence in epoxy flooring.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              className="group relative"
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3, ease: "easeOut" } 
              }}
              animate={{ 
                y: 0,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Uniform design for all cards - keep dashed borders */}
              <div className={cn(
                "relative p-6 rounded-xl border-2 border-dashed transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/[0.15] h-full transform hover:rotate-1",
                value.borderColor,
                value.bgPattern
              )}>
                {/* Corner accents */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full opacity-30" />
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-blue-500 rounded-full opacity-40" />

                <div className="relative z-10">
                  {/* Diamond-shaped icon container - no scale effect */}
                  <div className="w-12 h-12 transform rotate-45 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 transition-transform duration-300 mx-auto shadow-lg shadow-blue-500/30">
                    <value.icon className="w-6 h-6 text-white transform -rotate-45" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3 text-center tracking-wide">{value.title}</h3>

                  <p className="text-slate-700 leading-relaxed text-center text-xs">{value.description}</p>

                  {/* Bottom accent line */}
                  <div className="mt-4 w-8 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 