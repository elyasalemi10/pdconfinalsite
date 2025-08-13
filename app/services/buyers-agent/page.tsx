"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { Lightbulb, ArrowRight, Phone, Calendar, Search, CheckCircle, Building, BarChart3, Handshake, MapPin, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/sections/footer"

const acquisitionProcess = [
  {
    number: "1",
    title: "Strategic Consultation",
    description: "Complete detailed questionnaire outlining your goals, criteria, and financial position for personalised strategy development."
  },
  {
    number: "2",
    title: "Market Analysis & Search",
    description: "Our team leverages extensive networks to identify on-market and off-market properties that align with your strategic objectives."
  },
  {
    number: "3",
    title: "Property Evaluation",
    description: "Comprehensive assessment using developer's insight to identify hidden potential and long-term growth prospects."
  },
  {
    number: "4",
    title: "Acquisition Support",
    description: "Professional negotiation and purchase support to secure your strategic property investment at optimal terms."
  }
]

const whyChooseUs = [
  {
    icon: Search,
    title: "Market Intelligence",
    description: "Advanced property search capabilities with access to off-market opportunities and comprehensive market analysis."
  },
  {
    icon: MapPin,
    title: "Location Expertise",
    description: "Deep knowledge of Victoria's growth corridors and emerging investment hotspots for strategic property selection."
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    description: "Thorough due diligence and property evaluation to protect your investment and minimise acquisition risks."
  },
  {
    icon: Zap,
    title: "Fast Execution",
    description: "Rapid property identification and acquisition support to secure opportunities before they reach the market."
  }
]

const networkPartners = [
  {
    icon: Handshake,
    category: "Real Estate Network",
    description: "Extensive network of real estate agents across Victoria providing access to off-market opportunities and exclusive listings before they hit the public market."
  },
  {
    icon: Building,
    category: "Development Partners", 
    description: "Strategic partnerships with premier builders including Ghan Homes, Masci Group, and Alpha 14 for future development potential assessment."
  },
  {
    icon: BarChart3,
    category: "Market Intelligence",
    description: "Access to comprehensive market data and analysis tools for informed decision-making and strategic property selection."
  }
]

export default function BuyersAgentPage() {
  useEffect(() => {
    document.title = "Buyer's Agent Services - Strategic Property Acquisition | PDCON";
  }, []);

  return (
    <>
      <main className="relative">
        {/* Hero Section - Large Background Design */}
        <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden">
          {/* Large Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/propertymanagement.jpg"
              alt="Strategic Property Acquisition Services"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
              
              {/* Content overlay - centered from header to bottom */}
              <div className="px-4 flex flex-col justify-center min-h-[calc(80vh-80px)] pt-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex justify-center mb-4 sm:mb-6"
                >
                  <span className="text-white font-semibold text-sm sm:text-base md:text-lg font-body">Strategic Property Acquisition</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium-heading text-white leading-tight mb-6 sm:mb-8"
                >
                  <span className="sm:hidden">Data-Driven Property Acquisition</span>
                  <span className="hidden sm:block">Your Wealth Launchpad:
                  <br />
                  Data-Driven Property Acquisition</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-6 sm:mb-8 font-body"
                >
                  We leverage our vast network across Victoria to access off-market opportunities and properties with hidden development potential that others might miss.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                                  <Link href="/contact" className="w-full sm:w-auto cursor-pointer">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-white border-0 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold group transition-all duration-300 hover:scale-102 hover:shadow-lg font-body cursor-pointer"
                  style={{ 
                    borderRadius: '0',
                    background: 'linear-gradient(to right, #eab308, #d97706)',
                    backgroundColor: '#eab308',
                    boxShadow: '0 10px 15px -3px rgba(234, 179, 8, 0.2), 0 4px 6px -2px rgba(234, 179, 8, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'linear-gradient(to right, #d97706, #b45309)';
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 20px 25px -5px rgba(234, 179, 8, 0.25), 0 10px 10px -5px rgba(234, 179, 8, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'linear-gradient(to right, #eab308, #d97706)';
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 10px 15px -3px rgba(234, 179, 8, 0.2), 0 4px 6px -2px rgba(234, 179, 8, 0.1)';
                  }}
                    >
                      Start Your Journey
                      <ArrowRight className="w-4 sm:w-4 md:w-5 h-4 sm:h-4 md:h-5 ml-2 sm:ml-2 md:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    className="hidden sm:flex w-full sm:w-auto border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold font-body hover:bg-white/10 hover:border-white/80 hover:text-white transition-none"
                    style={{ borderRadius: '0' }}
                  >
                    <Phone className="w-4 sm:w-4 md:w-5 h-4 sm:h-4 md:h-5 mr-2 sm:mr-2 md:mr-3" />
                    Call: 0408 255 259
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Expert Leadership Section - 1st Section */}
        <section className="relative py-8 sm:py-10 md:py-16 lg:py-20 bg-white overflow-hidden">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
                
              {/* Content Side */}
              <div className="space-y-6 sm:space-y-8 order-1 lg:order-1">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium-heading text-slate-900 mb-4">
                    Expert-Led
                    <br />
                    <span className="text-slate-900">
                      Property Acquisition
                    </span>
                  </h2>
                  
                  <div className="space-y-4 text-base sm:text-lg leading-relaxed font-body text-slate-600">
                    <p>
                      Baqir Rezaie brings over a decade of property development expertise to your acquisition strategy. With a Postgraduate Diploma in Property & Real Estate Context and experience managing projects worth more than $100 million, you're guided by proven expertise.
                    </p>
                    
                    <p>
                      As a second-generation construction professional, Baqir combines inherited industry knowledge with cutting-edge property development insights, ensuring your property selection serves both immediate needs and long-term wealth creation goals.
                    </p>
                  </div>
                </div>
                      
                {/* Why Choose Us Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {whyChooseUs.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: '#0f172a' }}>
                        <item.icon className="w-4 h-4" style={{ color: '#ffffff' }} />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1 text-sm font-heading">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 text-xs font-body leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Image Side */}
              <div className="order-2 lg:order-2">
                <div className="relative">
                  <div className="relative h-64 sm:h-80 md:h-96 lg:h-[25rem] xl:h-[35rem] overflow-hidden shadow-2xl">
                    <Image
                      src="/images/buyer pic.jpg"
                      alt="Baqir Rezaie - PDCON Founder"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Acquisition Process Section - 2nd Section */}
        <section className="relative py-8 sm:py-10 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(30deg, transparent 40%, rgba(59, 130, 246, 0.04) 41%, rgba(59, 130, 246, 0.04) 42%, transparent 43%),
                  linear-gradient(-30deg, transparent 40%, rgba(168, 85, 247, 0.04) 41%, rgba(168, 85, 247, 0.04) 42%, transparent 43%)
                `,
                backgroundSize: '80px 80px'
              }}
              animate={{
                backgroundPosition: ['0px 0px', '80px 80px']
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
              
              {/* Header */}
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium-heading text-slate-900 mb-4"
                >
                  Our Strategic
                  <br />
                  <span className="text-slate-900">
                    Acquisition Process
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-body"
                >
                  A systematic approach to identifying and securing your ideal property investment
                </motion.p>
              </div>

              {/* Process Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {acquisitionProcess.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative bg-transparent p-6 sm:p-8"
                  >
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="w-12 sm:w-16 h-12 sm:h-16 font-bold flex items-center justify-center text-xl sm:text-2xl flex-shrink-0" style={{ backgroundColor: '#0f172a', color: '#ffffff' }}>
                        {step.number}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-medium-heading text-slate-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-body">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Network Advantage Section - 3rd Section (Remove blue tint) */}
        <section className="relative py-8 sm:py-10 md:py-16 lg:py-20 bg-white overflow-hidden">
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
            <div className="max-w-6xl mx-auto">
              
              {/* Header */}
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium-heading text-slate-900 mb-4"
                >
                  Our Network,
                  <br />
                  <span className="text-slate-900">
                    Your Advantage
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-body"
                >
                  Strategic partnerships and industry connections that give you access to opportunities others miss
                </motion.p>
              </div>

              {/* Network Partners Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {networkPartners.map((partner, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative bg-transparent p-6 sm:p-8"
                  >
                    {/* Icon and Title */}
                    <div className="flex flex-col items-center text-center mb-6">
                      <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#0f172a' }}>
                        <partner.icon className="w-5 sm:w-7 md:w-8 h-5 sm:h-7 md:h-8" style={{ color: '#ffffff' }} />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-medium-heading text-slate-900">
                        {partner.category}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-body text-center">
                      {partner.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart Section - 4th Section (Simplified, no gold) */}
        <section className="relative py-8 sm:py-10 md:py-16 lg:py-20 bg-white overflow-hidden">
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
            <div className="max-w-4xl mx-auto">
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-8 sm:mb-12 md:mb-16"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium-heading text-slate-900 mb-4 sm:mb-6">
                  What Sets Us Apart?
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-body max-w-3xl mx-auto">
                  We leverage our vast network of real estate agents across Victoria to access off-market opportunities and properties with hidden development potential that others might miss. We don't just see a house; we see a strategic asset with long-term growth prospects, analysing beyond immediate market trends.
                </p>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-body max-w-3xl mx-auto mt-4">
                  This fusion of real estate acumen with a property developer's insight ensures your purchase is not just a home, but a powerful accelerant for your wealth.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-8 sm:py-12 md:py-16 text-white overflow-hidden" style={{ backgroundColor: '#161441' }}>
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/[0.03] to-blue-800/[0.05]"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6"
            >
              {/* Main Headline */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium-heading leading-tight text-white">
                Ready to Start Your
                <span className="text-white">
                  {" "}Property Search?
                </span>
              </h2>
              
              {/* Description */}
              <p className="text-base sm:text-lg text-white/80 leading-relaxed font-body max-w-2xl mx-auto">
                Let our Strategic Property Acquisition service guide you to your next wealth-building opportunity. Complete our detailed questionnaire and discover properties with hidden potential.
              </p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-2 sm:pt-4"
              >
                {/* Primary CTA Button */}
                <Link href="/contact" className="cursor-pointer">
                  <button 
                    className="group text-white font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-body flex items-center cursor-pointer"
                    style={{ 
                      background: 'linear-gradient(to right, #eab308, #d97706)',
                      backgroundColor: '#eab308',
                      boxShadow: '0 10px 15px -3px rgba(234, 179, 8, 0.2), 0 4px 6px -2px rgba(234, 179, 8, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = 'linear-gradient(to right, #d97706, #b45309)';
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 20px 25px -5px rgba(234, 179, 8, 0.25), 0 10px 10px -5px rgba(234, 179, 8, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = 'linear-gradient(to right, #eab308, #d97706)';
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 10px 15px -3px rgba(234, 179, 8, 0.2), 0 4px 6px -2px rgba(234, 179, 8, 0.1)';
                    }}
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Start Your Property Search
                  </button>
                </Link>
                
                {/* Secondary CTA - Phone */}
                <button className="group bg-white/10 border-2 border-white/30 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-none shadow-lg backdrop-blur-sm font-body flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  <span>
                    Call: 
                    <span className="ml-1">0408 255 259</span>
                  </span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
} 