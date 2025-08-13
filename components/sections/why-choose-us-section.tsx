"use client"

import { motion } from "framer-motion"
import { Award, MapPin, Heart } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Over 15 years of successful property developments and satisfied clients throughout Melbourne.",
    stats: ["50+ Completed Projects", "98% Client Satisfaction", "15+ Years Experience"],
    color: "from-blue-400 to-blue-500"
  },
  {
    icon: MapPin,
    title: "Local Market Knowledge",
    description: "Deep understanding of Melbourne's property development landscape, council requirements, zoning laws, and market opportunities in key growth areas.",
    stats: ["Melbourne Coverage", "Council Relationships", "Zoning Expertise"],
    color: "from-blue-400 to-blue-500"
  },
  {
    icon: Heart,
    title: "Client-First Approach",
    description: "Your vision is our priority. We provide personalized consultation, transparent communication, and dedicated project management to bring your development goals to life.",
    stats: ["Personalized Service", "Transparent Communication", "Dedicated Support"],
    color: "from-green-500 to-green-600"
  }
]

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-8 sm:py-10 md:py-16 lg:py-20 bg-white overflow-hidden">
      {/* Background Elements */}
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
        {/* Section Header - Responsive text sizing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-400" />
            <span className="text-blue-500 font-semibold text-xs sm:text-sm uppercase tracking-wider font-body">Why Choose Us</span>
            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-l from-transparent to-blue-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 font-heading">
            The PdCon
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              Advantage
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-body">
            Discover what sets us apart in the property development industry and why successful developers and investors trust us with their most important projects.
          </p>
        </motion.div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative h-full bg-white border-2 border-slate-200 p-6 sm:p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-slate-300">
                {/* Icon - Responsive sizing */}
                <div className="relative mb-4 sm:mb-6">
                  <div className={`w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-gradient-to-br ${reason.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <reason.icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-white" />
                  </div>
                  <div className="absolute -top-1 sm:-top-2 -left-1 sm:-left-2 w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 border-2 border-slate-200/50 group-hover:border-slate-300/70 transition-colors duration-300" />
                </div>

                {/* Content - Responsive spacing */}
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 font-heading group-hover:text-blue-500 transition-colors duration-300">
                    {reason.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed font-body text-sm sm:text-base">
                    {reason.description}
                  </p>

                  {/* Stats/Features - Responsive layout */}
                  <div className="space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-slate-200">
                    {reason.stats.map((stat, statIndex) => (
                      <motion.div
                        key={statIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.9 + statIndex * 0.1 }}
                        className="flex items-center gap-2 sm:gap-3"
                      >
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 transform rotate-45" />
                        <span className="text-slate-700 font-body text-xs sm:text-sm">{stat}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                
                {/* Corner Accent - Responsive sizing */}
                <div className="absolute top-0 right-0 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-blue-400 to-blue-500 transform rotate-45 translate-x-3 sm:translate-x-4 -translate-y-3 sm:-translate-y-4 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
} 