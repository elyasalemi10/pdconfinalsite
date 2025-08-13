"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { Lightbulb, ArrowRight, Phone, Calendar, Building, CheckCircle, TrendingUp, Calculator, Compass, PieChart, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/sections/footer"

const fourTests = [
  {
    number: "1",
    title: "Legally Permissible",
    description: "Conforming to all zoning and land use regulations.",
    details: "Comprehensive analysis of planning schemes, overlays, and permit requirements to ensure full compliance."
  },
  {
    number: "2", 
    title: "Physically Possible",
    description: "Ensuring the site can physically accommodate the proposed construction.",
    details: "Site assessment including soil conditions, drainage, access, and construction feasibility factors."
  },
  {
    number: "3",
    title: "Financially Feasible", 
    description: "Confirming the project aligns with market demands and demographics for profitability.",
    details: "Detailed cost analysis, market research, and financial modeling to validate project viability."
  },
  {
    number: "4",
    title: "Maximally Productive",
    description: "Optimising the land's potential to maximise your returns.",
    details: "Strategic design and development approach to achieve the highest and best use of the property."
  }
]

const consultationProcess = [
  {
    number: "1",
    title: "Goals Assessment",
    description: "Deep dive consultation to understand your financial objectives, risk tolerance, and investment timeline."
  },
  {
    number: "2",
    title: "Strategy Recommendation",
    description: "Based on your profile, receive tailored recommendations for either development or long-term investment approaches."
  },
  {
    number: "3",
    title: "Feasibility Analysis",
    description: "Comprehensive analysis using The Four Tests methodology for development projects or investment valuation for holdings."
  },
  {
    number: "4",
    title: "Action Plan",
    description: "Detailed roadmap with clear next steps, timelines, and expected outcomes for your chosen strategy."
  }
]

const pathwayOptions = [
  {
    icon: Building,
    title: "Development Path",
    subtitle: "For Accelerated Capital Growth",
    description: "Dynamic development projects designed to maximise returns through strategic property transformation.",
    features: [
      "Highest and Best Use analysis using The Four Tests",
      "Planning and permit strategy development",
      "Financial feasibility and profit projections",
      "Risk assessment and mitigation planning"
    ],
    benefits: "Accelerated capital growth and substantial profit potential"
  },
  {
    icon: TrendingUp,
    title: "Investment Path",
    subtitle: "For Structured Long-Term Growth",
    description: "Strategic long-term investment approach focused on steady wealth accumulation and portfolio growth.",
    features: [
      "Investment valuation analysis and market positioning",
      "Long-term growth projections and cash flow modeling",
      "Portfolio optimisation and diversification strategies",
      "Exit strategy planning and wealth preservation"
    ],
    benefits: "Steady wealth accumulation with reduced risk exposure"
  }
]

const expertiseHighlights = [
  {
    icon: Calculator,
    title: "Financial Modeling",
    description: "Advanced feasibility analysis and profit projections to validate development opportunities and investment returns."
  },
  {
    icon: Compass,
    title: "Strategic Direction",
    description: "Clear pathway determination between development and investment strategies based on your specific goals and market conditions."
  },
  {
    icon: PieChart,
    title: "Market Analysis",
    description: "Comprehensive demographic and market research to identify optimal development opportunities and investment timing."
  },
  {
    icon: Layers,
    title: "Multi-Faceted Planning",
    description: "Integrated approach combining legal, physical, financial, and productivity assessments for holistic strategy development."
  }
]

export default function DevelopmentConsultationPage() {
  useEffect(() => {
    document.title = "Property Development & Investment Consultation | PDCON";
  }, []);

  return (
    <>
      <main className="relative">
        {/* Hero Section - Large Background Design */}
        <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden">
          {/* Large Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/development.jpg"
              alt="Property Development & Investment Consultation"
              fill
              className="object-cover object-top"
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
                  <span className="text-white font-semibold text-sm sm:text-base md:text-lg font-body">Property Development & Investment Consultation</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium-heading text-white leading-tight mb-6 sm:mb-8"
                >
                  <span className="sm:hidden">Your Property Blueprint</span>
                  <span className="hidden sm:block">Your Property Blueprint:
                  <br />
                  Tailored Strategies</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-6 sm:mb-8 font-body"
                >
                  Expert property development and investment consultation to determine your optimal strategy for wealth creation and capital growth.
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
                      Strategy Development
                    </span>
                  </h2>
                  
                  <div className="space-y-4 text-base sm:text-lg leading-relaxed font-body text-slate-600">
                    <p>
                      Baqir Rezaie brings over a decade of property development expertise to your strategic planning. With experience managing projects worth more than $100 million, you receive guidance from proven industry leadership.
                    </p>
                    
                    <p>
                      As a second-generation construction professional, Baqir combines inherited industry knowledge with cutting-edge development insights, ensuring your strategy is built on both experience and innovation for optimal wealth creation outcomes.
                    </p>
                  </div>
                </div>
                      
                {/* Expertise Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {expertiseHighlights.map((item, index) => (
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
                      src="/images/pdic.jpg"
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

        {/* Our Consultation Process Section - 2nd Section */}
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
                  Our Consultation
                  <br />
                  <span className="text-slate-900">
                    Process
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-body"
                >
                  A structured approach to understanding your goals and developing your personalised property strategy
                </motion.p>
              </div>

              {/* Process Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {consultationProcess.map((step, index) => (
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

        {/* The Four Tests Section - 3rd Section (With blue tint) */}
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
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-8 sm:mb-12 lg:mb-16"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium-heading text-slate-900 mb-4">
                  The Four Tests
                  <br />
                  <span className="text-slate-900">
                    Development Analysis
                  </span>
                </h2>
                
                <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto font-body mb-6">
                  We'll determine the Highest and Best Use of the property. This involves applying 'The Four Tests' – a rigorous analysis ensuring your project is:
                </p>
              </motion.div>

              {/* The Four Tests Grid - Clean design without boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                {fourTests.map((test, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0" style={{ backgroundColor: '#0f172a', color: '#ffffff' }}>
                        {test.number}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-medium-heading text-slate-900 mb-2">
                          {test.title}
                        </h3>
                        <p className="text-base text-slate-600 font-body leading-relaxed mb-3">
                          {test.description}
                        </p>
                        <p className="text-sm text-slate-500 font-body leading-relaxed">
                          {test.details}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Two Strategic Pathways Section - 4th Section (No gold, no boxes) */}
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
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-8 sm:mb-12 lg:mb-16"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium-heading text-slate-900 mb-4">
                  Two Strategic
                  <br />
                  <span className="text-slate-900">
                    Pathways Available
                  </span>
                </h2>
                
                <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto font-body">
                  Based on your consultation, we'll recommend the optimal approach for your property goals and financial objectives.
                </p>
              </motion.div>

              {/* Pathways - Clean transparent design */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {pathwayOptions.map((pathway, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-transparent p-8 h-full flex flex-col"
                  >
                    {/* Icon and Title */}
                    <div className="flex items-start gap-4 mb-6">
                                              <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#0f172a' }}>
                        <pathway.icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8" style={{ color: '#ffffff' }} />
                        </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-medium-heading text-slate-900 mb-2">
                          {pathway.title}
                        </h3>
                        <p className="text-base text-slate-500 font-body font-medium">
                          {pathway.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <p className="text-base text-slate-600 font-body leading-relaxed">
                        {pathway.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="flex-1 mb-6">
                      <h4 className="text-sm font-semibold text-slate-900 font-heading mb-4 uppercase tracking-wide">
                        Key Features
                      </h4>
                      <div className="space-y-3">
                        {pathway.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3">
                                                          <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#0f172a' }}>
                              <CheckCircle className="w-3 h-3" style={{ color: '#ffffff' }} />
                              </div>
                            <p className="text-sm text-slate-600 font-body leading-relaxed">
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits - Bottom section */}
                    <div>
                      <div className="flex items-start gap-3">
                                                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#0f172a' }}>
                          <TrendingUp className="w-3 h-3" style={{ color: '#ffffff' }} />
                          </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-500 font-heading uppercase tracking-wide mb-1">
                            Key Benefit
                          </p>
                          <p className="text-sm font-medium text-slate-900 font-body leading-relaxed">
                            {pathway.benefits}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Consultation Approach Section - 5th Section (Simplified, no gold) */}
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
                className="text-center"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium-heading text-slate-900 mb-4 sm:mb-6">
                  Our Consultation Approach
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-body max-w-3xl mx-auto">
                  Every consultation begins with understanding your unique aspirations and financial objectives. Through detailed analysis and expert guidance, we'll determine whether a development project or long-term investment strategy best aligns with your goals, risk tolerance, and timeline for wealth creation.
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
                Ready to Discover Your
                <span className="text-white">
                  {" "}Optimal Strategy?
                </span>
              </h2>
              
              {/* Description */}
              <p className="text-base sm:text-lg text-white/80 leading-relaxed font-body max-w-2xl mx-auto">
                Book your comprehensive property development and investment consultation. We'll analyse your goals and recommend the best pathway for your wealth creation journey.
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
                    Book Your Strategy Session
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