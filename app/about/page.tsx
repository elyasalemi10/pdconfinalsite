"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Lightbulb, Shield, ArrowRight, Heart, Target, Zap, CheckCircle, Calendar, Phone, Award, Users, Building, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/sections/footer"

const networkPartners = [
  {
    category: "Leading Legal Counsel",
    description: "Working with top-tier lawyers such as Tom Cantwell from MillsOakley and David Grant from Colin Biggers & Paisley (recognised in The Best Lawyers in Australia 2023-2026), ensures your projects are legally sound and protected.",
    icon: Shield
  },
  {
    category: "Premier Builders",
    description: "Our collaboration with Ghan Homes (luxury custom residential) and Masci Group (experienced commercial builder for childcare, schools, medical centres, and warehouses) provides unparalleled construction excellence. We've also partnered with major commercial developers like Alpha 14 on high-rise and apartment projects.",
    icon: Building
  },
  {
    category: "Specialised Financial Advisors & Real Estate Agents",
    description: "Experts who understand the nuances of property finance and market dynamics to optimise your buying and selling strategies.",
    icon: TrendingUp
  },
  {
    category: "Dedicated Accountants",
    description: "Ensuring optimal financial structuring and tax efficiency for your investments.",
    icon: Target
  }
]

export default function AboutPage() {
  return (
    <>
      <main className="relative">
        {/* Hero Section - Large Background Design */}
        <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden">
          {/* Large Background Image */}
          <div className="absolute inset-0">
                <Image
              src="/images/about hero.jpg"
              alt="Built on Experience, Driven by Excellence"
                  fill
              className="object-cover object-center"
              priority
                />
                <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Hero Content - Centered like main about page */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
              
              {/* Content overlay on the large image - centered from header to bottom */}
              <div className="px-4 flex flex-col justify-center min-h-[calc(80vh-80px)] pt-20">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex justify-center mb-4 sm:mb-6"
                  >
                  <span className="text-white font-semibold text-sm sm:text-base md:text-lg font-body">About PDCON</span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium-heading text-white leading-tight mb-6 sm:mb-8"
                  >
                  Built on Experience,
                    <br />
                  <span className="text-white">
                    Driven by Excellence
                    </span>
                  </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-6 sm:mb-8 font-body"
              >
                  From second-generation construction heritage to industry-leading property development expertise, PDCON transforms your property aspirations into profitable realities.
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

        {/* Baqir's Story Section */}
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
                    The Founder's
                    <br />
                    <span className="text-slate-900">
                      Journey
                    </span>
                  </h2>
                  
                  <div className="space-y-4 text-base sm:text-lg leading-relaxed font-body text-slate-600">
                    <p>
                      Baqir Rezaie established PDCON in 2013 with a clear vision: to elevate the construction and property development industry through unparalleled subcontracting and strategic client partnerships. As a second-generation professional in the construction field, Baqir didn't just inherit knowledge; he meticulously built upon it.
                    </p>
                    
                    <p>
                      This rigorous journey was driven by a deep understanding of the challenges and common pitfalls in property. Baqir's personal experiences, including navigating complex issues and learning from mistakes, now form the bedrock of PDCON's client-centric approach.
                    </p>
                  </div>
                      </div>
                      
                {/* Key Achievements */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                      <Award className="w-4 sm:w-5 h-4 sm:h-5 text-slate-900" />
                    </div>
                    <span className="font-body text-sm sm:text-base text-slate-700">
                      Successfully managed and developed projects worth more than $100 million
                    </span>
                    </div>
                  
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                      <Users className="w-4 sm:w-5 h-4 sm:h-5 text-slate-900" />
                </div>
                    <span className="font-body text-sm sm:text-base text-slate-700">
                      Second-generation construction professional with industry heritage
                      </span>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                      <Heart className="w-4 sm:w-5 h-4 sm:h-5 text-slate-900" />
                        </div>
                    <span className="font-body text-sm sm:text-base text-slate-700">
                      Proud father of three kids, dedicated to giving back to the community
                        </span>
                      </div>
                </div>
              </div>

              {/* Image Side */}
              <div className="order-2 lg:order-2">
                <div className="relative">
                  <div className="relative h-64 sm:h-80 md:h-96 lg:h-[25rem] xl:h-[35rem] overflow-hidden shadow-2xl">
                    <Image
                      src="/images/abt img.JPG"
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

        {/* Network Section - Enhanced Visibility */}
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
                  Strategic partnerships with industry leaders ensure your project success
                </motion.p>
              </div>

              {/* Network Partners Grid - Enhanced Visibility */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {networkPartners.map((partner, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative bg-transparent"
                  >
                    <div className="p-6 sm:p-8">
                      {/* Icon and Title */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex-shrink-0">
                          <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0f172a' }}>
                            <partner.icon className="w-7 sm:w-8 h-7 sm:h-8" style={{ color: '#ffffff' }} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl font-medium-heading text-slate-900">
                            {partner.category}
                          </h3>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-body mb-6">
                        {partner.description}
                      </p>

                                            {/* Partner Logos */}
                      {partner.category === "Leading Legal Counsel" && (
                        <div className="flex gap-3 mb-6">
                          <div className="flex-1 h-20 bg-white rounded-lg border border-slate-200 flex items-center justify-center p-3">
                            <div className="relative w-full h-full">
                              <Image
                                src="/images/mills oakley.png"
                                alt="Mills Oakley"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 50vw, 25vw"
                              />
                            </div>
                          </div>
                          <div className="flex-1 h-20 bg-white rounded-lg border border-slate-200 flex items-center justify-center p-3">
                            <div className="relative w-full h-full">
                              <Image
                                src="/images/collin biggers.png"
                                alt="Colin Biggers & Paisley"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 50vw, 25vw"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {partner.category === "Premier Builders" && (
                        <div className="flex gap-2 mb-6">
                          <div className="flex-1 h-20 bg-white rounded-lg border border-slate-200 flex items-center justify-center overflow-hidden">
                            <div className="relative w-full h-full scale-150">
                              <Image
                                src="/images/ghan-homes-logo.png"
                                alt="Ghan Homes"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 33vw, 16vw"
                              />
                            </div>
                          </div>
                          <div className="flex-1 h-20 bg-white rounded-lg border border-slate-200 flex items-center justify-center p-3">
                            <div className="relative w-full h-full">
                              <Image
                                src="/images/masci.png"
                                alt="Masci Group"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 33vw, 16vw"
                              />
                            </div>
                          </div>
                          <div className="flex-1 h-20 bg-white rounded-lg border border-slate-200 flex items-center justify-center p-3">
                            <div className="relative w-full h-full">
                              <Image
                                src="/images/alpha14.png"
                                alt="Alpha 14"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 33vw, 16vw"
                              />
                            </div>
                      </div>
                    </div>
                      )}
                      
                  </div>
                </motion.div>
              ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
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
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-8 sm:mb-12 md:mb-16"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium-heading text-slate-900 mb-3 sm:mb-4">
                  Our Mission &
                  <span className="text-slate-900">
                    {" "}Vision
                  </span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Mission */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="bg-transparent p-6 sm:p-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center" style={{ backgroundColor: '#0f172a' }}>
                      <Target className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: '#ffffff' }} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-medium-heading text-slate-900">Our Mission</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-body text-sm sm:text-base">
                    To empower individuals and investors to achieve their financial goals faster by minimising mistakes and maximising profit through data-driven decisions, strategic guidance, and seamless project execution.
                  </p>
                </motion.div>

                {/* Vision */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-transparent p-6 sm:p-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center" style={{ backgroundColor: '#0f172a' }}>
                      <Zap className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: '#ffffff' }} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-medium-heading text-slate-900">Our Vision</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-body text-sm sm:text-base">
                    To be the trusted partner that provides a stress-free and highly profitable property development and wealth generation journey for every client.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Accelerate Your Property Journey Section */}
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium-heading leading-tight">
                Ready to Accelerate Your 
                <span className="text-white">
                  {" "}Property Journey?
                </span>
              </h2>
              
              {/* Description */}
              <p className="text-base sm:text-lg text-white/80 leading-relaxed font-body max-w-2xl mx-auto">
                Connect with PDCON today to discuss your‬‭ unique goals. Let our expertise‬‭ guide you to smarter decisions and greater success.
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
              <span className="sm:hidden">Contact Us</span>
              <span className="hidden sm:inline">Schedule Your Consultation</span>
            </button>
                  </Link>
                
                {/* Secondary CTA - Phone */}
                <button className="bg-white/10 border-2 border-white/30 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg backdrop-blur-sm font-body flex items-center">
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