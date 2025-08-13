"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Lightbulb, Plus, Minus, ArrowRight, Phone, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/sections/footer"
import { useState } from "react"

const faqData = [
  {
    question: "How much capital do I need to start a property development project?",
    answer: "The required capital varies significantly based on project size, location, and type. We can assess your financial position and provide tailored advice on funding options during a consultation. We focus on optimising your existing capital."
  },
  {
    question: "How long does a typical development project take from start to finish?",
    answer: "Project timelines depend on complexity, approvals, and construction. A smaller subdivision might take 12-18 months, while larger developments could span 2-3 years. We provide realistic timelines during the planning phase."
  },
  {
    question: "What are the main risks involved in property development, and how does PDCON mitigate them?",
    answer: "Risks include market fluctuations, planning delays, cost overruns, and construction issues. PDCON mitigates these through rigorous feasibility studies, data-driven decision-making, proactive project management, and leveraging our expert network to anticipate and solve problems."
  },
  {
    question: "Do you only work with experienced developers, or can first-time investors benefit from your services?",
    answer: "We proudly work with both! Our services are designed to guide first-time developers through every step, providing the knowledge and confidence needed for success, as well as assisting experienced investors in scaling their portfolios."
  },
  {
    question: "How do you find properties with 'hidden development potential'?",
    answer: "Our unique approach combines deep real estate market knowledge with a developer's analytical eye. We assess zoning, land size, access, and market demand, often identifying off-market opportunities or sites that conventional buyers might overlook, for their inherent value-add potential."
  },
  {
    question: "What's the difference between property development and long-term investment, and which is right for me?",
    answer: "Development aims for shorter-term, accelerated capital growth through creating new value (e.g., subdivisions, new builds). Long-term investment focuses on sustained wealth through rental income and organic capital appreciation. Your initial consultation will determine the best path for your goals."
  },
  {
    question: "What is involved in your initial consultation?",
    answer: "Our initial consultation is a detailed discussion about your financial goals, current resources, and property aspirations. We'll provide a clear understanding of your options, tailored recommendations, and a roadmap for your property journey, all with no obligation."
  },
  {
    question: "Can I use PDCON for just one part of my project, like planning permits or project oversight?",
    answer: "Yes, while we offer end-to-end solutions, our services are flexible. You can engage us for specific phases like Planning & Permit management or construction oversight, particularly for projects where our expertise can provide critical value."
  },
  {
    question: "Why should I choose PDCON over a standard real estate agent or builder?",
    answer: "PDCON offers a unique fusion of strategic property acquisition, expert development consultation, and comprehensive project management under one roof. We combine deep market insights with construction know-how, providing a holistic, data-driven approach that maximises your profit and minimises your stress, which individual agents or builders cannot offer alone."
  },
  {
    question: "Do you handle projects outside of Melbourne/Victoria?",
    answer: "While our primary focus and deepest network are within Melbourne and Victoria, we are open to discussing opportunities in other areas. Please contact us to discuss your specific project location."
  }
]

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <main className="relative">
        {/* Hero Section - Large Background Design */}
        <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden">
          {/* Large Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/faq hero.jpg"
              alt="Questions Answered, Clarity Delivered"
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
                  <span className="text-white font-semibold text-sm sm:text-base md:text-lg font-body">FAQ</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium-heading text-white leading-tight mb-6 sm:mb-8"
                >
                  Questions Answered
                  <br />
                  <span className="text-white">
                    Clarity Delivered
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-6 sm:mb-8 font-body"
                >
                  <span className="sm:hidden">We understand that embarking on a property development or significant investment journey comes with many questions. Here are some of the most common inquiries we receive.</span>
                  <span className="hidden sm:inline">We understand that embarking on a property development or significant investment journey comes with many questions. Here are some of the most common inquiries we receive. If your question isn't answered here, please don't hesitate to contact us!</span>
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

        {/* FAQ Section */}
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
              
              

              {/* FAQ Items */}
              <div className="space-y-4 sm:space-y-6">
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-transparent"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-4 sm:px-6 py-4 sm:py-6 text-left flex items-center justify-between focus:outline-none cursor-pointer"
                    >
                      <h3 className="text-base sm:text-lg font-medium-heading text-slate-900 pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openIndex === index ? (
                          <Minus className="w-5 h-5 text-slate-900" />
                        ) : (
                          <Plus className="w-5 h-5 text-slate-900" />
                        )}
                      </div>
                    </button>
                    
                    {openIndex === index && (
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                        <div className="border-t border-slate-900 pt-4">
                          <p className="text-sm sm:text-base text-slate-600 font-body leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
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