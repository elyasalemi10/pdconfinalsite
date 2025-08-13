"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Plus, Minus, HelpCircle } from "lucide-react"

interface FAQItem {
  id: number
  question: string
  answer: string
}

const homeFAQs: FAQItem[] = [
  {
    id: 1,
    question: "What is epoxy flooring and why should I choose it?",
    answer: "Epoxy flooring is a high-performance coating system made from epoxy resin and hardener. It creates a durable, seamless surface that's resistant to chemicals, stains, and heavy traffic. Epoxy floors are ideal because they're easy to clean, long-lasting, and can dramatically improve the appearance of any space."
  },
  {
    id: 2,
    question: "How long does the installation process take?",
    answer: "Most residential projects take 2-3 days, while commercial projects vary based on size and complexity. The process includes surface preparation, primer application, epoxy installation, and curing time. We'll provide a detailed timeline during your consultation."
  },
  {
    id: 3,
    question: "How much does epoxy flooring cost?",
    answer: "Costs vary based on floor size, condition, and epoxy type. Residential projects typically range from $4-10 per square foot, while commercial and industrial projects range from $6-12 per square foot. We provide free, detailed quotes for all projects."
  },
  {
    id: 4,
    question: "How long does epoxy flooring last?",
    answer: "With proper installation and maintenance, epoxy flooring can last 10-20 years or more. Industrial-grade epoxy systems in commercial settings typically last 15-20 years, while residential applications can last even longer with lighter use."
  },
  {
    id: 5,
    question: "Do I need to prepare my floor before installation?",
    answer: "We handle all floor preparation as part of our service. This includes cleaning, repairing cracks, grinding or shot blasting for proper adhesion, and ensuring the surface meets our quality standards before epoxy application."
  },
  {
    id: 6,
    question: "How do I maintain my epoxy floor?",
    answer: "Epoxy floors are very low maintenance. Regular sweeping and occasional mopping with mild detergent is usually sufficient. Avoid harsh chemicals and abrasive cleaners. We provide detailed maintenance instructions with every installation."
  },
  {
    id: 7,
    question: "What design options are available?",
    answer: "We offer numerous design options including solid colors, metallic finishes, color flakes, quartz systems, and custom patterns. You can also incorporate logos, safety markings, or decorative elements into your floor design."
  },
  {
    id: 8,
    question: "Do you offer financing options?",
    answer: "Yes, we offer flexible financing options to make your epoxy flooring project more affordable. Contact us to discuss payment plans and financing terms that work for your budget."
  },
  {
    id: 9,
    question: "Can epoxy floors be repaired if damaged?",
    answer: "Yes, most epoxy floor damage can be repaired. Small chips or scratches can often be touched up, while larger areas may require partial recoating. Our team can assess and repair damage to restore your floor's appearance."
  }
]

export default function HomeFAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="relative py-10 md:py-12 bg-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-100 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-700">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Get answers to the most common questions about our epoxy flooring services and installation process.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-3">
            {homeFAQs.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.03 }}
                className="group"
              >
                {/* Compact accordion style card */}
                <div className={`
                  relative rounded-xl transition-all duration-500 shadow-sm hover:shadow-md
                  ${openItems.includes(item.id) 
                    ? 'bg-gradient-to-br from-blue-50 to-blue-100/50 border-2 border-blue-300 shadow-blue-500/20' 
                    : 'bg-white border-2 border-slate-200 hover:border-blue-200'
                  }
                `}>
                  {/* Question button */}
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full p-3 text-left flex items-center justify-between transition-colors duration-300"
                  >
                    <div className="flex items-center gap-2 flex-1">
                      {/* Question icon */}
                      <div className={`
                        w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300
                        ${openItems.includes(item.id) 
                          ? 'bg-blue-500 text-white scale-105' 
                          : 'bg-slate-100 text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-500'
                        }
                      `}>
                        <HelpCircle className="w-3 h-3" />
                      </div>
                      
                      <h3 className={`
                        text-sm font-bold transition-colors duration-300
                        ${openItems.includes(item.id) ? 'text-blue-800' : 'text-slate-900 group-hover:text-blue-700'}
                      `}>
                        {item.question}
                      </h3>
                    </div>
                    
                    {/* Expand/collapse icon */}
                    <div className={`
                      w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300
                      ${openItems.includes(item.id) 
                        ? 'bg-blue-500 text-white rotate-180' 
                        : 'bg-slate-100 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600'
                      }
                    `}>
                      {openItems.includes(item.id) ? (
                        <Minus className="w-3 h-3" />
                      ) : (
                        <Plus className="w-3 h-3" />
                      )}
                    </div>
                  </button>
                  
                  {/* Answer content with smooth animation */}
                  {openItems.includes(item.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-3 pb-3">
                        <div className="border-t-2 border-blue-200 pt-2 ml-8">
                          <p className="text-slate-700 leading-relaxed text-xs">{item.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 