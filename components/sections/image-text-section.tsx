"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
// White icons for maximum visibility on dark background
const ShieldIcon = () => (
  <div className="w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center">
    <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="#ffffff" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  </div>
);

const BarChartIcon = () => (
  <div className="w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center">
    <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="#ffffff" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  </div>
);

const CheckCircleIcon = () => (
  <div className="w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center">
    <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="#ffffff" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </div>
);

const TrendingUpIcon = () => (
  <div className="w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center">
    <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="#ffffff" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  </div>
);

const benefits = [
  {
    icon: ShieldIcon,
    title: "Expert Guidance",
    description: "Avoid pitfalls with seasoned advice",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: BarChartIcon,
    title: "Data-Driven Decisions",
    description: "Smart investments, optimal outcomes",
    color: "from-blue-400 to-blue-500"
  },
  {
    icon: CheckCircleIcon,
    title: "Stress-Free Execution",
    description: "We manage the complexity, you enjoy the growth",
    color: "from-green-500 to-green-600"
  },
  {
    icon: TrendingUpIcon,
    title: "Accelerated Wealth",
    description: "Achieve your financial goals faster",
    color: "from-purple-500 to-purple-600"
  }
]

export default function ImageTextSection() {
  return (
    <section className="relative py-8 sm:py-10 md:py-16 lg:py-20 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-600/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-400/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Side - Image with responsive sizing */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Background Shape */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-blue-400/20 to-blue-500/20 blur-2xl" />
              
              {/* Image without frame or corners */}
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[35rem] xl:h-[45rem] overflow-hidden shadow-2xl">
                  <Image
                    src="/images/image1.jpg"
                    alt="Property Development Excellence"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                    priority
                    unoptimized
                  />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content with responsive spacing */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
          >
            {/* Main Headline - Responsive text sizing */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium-heading text-slate-900 leading-tight"
            >
              Why People
              <br />
              <span className="text-slate-900">
                Choose PdCon
              </span>
            </motion.h2>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="space-y-4 sm:space-y-6"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="flex items-start gap-4 sm:gap-6"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center shadow-lg" style={{ backgroundColor: '#0f172a' }}>
                      <benefit.icon />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-medium-heading text-slate-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base font-body leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Learn More Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="pt-4"
            >
              <Link 
                href="/about" 
                className="inline-block text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300 hover:shadow-xl font-body group"
                style={{
                  backgroundColor: '#0f172a',
                  textDecoration: 'none'
                }}
              >
                <span className="sm:hidden">Learn More</span>
                <span className="hidden sm:inline">Learn More About Our Approach</span>
                <svg className="w-5 h-5 ml-3 inline group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 