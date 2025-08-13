"use client"

import { motion } from "framer-motion"
import { Clock, Shield, TrendingUp, Users, Zap, DollarSign } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Time Savings",
    points: [
      "24/7 property management without your involvement",
      "Automated rent collection and maintenance requests", 
      "Streamlined permit processing saves months of delays"
    ]
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    points: [
      "Comprehensive tenant screening reduces bad tenants",
      "Legal compliance across all property regulations",
      "Bonded and insured for complete protection"
    ]
  },
  {
    icon: TrendingUp,
    title: "Maximised Returns",
    points: [
      "Market-rate rent optimization increases revenue",
      "Cost-effective maintenance reduces expensive repairs",
      "Investment opportunities with proven ROI track records"
    ]
  },
  {
    icon: Users,
    title: "Expert Management",
    points: [
      "Experienced team handling all tenant relations",
      "Professional maintenance network for quick response",
      "Dedicated account managers for personalized service"
    ]
  },
  {
    icon: Zap,
    title: "Rapid Processing",
    points: [
      "Fast-track permit approvals through established relationships",
      "Same-day response to all property issues",
      "Quick turnaround on investment opportunity analysis"
    ]
  },
  {
    icon: DollarSign,
    title: "Cost Efficiency",
    points: [
      "Competitive management fees with transparent pricing",
      "Bulk purchasing power reduces maintenance costs",
      "Strategic investment guidance maximises portfolio value"
    ]
  }
]

export default function BenefitsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="relative py-12 md:py-16 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 via-slate-900 to-slate-800/50" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white font-heading">
            Why Choose PdCon
          </h2>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-body">
            Experience the advantages of professional property management, streamlined permits, and strategic investments.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
            >
              <div className="relative h-full bg-slate-800 border-2 border-slate-700 hover:border-blue-500 p-6 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/20">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-4 tracking-wide group-hover:text-blue-300 transition-colors duration-300 font-heading">
                  {benefit.title}
                </h3>

                {/* Benefit Points */}
                <div className="space-y-3">
                  {benefit.points.map((point, pointIndex) => (
                    <div key={pointIndex} className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-blue-400 mt-2 flex-shrink-0 group-hover:bg-blue-300 transition-colors duration-300" />
                      <p className="text-slate-300 text-xs leading-relaxed group-hover:text-slate-200 transition-colors duration-300 font-body">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-1" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 