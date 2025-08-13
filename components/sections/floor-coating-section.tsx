"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
// SVG icon with CSS fallback for older browsers
const ArrowRightIcon = () => (
  <div className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300 flex items-center justify-center relative">
    <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
    <style jsx>{`
      @supports not (display: inline-block) {
        svg { display: none !important; }
        .arrow-fallback { display: inline-block !important; }
      }
    `}</style>
    <span className="arrow-fallback absolute inset-0 flex items-center justify-center text-sm font-bold" style={{ display: 'none' }}>→</span>
  </div>
);

const services = [
  {
    title: "Strategic Property Acquisition",
    description: "Beyond just buying, we identify properties with hidden potential and long-term growth opportunities, ensuring your foundation is solid.",
    image: "/images/propertymanagement.jpg",
    color: "from-blue-500 to-indigo-600",
    link: "/services/buyers-agent"
  },
  {
    title: "Property Development Management",
    description: "From concept to completion, we streamline the entire development process – planning, permits, and expert project oversight – for maximum profitability.",
    image: "/images/permit.jpg",
    color: "from-amber-500 to-orange-600",
    link: "/services/project-management"
  },
  {
    title: "Long-Term Investment Strategies",
    description: "Build lasting wealth with data-driven investment analysis and proper structuring for sustainable capital growth.",
    image: "/images/investment.jpg",
    color: "from-emerald-500 to-teal-600",
    link: "/services/development-consultation"
  }
]

export default function ServicesSection() {
  return (
    <section className="relative py-8 sm:py-10 md:py-16 lg:py-20 overflow-hidden bg-white">
      {/* Animated Background Pattern */}
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
            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent to-slate-900" />
            <span className="text-slate-900 font-semibold text-xs sm:text-sm uppercase tracking-wider font-body">Our Services</span>
            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-l from-transparent to-slate-900" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium-heading text-slate-900 mb-4 sm:mb-6">
            Your Path to Property Wealth
            <br />
            <span className="text-slate-900">
              Tailored to You
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto font-body">
                          Whether you're looking to make your first strategic property move, undertake a significant 
            development, or grow a robust investment portfolio, PDCON offers comprehensive services 
            designed to achieve your specific financial goals.
          </p>
        </motion.div>

        {/* Services Grid - Responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Card Background */}
              <div className="relative bg-transparent overflow-hidden">
                {/* Image - Responsive height */}
                <div className="w-full h-40 sm:h-48 md:h-52 lg:h-56 relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content - Responsive padding */}
                <div className="relative pr-6 sm:pr-8 pt-6 sm:pt-8 pb-6 sm:pb-8">
                  {/* Title and Description */}
                  <div className="text-left">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium-heading text-slate-900 mb-4 sm:mb-6 leading-tight tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-4 sm:mb-6 font-body leading-relaxed text-sm sm:text-base">
                      {service.description}
                    </p>
                    <Link href={service.link} className="text-yellow-600 hover:text-yellow-700 font-medium text-base cursor-pointer">
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>

              {/* External Glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Responsive sizing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-8 sm:mt-10 md:mt-12"
        >
          <Link href="/services">
            <div className="inline-flex items-center gap-3 sm:gap-4 text-white px-6 sm:px-8 py-4 sm:py-6 group hover:shadow-xl transition-all duration-300 shadow-lg cursor-pointer" style={{
              backgroundColor: '#0f172a',
              border: 'none'
            }}>
              <span className="font-semibold font-body text-sm sm:text-base">Explore All Our Services</span>
              <ArrowRightIcon />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 