"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ZoomIn, ChevronLeft, ChevronRight, X } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: 1,
    title: "494 Main",
    location: "Downtown District",
    type: "Multi-Family",
    status: "Fully Managed",
    description: "Premium residential complex with full-service management including tenant screening, maintenance, and financial reporting.",
    images: [
      { id: 1, alt: "Building Exterior", src: "/images/Project Main1.jpg" },
      { id: 2, alt: "Interior Lobby", src: "/images/Project Main 2.jpg" },
      { id: 3, alt: "Unit Interior", src: "/images/Project Main 3.jpg" },
      { id: 4, alt: "Amenities", src: "/images/Project Main4.jpg" }
    ]
  },
  {
    id: 2,
    title: "Bentleigh",
    location: "Business District",
    type: "Commercial",
    status: "Active Management",
    description: "Modern office park with comprehensive property management and permit coordination for ongoing improvements.",
    images: [
      { id: 1, alt: "Office Building", src: "/images/Project Bentleigh1.jpg" },
      { id: 2, alt: "Reception Area", src: "/images/Project Bentleigh2.jpg" },
      { id: 3, alt: "Office Space", src: "/images/Project Bentleigh3.jpg" },
      { id: 4, alt: "Meeting Room", src: "/images/Project Bentleigh4.jpg" }
    ]
  },
  {
    id: 3,
    title: "50 Brisbane",
    location: "Maple Heights",
    type: "Townhomes",
    status: "Portfolio Growth",
    description: "Luxury townhome development with strategic management for maximum rental yield and property appreciation.",
    images: [
      { id: 1, alt: "Townhome Exterior", src: "/images/Project Brisbane1.jpg" },
      { id: 2, alt: "Living Room", src: "/images/Project Brisbane2.jpg" },
      { id: 3, alt: "Kitchen", src: "/images/Project Brisbane3.jpg" },
      { id: 4, alt: "Bedroom", src: "/images/Project Brisbane4.jpg" }
    ]
  },
  {
    id: 4,
    title: "12 Box",
    location: "Waterfront District",
    type: "Condos",
    status: "New Acquisition",
    description: "Luxury waterfront condominiums with premium amenities and high-end tenant placement services.",
    images: [
      { id: 1, alt: "Waterfront View", src: "/images/Project Box1.jpg" },
      { id: 2, alt: "Condo Interior", src: "/images/Project Box2.jpg" },
      { id: 3, alt: "Balcony View", src: "/images/Project Box3.jpg" },
      { id: 4, alt: "Pool Area", src: "/images/Project Box4.jpg" }
    ]
  },
  {
    id: 5,
    title: "8 Magnolia",
    location: "Business Park",
    type: "Industrial",
    status: "Fully Leased",
    description: "Modern industrial complex with warehouse and office spaces managed for long-term corporate tenants.",
    images: [
      { id: 1, alt: "Industrial Exterior", src: "/images/Project Magnolia1.JPEG" },
      { id: 2, alt: "Warehouse Floor", src: "/images/Project Magnolia2.jpg" },
      { id: 3, alt: "Loading Dock", src: "/images/Project Magnolia3.jpg" },
      { id: 4, alt: "Office Area", src: "/images/Project Magnolia 4.jpg" }
    ]
  },
  {
    id: 6,
    title: "69 Somerville",
    location: "City Center",
    type: "Mixed-Use",
    status: "Recently Completed",
    description: "Contemporary mixed-use development combining retail, office, and residential spaces with comprehensive property management services.",
    images: [
      { id: 1, alt: "Mixed-Use Building", src: "/images/Project Somerville1.jpg" },
      { id: 2, alt: "Retail Space", src: "/images/Project Somerville2.jpg" },
      { id: 3, alt: "Office Floor", src: "/images/Project Somerville3.jpg" },
      { id: 4, alt: "Residential Unit", src: "/images/Project Somerville4.jpg" }
    ]
  }
]

export default function ProjectsSection() {
  const [selectedImages, setSelectedImages] = useState<{[key: number]: number}>({})
  const [zoomedProject, setZoomedProject] = useState<number | null>(null)
  const [zoomedImageIndex, setZoomedImageIndex] = useState(0)

  const getSelectedImage = (projectId: number) => {
    return selectedImages[projectId] || 0
  }

  const selectImage = (projectId: number, imageIndex: number) => {
    setSelectedImages(prev => ({
      ...prev,
      [projectId]: imageIndex
    }))
  }

  const openZoom = (projectId: number, imageIndex: number) => {
    setZoomedProject(projectId)
    setZoomedImageIndex(imageIndex)
  }

  const closeZoom = () => {
    setZoomedProject(null)
  }

  const nextZoomedImage = useCallback(() => {
    if (zoomedProject) {
      const project = projects.find(p => p.id === zoomedProject)
      if (project) {
        setZoomedImageIndex((prev) => (prev + 1) % project.images.length)
      }
    }
  }, [zoomedProject])

  const prevZoomedImage = useCallback(() => {
    if (zoomedProject) {
      const project = projects.find(p => p.id === zoomedProject)
      if (project) {
        setZoomedImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
      }
    }
  }, [zoomedProject])

  // Keyboard navigation for zoom modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (zoomedProject) {
        switch (event.key) {
          case 'ArrowLeft':
            event.preventDefault()
            prevZoomedImage()
            break
          case 'ArrowRight':
            event.preventDefault()
            nextZoomedImage()
            break
          case 'Escape':
            event.preventDefault()
            closeZoom()
            break
        }
      }
    }

    if (zoomedProject) {
      document.addEventListener('keydown', handleKeyDown)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [zoomedProject, nextZoomedImage, prevZoomedImage])

  return (
    <section className="relative py-10 md:py-16 bg-white overflow-hidden">
      {/* Background Elements */}
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

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-400" />
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider font-body">Our Projects</span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-blue-400" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 font-heading">
            Success Stories in
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              Property Management
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-body">
            Discover how we've transformed properties into profitable investments through strategic management and expert oversight.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`group relative ${index >= 4 ? 'hidden md:block' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="relative bg-white border-2 border-slate-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-slate-300">
                {/* Image Gallery Section */}
                <div className="mb-6">
                  <div className="flex gap-3">
                    {/* Main Image */}
                    <div className="flex-1 relative group/image">
                      <div className="w-full h-48 relative overflow-hidden cursor-pointer">
                        <Image
                          src={project.images[getSelectedImage(project.id)].src}
                          alt={project.images[getSelectedImage(project.id)].alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        
                        {/* Zoom Icon on Hover - Top Left */}
                        <div className="absolute top-3 left-3 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                          <div 
                            className="bg-white/90 hover:bg-white p-2 cursor-pointer shadow-lg"
                            onClick={() => openZoom(project.id, getSelectedImage(project.id))}
                          >
                            <ZoomIn className="w-5 h-5 text-slate-800" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Thumbnail Sidebar */}
                    <div className="flex flex-col gap-2">
                      {project.images.map((image, imageIndex) => (
                        <div
                          key={image.id}
                          className={cn(
                            'w-12 h-12 relative overflow-hidden cursor-pointer transition-all duration-300',
                            selectedImages[project.id] === imageIndex 
                              ? 'border-2 border-blue-400'
                              : 'border border-slate-400 hover:border-blue-400'
                          )}
                          onClick={() => selectImage(project.id, imageIndex)}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-blue-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Zoom Modal */}
        <AnimatePresence>
          {zoomedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={closeZoom}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative w-full h-full max-w-7xl max-h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeZoom}
                  className="absolute top-4 md:top-8 right-4 md:right-8 text-white hover:text-blue-400 transition-colors duration-300 z-10"
                >
                  <X className="w-8 h-8 md:w-10 md:h-10" />
                </button>

                {/* Main Zoomed Image - Much Larger */}
                <div className="flex-1 w-full relative flex items-center justify-center">
                  <Image
                    src={projects.find(p => p.id === zoomedProject)?.images[zoomedImageIndex].src || ''}
                    alt={projects.find(p => p.id === zoomedProject)?.images[zoomedImageIndex].alt || ''}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />

                  {/* Navigation Arrows on Image */}
                  <button
                    onClick={prevZoomedImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 text-white transition-all duration-300 hover:scale-110 z-10"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>

                  <button
                    onClick={nextZoomedImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 text-white transition-all duration-300 hover:scale-110 z-10"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </div>

                {/* Bottom Navigation Bar */}
                <div className="flex items-center justify-center gap-6 mt-6 mb-4">
                  <button
                    onClick={prevZoomedImage}
                    className="bg-white/20 hover:bg-white/30 p-3 text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    <span className="text-sm font-body">Previous</span>
                  </button>

                  <div className="flex gap-3">
                    {projects.find(p => p.id === zoomedProject)?.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setZoomedImageIndex(idx)}
                        className={cn(
                          'w-3 h-3 rounded-full transition-all duration-300 cursor-pointer',
                          idx === zoomedImageIndex ? 'bg-blue-400 scale-125' : 'bg-white/50 hover:bg-white/70 hover:scale-110'
                        )}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextZoomedImage}
                    className="bg-white/20 hover:bg-white/30 p-3 text-white transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="text-sm font-body">Next</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Keyboard Instructions */}
                <div className="text-center text-white/60 text-xs font-body">
                  Use ← → arrow keys to navigate • Press ESC to close
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-lg text-slate-600 mb-6 font-body">
            Ready to see similar results with your property?
          </p>
          <div className="inline-flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-blue-400 transform rotate-45" />
              ))}
            </div>
            <span className="text-slate-600 text-sm font-body">Join our portfolio of successful properties</span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-blue-400 transform rotate-45" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 