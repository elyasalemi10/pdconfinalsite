"use client"

import { motion } from "framer-motion"
import Link from "next/link"
// Gold star icons with CSS hex colors
const StarIcon = ({ filled = true }) => (
  <div className="w-4 sm:w-5 h-4 sm:h-5 flex items-center justify-center">
    <svg className="w-4 sm:w-5 h-4 sm:h-5" fill={filled ? "#eab308" : "none"} stroke="#eab308" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  </div>
);

const QuoteIcon = () => (
  <div className="w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center">
    <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="#ffffff" viewBox="0 0 24 24">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
    </svg>
  </div>
);

const UserIcon = () => (
  <div className="w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center">
    <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="#ffffff" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  </div>
);

const testimonials = [
  {
    name: "Mohammad",
    initials: "M",
    rating: 5,
    text: "PDCON transformed our investment approach completely. Their data-driven strategies helped us identify opportunities we never would have found on our own.",
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "Tom",
    initials: "T",
    rating: 5,
    text: "The development process seemed overwhelming until we partnered with PDCON. They managed everything seamlessly, from permits to completion.",
    color: "from-green-500 to-green-600"
  },
  {
    name: "Ali",
    initials: "A",
    rating: 5,
    text: "Their expertise in strategic acquisitions helped us build a portfolio worth over $2M in just three years. Exceptional guidance and results.",
    color: "from-purple-500 to-purple-600"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="relative py-8 sm:py-10 md:py-16 lg:py-20 bg-white overflow-hidden">
      {/* Background Elements - Same as Services Section */}
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent to-slate-900" />
            <span className="text-slate-900 font-semibold text-xs sm:text-sm uppercase tracking-wider font-body">Client Success</span>
            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-l from-transparent to-slate-900" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium-heading text-slate-900 mb-4 sm:mb-6">
            Real Results, 
            <span className="text-slate-900">
              {" "}Real Stories
            </span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="relative h-full bg-transparent p-6 sm:p-8">
                {/* Quote Icon */}
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center shadow-lg" style={{ backgroundColor: '#0f172a' }}>
                    <QuoteIcon />
                  </div>
                  </div>

                {/* Star Rating */}
                <div className="flex mb-4 sm:mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                      >
                      <StarIcon filled={true} />
                      </motion.div>
                    ))}
                  </div>

                {/* Testimonial Text */}
                <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed font-body text-sm sm:text-base italic">
                  &ldquo;{testimonial.text}&rdquo;
                  </p>
                  
                  {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: '#808080' }}>
                    <UserIcon />
                  </div>
                  <p className="font-bold text-slate-900 text-sm sm:text-base font-heading">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Link href="/projects">
            <button className="text-white px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-medium transition-all duration-300 hover:shadow-xl font-body group cursor-pointer" style={{
              backgroundColor: '#0f172a',
              border: 'none'
            }}>
              More Success Stories
              <svg className="w-5 h-5 ml-3 inline group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
