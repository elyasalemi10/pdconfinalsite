"use client"

import { motion } from "framer-motion"

const partners = [
  { name: "TechFlow", logo: "TechFlow" },
  { name: "Innovate Corp", logo: "Innovate" },
  { name: "GrowthLab", logo: "GrowthLab" },
  { name: "NextGen", logo: "NextGen" },
  { name: "Digital Edge", logo: "DigitalEdge" },
  { name: "Future Works", logo: "FutureWorks" },
  { name: "Scale Pro", logo: "ScalePro" },
  { name: "CloudFirst", logo: "CloudFirst" },
  { name: "DataFlow", logo: "DataFlow" },
  { name: "BuildTech", logo: "BuildTech" },
  { name: "StartUp Co", logo: "StartUpCo" },
  { name: "Tech Solutions", logo: "TechSolutions" },
]

// Duplicate the partners array for seamless looping
const allPartners = [...partners, ...partners]

export default function PartnersSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#030303] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.02] via-transparent to-emerald-600/[0.02]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-body">
            We're proud to partner with innovative companies that share our commitment to excellence and growth.
          </p>
        </motion.div>

        {/* Partner Logos Marquee */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#030303] to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#030303] to-transparent z-10" />
          
          {/* Scrolling Container */}
          <div className="flex overflow-hidden">
            <motion.div
              animate={{
                x: [0, "-50%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 80,
                  ease: "linear",
                },
              }}
              className="flex gap-8 items-center"
            >
              {allPartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 group"
                >
                  <div className="relative px-8 py-6 rounded-2xl bg-white/[0.08] border-2 border-emerald-500/[0.3] backdrop-blur-sm hover:bg-white/[0.12] transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/[0.3] hover:border-emerald-400/[0.5] min-w-[220px] h-[120px] flex flex-col justify-center">
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-500/[0.15] to-emerald-600/[0.15]" />
                    
                    <div className="relative z-10 text-center">
                      {/* Logo Icon Placeholder */}
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/[0.2] border border-emerald-400/[0.4] flex items-center justify-center mx-auto mb-3">
                        <div className="w-6 h-6 bg-emerald-400 rounded-md"></div>
                      </div>
                      
                      {/* Company Name */}
                      <h3 className="text-lg font-bold text-white mb-1">
                        {partner.name}
                      </h3>
                      
                      {/* Logo Text */}
                      <p className="text-emerald-300 text-sm font-medium">
                        {partner.logo}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-300 text-sm font-medium">
                Join 200+ successful partnerships
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 