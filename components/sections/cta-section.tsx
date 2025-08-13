"use client"

import { motion } from "framer-motion"
import { ArrowRight, Star, Users, Trophy, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { icon: Users, value: "500+", label: "Properties Managed" },
  { icon: Trophy, value: "98%", label: "Client Satisfaction" },
  { icon: Zap, value: "Same Day", label: "Response Time" },
  { icon: Star, value: "4.9", label: "Average Rating" }
]

export default function CTASection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#161441' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-blue-500/10 blur-3xl"
          animate={{
            x: [-50, 50, -50],
            y: [-30, 30, -30],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl"
          animate={{
            x: [50, -50, 50],
            y: [30, -30, 30],
            scale: [1.2, 1, 1.2]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-20 items-center">
          
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-400/20 border border-blue-400/30 px-4 py-2"
            >
              <Star className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-semibold text-sm font-body">Premium Property Solutions</span>
          </motion.div>

            {/* Main Headline */}
            <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl xl:text-7xl font-medium-heading text-white leading-tight"
            >
              Transform Your
              <br />
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                  Property Empire
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-500"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-lg font-body"
            >
              Join hundreds of successful property owners who trust us to maximise their investments while they focus on what matters most.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
                className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white border-0 px-8 py-6 text-lg font-semibold group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/25 font-body"
                style={{ borderRadius: '0' }}
            >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/60 text-slate-900 bg-white/90 hover:bg-white hover:border-white px-8 py-6 text-lg font-semibold backdrop-blur-sm font-body transition-all duration-300"
                style={{ borderRadius: '0' }}
              >
                Schedule Consultation
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-blue-400 fill-blue-400" />
                ))}
              </div>
              <span className="text-white/70 font-body">Trusted by 500+ property owners</span>
            </motion.div>
          </motion.div>

          {/* Right Side - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-blue-500/20 blur-3xl" />
            
            {/* Stats Grid */}
            <div className="relative grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.3 + index * 0.1,
                    ease: "easeOut" 
                  }}
                  whileHover={{ 
                    y: -10, 
                    transition: { duration: 0.3 } 
                  }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-8 h-full overflow-hidden">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Value */}
                    <div className="text-3xl md:text-4xl font-medium-heading text-white mb-2">
                      {stat.value}
                    </div>
                    
                    {/* Label */}
                    <div className="text-white/70 font-body text-sm leading-relaxed">
                      {stat.label}
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 transform rotate-45 translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* External Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                </motion.div>
              ))}
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/30 to-blue-500/30 blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-2xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
