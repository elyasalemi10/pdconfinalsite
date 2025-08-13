"use client"

import { motion } from "framer-motion"
import { Shield, BarChart3, CheckCircle, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

const benefits = [
  {
    icon: Shield,
    title: "Expert Guidance",
    description: "Avoid pitfalls with seasoned advice",
    color: "from-blue-400 to-blue-500"
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description: "Smart investments, optimal outcomes",
    color: "from-blue-400 to-blue-500"
  },
  {
    icon: CheckCircle,
    title: "Stress-Free Execution",
    description: "We manage the complexity, you enjoy the growth",
    color: "from-green-500 to-green-600"
  },
  {
    icon: TrendingUp,
    title: "Accelerated Wealth",
    description: "Achieve your financial goals faster",
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Expert Consultation",
    description: "Get personalized advice from our property development experts.",
    icon: Users,
    color: "from-blue-400 to-blue-500"
  }
]

export default function NavigatePropertySection() {
  return (
    <section className="relative py-8 sm:py-10 md:py-16 lg:py-20 bg-slate-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 40%, rgba(59, 130, 246, 0.02) 41%, rgba(59, 130, 246, 0.02) 42%, transparent 43%),
              linear-gradient(-45deg, transparent 40%, rgba(234, 179, 8, 0.02) 41%, rgba(234, 179, 8, 0.02) 42%, transparent 43%)
            `,
            backgroundSize: '80px 80px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '80px 80px']
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-400" />
            <span className="text-blue-500 font-semibold text-xs sm:text-sm uppercase tracking-wider font-body">Expert Guidance</span>
            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-l from-transparent to-blue-400" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium-heading text-slate-900 mb-4 sm:mb-6">
            Navigate Property with Confidence,
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              Not Costly Mistakes
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-body">
            Property development and investment can be complex, fraught with unforeseen challenges 
            and costly errors for the unprepared. At PDCON, we understand these hurdles because 
                            we've lived them. Our mission is to transform your property journey from daunting to
                definitive, ensuring you don't pay for mistakes but profit from expert guidance. With 
            data-driven strategies and a network of industry-leading professionals, we empower you 
            to make informed decisions, mitigate risks, and accelerate your wealth.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full bg-white border-2 border-slate-200 p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-slate-300">
                {/* Icon */}
                <div className="relative mb-4 sm:mb-6">
                  <div className={`w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br ${benefit.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <benefit.icon className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                  </div>
                  <div className="absolute -top-1 -left-1 w-14 sm:w-16 h-14 sm:h-16 border-2 border-slate-200/50 group-hover:border-slate-300/70 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 font-heading group-hover:text-blue-500 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base font-body leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-blue-400 to-blue-500 transform rotate-45 translate-x-3 sm:translate-x-4 -translate-y-3 sm:-translate-y-4 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 border-2 border-slate-200 p-6 sm:p-8 md:p-10 max-w-2xl mx-auto shadow-lg">
            <Link 
              href="/about" 
              className="inline-block bg-slate-900 hover:bg-slate-800 text-white px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-slate-900/25 font-body group"
            >
              Learn More About Our Approach
              <svg className="w-5 h-5 ml-3 inline group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 