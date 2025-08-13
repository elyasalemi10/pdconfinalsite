"use client"

import { motion } from "framer-motion"
import { Home, Wrench, Shield, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const features = [
  {
    icon: Home,
    title: "Residential Epoxy",
    description: "Transform your garage, basement, or patio with our premium residential epoxy flooring solutions that combine durability with stunning aesthetics.",
    accentColor: "from-blue-400 to-blue-600",
    iconBg: "bg-blue-500",
    image: "/images/plain epoxy.avif"
  },
  {
    icon: Wrench,
    title: "Commercial Flooring",
    description: "Heavy-duty commercial epoxy systems designed for warehouses, showrooms, and industrial spaces that withstand high traffic and heavy loads.",
    accentColor: "from-slate-400 to-blue-500",
    iconBg: "bg-slate-600",
    image: "/images/epoxycoat.avif"
  },
  {
    icon: Shield,
    title: "Industrial Coatings",
    description: "Chemical-resistant, slip-resistant industrial epoxy coatings that meet the most demanding safety and performance requirements.",
    accentColor: "from-blue-600 to-blue-800",
    iconBg: "bg-blue-700",
    image: "/images/paint coat.avif"
  },
  {
    icon: Sparkles,
    title: "Decorative Finishes",
    description: "Custom decorative epoxy finishes with metallic, flake, and quartz options to create unique, eye-catching floor designs.",
    accentColor: "from-blue-300 to-slate-500",
    iconBg: "bg-blue-400",
    image: "/images/metallic.avif"
  },
]

export default function FeaturesSection() {
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
    <section id="services" className="relative py-24 md:py-32 bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/[0.5] via-transparent to-blue-100/[0.3]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-700">
            Our Epoxy Services
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Professional epoxy flooring solutions for every space, from beautiful residential applications to heavy-duty industrial installations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              className="group relative"
              whileHover={{ y: -15, transition: { duration: 0.3, ease: "easeOut" } }}
            >
              {/* Modern card with gradient border */}
              <div className="relative h-full">
                {/* Gradient border */}
                <div className={cn(
                  "absolute inset-0 rounded-2xl bg-gradient-to-br p-[2px] group-hover:p-[3px] transition-all duration-500",
                  `bg-gradient-to-br ${feature.accentColor}`
                )}>
                  <div className="w-full h-full rounded-2xl bg-white" />
                </div>
                
                {/* Content */}
                <div className="relative p-8 h-full flex flex-col rounded-2xl bg-white">
                  {/* Service Image */}
                  <div className="relative h-32 rounded-xl overflow-hidden mb-6 border-2 border-slate-100">
                    <Image
                      src={feature.image}
                      alt={`${feature.title} epoxy flooring`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Top decorative line */}
                  <div className={cn(
                    "w-full h-1 rounded-full mb-6 bg-gradient-to-r opacity-60 group-hover:opacity-100 transition-opacity duration-300",
                    feature.accentColor
                  )} />

                  {/* Icon with unique background */}
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg",
                    feature.iconBg
                  )}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">{feature.title}</h3>

                  <p className="text-slate-600 leading-relaxed flex-grow text-sm">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
