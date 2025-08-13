"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Lightbulb, ArrowRight, CheckCircle, Calendar, Phone, Building, Briefcase } from "lucide-react"

// Custom SVG icons matching the home page style
const DiscoverIcon = () => (
  <div className="w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center">
    <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="#ffffff" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </div>
);

const ExecuteIcon = () => (
  <div className="w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center">
    <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="#ffffff" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  </div>
);

const GrowIcon = () => (
  <div className="w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center">
    <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="#ffffff" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  </div>
);
import { Button } from "@/components/ui/button"
import Footer from "@/components/sections/footer"

const processSteps = [
  {
    number: "01",
    title: "Discover & Strategise",
    description: "This is where your property journey begins. Through in-depth consultation and rigorous data analysis, we uncover your unique goals, identify prime opportunities, and craft the optimal strategy—whether it's high-yield development or long-term investment. We ensure you acquire the right property with hidden potential.",
    services: [
      "Initial Consultation",
      "Strategic Property Acquisition (Buyers Agent)"
    ],
    icon: DiscoverIcon,
    color: "from-blue-500 to-blue-600"
  },
  {
    number: "02", 
    title: "Execute & Optimise",
    description: "With a clear strategy in place, we move to seamless execution. From navigating complex planning and permit processes to meticulous project management and construction oversight, we ensure your project is delivered efficiently, on budget, and to the highest standards. Every decision is data-driven to maximise value.",
    services: [
      "Property Development Consultation",
      "Planning & Permit Management", 
      "Project Management",
      "Value-Add Renovations"
    ],
    icon: ExecuteIcon,
    color: "from-yellow-500 to-orange-500"
  },
  {
    number: "03",
    title: "Grow & Repeat", 
    description: "The final stage sees your investment flourish. We implement effective sales and marketing strategies to realise maximum returns or structure your long-term holdings for sustained capital growth. With success achieved, we empower you to repeat the cycle, continuously expanding your property portfolio and accelerating your financial freedom.",
    services: [
      "Sale & Marketing Support",
      "Investment Valuation Analysis"
    ],
    icon: GrowIcon,
    color: "from-green-500 to-emerald-500"
  }
]

const mainServices = [
  {
    icon: Building,
    title: "Property Development & Investment Consultation",
    subtitle: "",
    description: "This is the crucial first step where we truly understand your aspirations. Our initial consultation delves deep into your needs and financial goals. Based on this, we'll recommend the optimal course of action: either a dynamic development project for accelerated capital growth or a structured long-term investment strategy.",
    keyPoints: [
      "Comprehensive feasibility studies and market analysis",
      "Application of 'The Four Tests' for development projects",
      "Investment and valuation analysis for long-term holdings",
      "Clear, actionable recommendations tailored to your goals"
    ],
    benefitStatement: "",
    image: "/images/development.jpg",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Briefcase,
    title: "Project Management",
    subtitle: "",
    description: "Once your strategic direction is set, our Project Management service ensures your vision becomes a reality, seamlessly and efficiently. We oversee every critical phase of your property journey, saving you time, mitigating risks, and ensuring optimal outcomes.",
    keyPoints: [
      "Planning & permit management with streamlined approvals",
      "Construction oversight with premier builder network",
      "Quality control and timeline management",
      "Value-add renovations for projects over $200k"
    ],
    benefitStatement: "",
    image: "/images/project managementt.jpg",
    color: "from-emerald-500 to-teal-500"
  }
]

export default function ServicesPage() {
  return (
    <>
      <main className="relative">
        {/* Hero Section - Large Background Design */}
        <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden">
          {/* Large Background Image */}
          <div className="absolute inset-0">
                <Image
                  src="/images/servicespic.jpg"
              alt="Your Guided Path to Property Wealth"
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
                  <span className="text-white font-semibold text-sm sm:text-base md:text-lg font-body">Our Services</span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium-heading text-white leading-tight mb-6 sm:mb-8"
                  >
                  Your Guided Path to
                    <br />
                  <span className="text-white">
                    Property Wealth
                    </span>
                  </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-6 sm:mb-8 font-body"
              >
                  Clear, benefit-driven, step-by-step approach to transform your property aspirations into profitable realities through expert guidance and strategic execution.
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

                {/* 3-Step Process Section - Horizontal Layout */}
        <section className="relative py-8 sm:py-10 md:py-12 overflow-hidden bg-white">
          {/* Animated White Background Pattern */}
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
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium-heading text-slate-900 mb-2 sm:mb-3">
                Your Guided Path to Property Wealth
                <span className="text-slate-900">
                  {" "}with PDCON
                </span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-body">
                A visually appealing, step-by-step process with 3 distinct, connected stages designed to maximise your property investment success.
              </p>
            </div>

            {/* Process Steps - Horizontal Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative bg-transparent p-4 sm:p-6"
                >
                    {/* Step Icon */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center shadow-lg" style={{ backgroundColor: '#0f172a' }}>
                      <step.icon />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 font-heading mb-3 text-center">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed font-body text-xs sm:text-sm text-center">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Services Section Header */}
        <section className="relative py-8 sm:py-10 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium-heading text-slate-900 mb-3 sm:mb-4">
                Our 
                <span className="text-slate-900">
                  {" "}Services
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-body">
                Each service is designed with clear benefits and strategic outcomes to maximise your property investment success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Detailed Services Sections */}
        {mainServices.map((service, index) => (
          <section
            key={index}
            className="relative py-8 sm:py-10 md:py-16 lg:py-20 overflow-hidden bg-white"
          >
            {/* Background */}
          <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-600/5 to-transparent" />
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-blue-400/5 to-transparent" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center`}>
                
                {/* Image Side - Fixed ordering: left, right, left */}
                <motion.div
                  initial={{ opacity: 0, x: index === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`${index === 0 ? 'order-2 lg:order-1' : index === 1 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}
                >
              <div className="relative">
                    <div className="relative h-64 sm:h-80 md:h-96 lg:h-[25rem] xl:h-[35rem] overflow-hidden shadow-2xl">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                      />
                          </div>
                        </div>
          </motion.div>

                {/* Content Side */}
                <motion.div 
                  initial={{ opacity: 0, x: index === 1 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className={`space-y-6 sm:space-y-8 ${index === 0 ? 'order-1 lg:order-2' : index === 1 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium-heading leading-tight text-slate-900">
                    {service.title}
                </h2>



                  <p className="text-base sm:text-lg leading-relaxed font-body text-slate-900">
                    {service.description}
                          </p>

                  {/* Key Points */}
                  <div className="space-y-3 sm:space-y-4">
                    {service.keyPoints.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-3 sm:gap-4">
                        <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                          <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-slate-900" />
                        </div>
                        <span className="font-body text-sm sm:text-base text-slate-900">
                          {point}
                        </span>
                      </div>
                    ))}
                    </div>



                                    {/* CTA Button */}
                  <div className="pt-4">
                    <Link href={
                      index === 0 ? "/services/development-consultation" : 
                      "/services/project-management"
                    } className="cursor-pointer">
                      <Button
                        size="lg"
                        className="w-full sm:w-auto text-white border-0 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold group transition-all duration-300 hover:scale-102 shadow-lg font-body cursor-pointer"
                        style={{ 
                          borderRadius: '0',
                          background: 'linear-gradient(to right, #eab308, #d97706)',
                          backgroundColor: '#eab308' /* Fallback for older browsers */
                        }}
                      >
                        Learn More
                        <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
            </div>
          </div>
        </section>
        ))}

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
                Connect with PDCON today to discuss your unique goals. Let our expertise guide you to smarter decisions and greater success.
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