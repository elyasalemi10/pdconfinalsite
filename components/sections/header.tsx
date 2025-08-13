"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

const navigationItems = [
  { href: "/", label: "Home" },
  { 
    href: "/services", 
    label: "Services",
    hasDropdown: true,
    dropdownItems: [
      { href: "/services/development-consultation", label: "Property Development & Investment Consultation" },
      { href: "/services/project-management", label: "Project Management" },
    ]
  },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Us" },
  { href: "/faq", label: "FAQ" },
]

export default function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const isHomePage = pathname === "/" || pathname === "/mockup-about" || pathname === "/about" || pathname === "/contact" || pathname === "/faq" || pathname === "/projects" || pathname === "/services" || pathname === "/services/buyers-agent" || pathname === "/services/development-consultation" || pathname === "/services/project-management"

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className={cn(
          "w-full z-50 border-b-2 border-white",
          isHomePage ? "absolute top-0 left-0" : "relative"
        )}
      >
        {/* Navy background - full width of header container */}
        {isHomePage && (
          <div 
            className="absolute top-0 left-0 right-0 h-full"
            style={{ 
              backgroundColor: '#161441'
            }}
      >
        {/* Enhanced gradient overlay for better visual depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/[0.03] via-transparent to-blue-600/[0.03] pointer-events-none" />
          </div>
        )}

        {/* Solid background for non-home pages */}
        {!isHomePage && (
          <div 
            className="absolute inset-0"
            style={{ backgroundColor: '#161441' }}
          />
        )}
        
        <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
          <div className="flex items-center justify-between h-20 sm:h-20 md:h-24 lg:h-32">
            {/* Logo - Responsive sizing */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
              <div className="relative w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36">
                <Image
                  src={"/images/NewPDLogo.png"}
                  alt="PdCon Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation - Responsive text sizing */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 flex-1 ml-4 sm:ml-8 md:ml-16">
              {navigationItems.map((item, index) => {
                const isActive = pathname === item.href || (item.hasDropdown && item.dropdownItems?.some(dropdownItem => pathname === dropdownItem.href))
                
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.1 + index * 0.1,
                      ease: [0.25, 0.4, 0.25, 1] 
                    }}
                    className="relative group"
                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.href)}
                    onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
                  >
                    {/* Top indicator line with left-to-right animation */}
                    <span 
                      className={cn(
                        "absolute -top-4 sm:-top-6 md:-top-7 lg:-top-8 left-3 sm:left-4 md:left-6 h-1 sm:h-1.5 bg-white transition-all duration-500 origin-left",
                        isActive ? "w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] md:w-[calc(100%-3rem)]" : "w-0 group-hover:w-[calc(100%-1.5rem)] sm:group-hover:w-[calc(100%-2rem)] md:group-hover:w-[calc(100%-3rem)]"
                      )}
                    />
                    
                    {item.hasDropdown ? (
                      <div className="flex items-center relative">
                        {/* Invisible hover zone extension */}
                        <div className="absolute top-full left-0 w-full h-3 z-10" />
                        <Link
                          href={item.href}
                          className={cn(
                            "text-white/70 hover:text-white transition-colors duration-500 relative font-semibold text-base lg:text-lg xl:text-xl font-body px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 flex items-center gap-1",
                            isActive && "text-white"
                          )}
                        >
                          {item.label}
                          <ChevronDown className={cn(
                            "w-4 h-4 transition-transform duration-300",
                            activeDropdown === item.href && "rotate-180"
                          )} />
                        </Link>
                        
                        {/* Dropdown Menu */}
                        <AnimatePresence>
                          {activeDropdown === item.href && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute top-full left-0 z-50"
                            >
                              <div 
                                className="bg-white shadow-xl min-w-[280px] mt-2"
                                style={{ backgroundColor: '#161441' }}
                              >
                                {item.dropdownItems?.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.href}
                                    href={dropdownItem.href}
                                    className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-300 border-b border-white/10 last:border-b-0 font-body text-sm lg:text-base"
                                  >
                                    {dropdownItem.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                    <Link
                      href={item.href}
                      className={cn(
                          "text-white/70 hover:text-white transition-colors duration-500 relative font-medium text-base lg:text-lg xl:text-xl font-body px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 block",
                        isActive && "text-white"
                      )}
                    >
                      {item.label}
                    </Link>
                    )}
                  </motion.div>
                )
              })}
            </nav>

            {/* Desktop CTA Button - Responsive sizing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="hidden lg:block ml-auto"
            >
              <Link href="/contact" className="cursor-pointer">
                <Button
                  size="lg"
                  className={cn(
                    "bg-white hover:bg-white/90 border-0",
                    "hover:from-white/90 hover:to-white/80 hover:shadow-lg",
                    "transition-all duration-500 ease-out",
                    "hover:scale-105 hover:shadow-white/20",
                    "font-bold tracking-wide px-6 lg:px-8 xl:px-10 py-3 lg:py-4 xl:py-6 text-sm lg:text-base xl:text-lg font-body",
                    "transform-gpu will-change-transform",
                    "hover:-translate-y-1 active:scale-95",
                    "group relative overflow-hidden cursor-pointer"
                  )}
                  style={{ borderRadius: '0', color: '#161441' }}
                >
                  {/* Animated background shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                  
                  <span className="relative flex items-center gap-2 lg:gap-3">
                    Contact Us
                    <ArrowRight className="w-4 lg:w-5 h-4 lg:h-5 group-hover:translate-x-1 transition-transform duration-500" />
                  </span>
                </Button>
              </Link>
            </motion.div>

            {/* Mobile Menu Button - Simplified animations */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 sm:p-3 bg-white/10 border border-white/20 text-white hover:text-white hover:bg-white/20 transition-all duration-200"
              aria-label="Toggle menu"
              style={{ borderRadius: '0' }}
            >
              <AnimatePresence mode="wait">
                {!isMobileMenuOpen ? (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-5 sm:w-6 h-5 sm:h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-5 sm:w-6 h-5 sm:h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay - Simplified */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 lg:hidden"
            style={{ backgroundColor: '#161441' }}
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-3 border-b border-white/10">
              <div className="text-white font-bold text-base font-heading">
                MENU
              </div>
              <button
                onClick={toggleMobileMenu}
                className="p-1.5 text-white hover:text-white/80 transition-colors duration-200"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

                        {/* Mobile Navigation */}
            <div className="px-3 py-4 overflow-y-auto">
              <nav>
              {navigationItems.map((item, index) => {
                  const isActive = pathname === item.href || (item.hasDropdown && item.dropdownItems?.some(dropdownItem => pathname === dropdownItem.href))
                
                return (
                  <motion.div
                    key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="border-b border-white/10 last:border-b-0"
                  >
                      {item.hasDropdown ? (
                        <div>
                    <Link
                      href={item.href}
                      onClick={toggleMobileMenu}
                      className={cn(
                              "block py-3 text-base font-semibold transition-colors duration-200",
                              isActive ? "text-white" : "text-white/80 hover:text-white"
                        )}
                      >
                            {item.label}
                          </Link>
                          
                          <div className="pl-3 pb-1">
                            {item.dropdownItems?.map((dropdownItem) => {
                              const isSubActive = pathname === dropdownItem.href
                              return (
                                <Link
                                  key={dropdownItem.href}
                                  href={dropdownItem.href}
                                  onClick={toggleMobileMenu}
                                  className={cn(
                                    "block py-1.5 text-sm transition-colors duration-200",
                                    isSubActive ? "text-white" : "text-white/60 hover:text-white/80"
                                  )}
                                >
                                  {dropdownItem.label}
                                </Link>
                              )
                            })}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={toggleMobileMenu}
                            className={cn(
                            "block py-3 text-base font-semibold transition-colors duration-200",
                            isActive ? "text-white" : "text-white/80 hover:text-white"
                            )}
                        >
                          {item.label}
                    </Link>
                      )}
                  </motion.div>
                )
              })}

                {/* Contact Us Navigation Item */}
              <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navigationItems.length * 0.05 }}
                  className="pt-3"
              >
                <Link href="/contact" onClick={toggleMobileMenu}>
                  <Button
                    size="lg"
                      className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white border-0 font-bold py-2.5 text-sm transition-all duration-200"
                    style={{ borderRadius: '0' }}
                  >
                      Contact Us
                      <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 