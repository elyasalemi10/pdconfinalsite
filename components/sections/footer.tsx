"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { assetUrlByTag } from "@/lib/assets"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const navigation = {
  services: [
    { name: "- Strategic Property Acquisition" },
    { name: "- Property Development Management" },
    { name: "- Long-Term Investment Strategies" },
    { name: "- Specialised Renovation Projects" },
  ],
  company: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About Us", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact Us", href: "/contact" },
  ],
  resources: [
    { name: "Property Valuation", href: "/resources/valuation" },
    { name: "Permit Guide", href: "/resources/permits" },
    { name: "Investment Calculator", href: "/resources/calculator" },
    { name: "Market Reports", href: "/resources/reports" },
  ]
}

export default function Footer() {
  return (
    <footer className="relative border-t-2 border-white" style={{ backgroundColor: '#161441' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/[0.03] to-blue-800/[0.05]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
            
            {/* Company Info - Responsive column span and sizing */}
            <div className="sm:col-span-2 lg:col-span-2 text-center sm:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Link href="/" className="inline-block mb-3 sm:mb-4">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40">
                    <Image
                      src={assetUrlByTag("footer-logo")}
                      alt="PdCon Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>

                <p className="text-white/70 leading-relaxed max-w-md mx-auto sm:mx-0 mb-4 sm:mb-6 font-body text-sm sm:text-base">
                  Unlock your property potential with expert guidance for stress-free wealth growth. From strategic acquisitions to successful development and long-term investment, we guide you every step, minimizing risks and maximizing returns.
                </p>
              </motion.div>
            </div>

            {/* Services - Hidden on mobile, visible on larger screens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center sm:text-left hidden sm:block"
            >
              <h3 className="text-white font-medium-heading mb-4 sm:mb-6 text-base sm:text-lg">Services</h3>
              <ul className="space-y-2 sm:space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <span className="text-white/70 font-body text-xs sm:text-sm">
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links - Responsive text sizing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center sm:text-left"
            >
              <h3 className="text-white font-medium-heading mb-4 sm:mb-6 text-base sm:text-lg">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/70 transition-all duration-300 font-body text-xs sm:text-sm inline-block hover:translate-x-1"
                      style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#60a5fa'}
                      onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255, 255, 255, 0.7)'}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info - Responsive layout and sizing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center sm:text-left sm:col-span-2 lg:col-span-1"
            >
              <h3 className="text-white font-medium-heading mb-4 sm:mb-6 text-base sm:text-lg">Contact</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3 text-white/80 justify-center sm:justify-start">
                  <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  <span className="font-body text-xs sm:text-sm">0408 255 259</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 text-white/80 justify-center sm:justify-start">
                  <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  <span className="font-body text-xs sm:text-sm break-all">info@pdcon.com.au</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-white/80 justify-center sm:justify-start">
                  <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-white flex-shrink-0" />
                  <span className="font-body text-xs sm:text-sm leading-relaxed">Level 19, 263 William St<br />Melbourne 3000</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-white/80 justify-center sm:justify-start">
                  <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-white flex-shrink-0" />
                  <span className="font-body text-xs sm:text-sm leading-relaxed">Mon-Fri: 9AM-5PM<br />Weekends: By Appointment</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section - Responsive layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/[0.1] py-6 sm:py-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-white/60 font-body text-xs sm:text-sm text-center sm:text-left">
              © 2025 PdCon. All rights reserved.
            </p>
                          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
                {/* Terms of Service removed */}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
