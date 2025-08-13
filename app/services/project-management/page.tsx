"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { Lightbulb, ArrowRight, Phone, Calendar, FileText, Hammer, CheckCircle, Settings, ClipboardCheck, Timer, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/sections/footer"

const managementServices = [
  {
    icon: FileText,
    title: "Planning & Permit Management",
    description: "Our team excels at optimising development potential through strategic design. We navigate the often-complex council requirements and administrative processes, ensuring a streamlined approval process and securing all necessary permits efficiently.",
    highlight: "We work with architects and planners to ensure your plans are not just approved, but maximised for profitability.",
    features: [
      "Strategic design optimisation for maximum development potential",
      "Comprehensive planning permit applications and submissions",
      "Council liaison and requirement navigation",
      "Permit condition compliance and management"
    ]
  },
  {
    icon: Hammer,
    title: "Construction Oversight",
    description: "Leveraging our extensive network of premier builders (including Ghan Homes, Masci Group, and insights from Alpha 14), we ensure your project is built to the highest standards, on schedule, and within budget.",
    highlight: "We provide diligent oversight, manage contractors, and address any challenges proactively.",
    features: [
      "Premier builder network selection and management",
      "Quality control and standards enforcement",
      "Timeline management and milestone tracking",
      "Contractor coordination and problem resolution"
    ]
  }
]

const projectPhases = [
  {
    number: "1",
    title: "Project Planning",
    description: "Comprehensive project scoping, timeline development, and resource allocation for optimal execution.",
    timeline: "2-4 weeks"
  },
  {
    number: "2",
    title: "Permit & Approval",
    description: "Strategic permit applications and council approvals with maximum development potential optimisation.",
    timeline: "6-12 weeks"
  },
  {
    number: "3",
    title: "Construction Phase",
    description: "Active project oversight with premier builders, quality control, and proactive issue resolution.",
    timeline: "12-26 weeks"
  },
  {
    number: "4",
    title: "Completion & Handover",
    description: "Final inspections, compliance verification, and seamless project handover with full documentation.",
    timeline: "1-2 weeks"
  }
]

const builderNetwork = [
  {
    name: "Ghan Homes",
    description: "Premier residential builder known for quality construction and attention to detail.",
    logo: "ghan-homes-logo.png"
  },
  {
    name: "Masci Group",
    description: "Established construction company with extensive experience in development projects.",
    logo: "masci.png"
  },
  {
    name: "Alpha 14",
    description: "Innovative building solutions with focus on modern construction techniques.",
    logo: "alpha14.png"
  }
]

const expertiseHighlights = [
  {
    icon: Settings,
    title: "Process Optimisation",
    description: "Streamlined project workflows and coordination systems to ensure efficient delivery from planning to completion."
  },
  {
    icon: ClipboardCheck,
    title: "Quality Assurance",
    description: "Rigorous oversight and compliance management ensuring all work meets premium standards and regulatory requirements."
  },
  {
    icon: Timer,
    title: "Timeline Management",
    description: "Expert scheduling and milestone tracking to deliver projects on time while maintaining exceptional quality standards."
  },
  {
    icon: Wrench,
    title: "Technical Coordination",
    description: "Seamless management of trades, suppliers, and specialists to ensure smooth project execution and problem resolution."
  }
]

export default function ProjectManagementPage() {
  useEffect(() => {
    document.title = "Project Management Services - Construction Oversight | PDCON";
  }, []);

  return (
    <>
      <main className="relative">
        {/* Hero Section - Large Background Design */}
        <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden">
          {/* Large Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/project managementt.jpg"
              alt="Project Management Services"
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
                  <span className="text-white font-semibold text-sm sm:text-base md:text-lg font-body">Project Management</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium-heading text-white leading-tight mb-6 sm:mb-8"
                >
                  <span className="sm:hidden">Seamless Project Execution</span>
                  <span className="hidden sm:block">Seamless Project Execution:
                  <br />
                  From Concept to Completion</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-6 sm:mb-8 font-body"
                >
                  Expert project management services to ensure your property vision becomes reality through every critical phase of development.
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

        {/* Expert Leadership Section - 1st Section (No blue tint) */}
        <section className="relative py-8 sm:py-10 md:py-16 lg:py-20 bg-white overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(30deg, transparent 40%, rgba(148, 163, 184, 0.03) 41%, rgba(148, 163, 184, 0.03) 42%, transparent 43%),
                  linear-gradient(-30deg, transparent 40%, rgba(148, 163, 184, 0.03) 41%, rgba(148, 163, 184, 0.03) 42%, transparent 43%)
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
                      Project Management
                    </span>
                  </h2>
                  
                  <div className="space-y-4 text-base sm:text-lg leading-relaxed font-body text-slate-600">
                    <p>
                      Baqir Rezaie brings over a decade of property development and project management expertise to your construction journey. With extensive experience overseeing projects worth more than $100 million, you receive leadership from proven industry expertise.
                    </p>
                    
                    <p>
                      As a second-generation construction professional, Baqir combines inherited industry knowledge with modern project management methodologies, ensuring your development proceeds smoothly from planning through completion with optimal quality and timeline outcomes.
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
                      src="/images/permit.jpg"
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

        {/* Core Management Services Section - 2nd Section (No gold, transparent cards) */}
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
                  Our Core
                  <br />
                  <span className="text-slate-900">
                    Management Services
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-body"
                >
                  Comprehensive project management covering every critical aspect of your development journey
                </motion.p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {managementServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-transparent p-8 h-full flex flex-col"
                  >
                    {/* Icon and Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#0f172a' }}>
                        <service.icon className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8" style={{ color: '#ffffff' }} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-medium-heading text-slate-900 mb-2">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <p className="text-base text-slate-600 font-body leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <p className="text-base text-slate-700 font-body leading-relaxed font-medium">
                        {service.highlight}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="flex-1">
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#0f172a' }}>
                              <CheckCircle className="w-4 h-4" style={{ color: '#ffffff' }} />
                            </div>
                            <p className="text-sm text-slate-600 font-body leading-relaxed">
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project Management Phases Section - 3rd Section (Simplified, no boxes, no gold) */}
        <section className="relative py-8 sm:py-10 md:py-16 lg:py-20 bg-white overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(30deg, transparent 40%, rgba(148, 163, 184, 0.03) 41%, rgba(148, 163, 184, 0.03) 42%, transparent 43%),
                  linear-gradient(-30deg, transparent 40%, rgba(148, 163, 184, 0.03) 41%, rgba(148, 163, 184, 0.03) 42%, transparent 43%)
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
                  Project Management
                  <br />
                  <span className="text-slate-900">
                    Phases
                  </span>
                </h2>
                
                <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto font-body">
                  A structured approach to managing every phase of your property development project
                </p>
              </motion.div>

              {/* Phases Grid - Clean design without boxes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                {projectPhases.map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center text-base sm:text-lg font-bold flex-shrink-0" style={{ backgroundColor: '#0f172a', color: '#ffffff' }}>
                        {phase.number}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-medium-heading text-slate-900 mb-2">
                          {phase.title}
                        </h3>
                        <p className="text-base text-slate-600 font-body leading-relaxed mb-3">
                          {phase.description}
                        </p>
                        <p className="text-sm font-semibold text-slate-500 font-body">
                          Timeline: {phase.timeline}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Premier Builder Network Section - 4th Section (Simplified, with logos) */}
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
                  Premier Builder
                  <br />
                  <span className="text-slate-900">
                    Network
                  </span>
                </h2>
                
                <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto font-body">
                  Partnering with Victoria's leading builders to ensure exceptional quality and reliability
                </p>
              </motion.div>

              {/* Builder Partners - Clean design with logos */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
                {builderNetwork.map((builder, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    {/* Logo */}
                    <div className="w-32 h-24 mx-auto mb-4 bg-white border border-slate-200 flex items-center justify-center p-2">
                      <Image
                        src={`/images/${builder.logo}`}
                        alt={`${builder.name} logo`}
                        width={140}
                        height={90}
                        className={`${builder.logo === 'ghan-homes-logo.png' ? 'object-cover scale-125' : 'object-contain'} max-w-full max-h-full`}
                      />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-medium-heading text-slate-900 mb-2">
                      {builder.name}
                    </h3>
                    <p className="text-sm text-slate-600 font-body leading-relaxed">
                      {builder.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Management Approach Section - 5th Section (Simplified, no gold) */}
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
                  Our Management Approach
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-body max-w-3xl mx-auto">
                  We provide comprehensive project oversight from initial planning through final completion. Our approach emphasises proactive communication, quality control, and timeline management to ensure your project proceeds smoothly and efficiently while maintaining the highest standards of construction and compliance.
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
                Ready to Begin Your
                <span className="text-white">
                  {" "}Project Journey?
                </span>
              </h2>
              
              {/* Description */}
              <p className="text-base sm:text-lg text-white/80 leading-relaxed font-body max-w-2xl mx-auto">
                Let our expert project management team guide your development from planning through completion. Experience seamless execution with proven results and premier builder partnerships.
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
                    Start Your Project
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