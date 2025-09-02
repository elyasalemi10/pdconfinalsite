"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Lightbulb, ArrowRight, Phone, ChevronLeft, ChevronRight, ChevronDown, X, ZoomIn, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/sections/footer"
import { useState, useEffect } from "react"



// ProjectCard Component with Advanced Gallery
function ProjectCard({ title, images, hasImages }: { title: string, images: string[], hasImages: boolean }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showZoomModal, setShowZoomModal] = useState(false);
  const [zoomImage, setZoomImage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isSlideshowPaused, setIsSlideshowPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const THUMBNAILS_PER_PAGE = 5;
  const totalPages = Math.ceil(images.length / THUMBNAILS_PER_PAGE);
  const hasMultiplePages = totalPages > 1;

  // Auto-slideshow effect - cycles through images every 3 seconds (only on hover)
  useEffect(() => {
    if (!hasImages || images.length <= 1 || isSlideshowPaused || !isHovered) return;

    const interval = setInterval(() => {
      setSelectedImage(prev => {
        const nextImage = (prev + 1) % images.length;
        
        // Calculate which page the next image should be on
        const pageForNextImage = Math.floor(nextImage / THUMBNAILS_PER_PAGE);
        
        // If the next image is not on the current sidebar page, switch to the correct page
        if (pageForNextImage !== currentPage) {
          setCurrentPage(pageForNextImage);
        }
        
        return nextImage;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [hasImages, images.length, currentPage, isSlideshowPaused, isHovered]);

  // Handle keyboard navigation in zoom modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showZoomModal) {
        if (e.key === 'Escape') {
          setShowZoomModal(false);
        } else if (e.key === 'ArrowLeft') {
          setZoomImage(prev => prev > 0 ? prev - 1 : images.length - 1);
        } else if (e.key === 'ArrowRight') {
          setZoomImage(prev => prev < images.length - 1 ? prev + 1 : 0);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showZoomModal, images.length]);

  const openZoomModal = (imageIndex: number) => {
    setZoomImage(imageIndex);
    setShowZoomModal(true);
  };

  const nextImage = () => {
    setZoomImage(prev => prev < images.length - 1 ? prev + 1 : 0);
  };

  const prevImage = () => {
    setZoomImage(prev => prev > 0 ? prev - 1 : images.length - 1);
  };

  const handleThumbnailClick = (imageIndex: number) => {
    setSelectedImage(imageIndex);
    setIsSlideshowPaused(true);
  };

  if (!hasImages || images.length === 0) {
    // Original placeholder design for cards without images
    return (
      <>
        <div className="relative h-56 sm:h-64 md:h-72 bg-slate-200 overflow-hidden mb-4 flex">
          {/* Main Image Area */}
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-slate-600 font-semibold text-sm font-heading">Project Image</span>
            </div>
          </div>
          
          {/* Mini Sidebar */}
          <div className="w-16 bg-white border-l border-slate-200 flex flex-col">
            {[1, 2, 3, 4].map((imgIndex) => (
              <div key={imgIndex} className="flex-1 bg-slate-300 hover:bg-slate-400 transition-colors cursor-pointer flex items-center justify-center ring-1 ring-slate-300 ring-inset">
                <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
        <h3 className="text-lg font-bold text-slate-900 font-heading">
          {title}
        </h3>
      </>
    );
  }

  // Card with advanced image gallery
  return (
    <>
      <div 
        className="relative h-56 sm:h-64 md:h-72 bg-slate-200 overflow-hidden mb-4 flex"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Image Area */}
        <div className="flex-1 relative group">
          <Image
            src={images[selectedImage]}
            alt={`${title} - Image ${selectedImage + 1}`}
            fill
            className="object-cover transition-opacity duration-500 ease-in-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          
          {/* Zoom Button - Top Left (appears on hover) */}
          <button
            onClick={() => openZoomModal(selectedImage)}
            className="absolute top-2 left-2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
        </div>
        
        {/* Sidebar with thumbnails and button */}
        <div className="w-16 bg-white border-l border-slate-200 flex flex-col">
          {/* Thumbnails Area - Takes available space */}
          <div className="flex-1 flex flex-col justify-start">
            {images
              .slice(currentPage * THUMBNAILS_PER_PAGE, (currentPage + 1) * THUMBNAILS_PER_PAGE)
              .map((img, sliceIndex) => {
                const imgIndex = currentPage * THUMBNAILS_PER_PAGE + sliceIndex;
                return (
                  <div 
                    key={imgIndex} 
                    className={`h-10 sm:h-11 md:h-12 w-16 flex-shrink-0 transition-all duration-200 relative overflow-hidden cursor-pointer ${
                      selectedImage === imgIndex 
                        ? 'shadow-lg' 
                        : 'ring-1 ring-slate-300 ring-inset hover:ring-slate-400 hover:shadow-md'
                    }`}
                    onClick={() => handleThumbnailClick(imgIndex)}
                  >
                    <Image
                      src={img}
                      alt={`${title} thumbnail ${imgIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                    
                    {/* Gold inner border for selected image */}
                    {selectedImage === imgIndex && (
                      <div className="absolute inset-0 border-2 pointer-events-none" style={{ borderColor: '#eab308' }}></div>
                    )}
                  </div>
                );
              })}
          </div>
          
          {/* Next Page Button - Always at bottom when needed */}
          {hasMultiplePages && (
            <button
              onClick={() => setCurrentPage((prev) => (prev + 1) % totalPages)}
              className="h-8 sm:h-10 md:h-12 w-16 flex items-center justify-center transition-colors duration-200 group flex-shrink-0"
              style={{ 
                backgroundColor: '#1e293b',
                borderTop: '1px solid #cbd5e1'
              }}
              onMouseEnter={(e) => (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#0f172a'}
              onMouseLeave={(e) => (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1e293b'}
              title={`Page ${currentPage + 1} of ${totalPages}`}
            >
              <ChevronDown 
                className="w-3 h-3 sm:w-4 sm:h-4 transition-colors group-hover:duration-200" 
                style={{ color: '#ffffff' }}
                onMouseEnter={(e) => (e.currentTarget as SVGElement).style.color = '#eab308'}
                onMouseLeave={(e) => (e.currentTarget as SVGElement).style.color = '#ffffff'}
              />
            </button>
          )}
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-slate-900 font-heading">
        {title}
      </h3>

      {/* Zoom Modal */}
      {showZoomModal && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={() => setShowZoomModal(false)}
              className="absolute top-6 right-6 z-10 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-200 border border-white/20 hover:border-white/40 shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-6 z-10 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-200 border border-white/20 hover:border-white/40 shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-6 z-10 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-200 border border-white/20 hover:border-white/40 shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            
            {/* Main Image */}
            <div className="relative w-full h-full">
              <Image
                src={images[zoomImage]}
                alt={`${title} - Image ${zoomImage + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            
            {/* Dot Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setZoomImage(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    zoomImage === index ? 'bg-white' : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
            
            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {zoomImage + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <main className="relative">
        {/* Hero Section - Large Background Design */}
        <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/projects.webm" type="video/webm" />
              {/* Fallback background image if video fails to load */}
              <div 
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: 'url(/images/projects hero.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            </video>
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
                  <span className="text-white font-semibold text-sm sm:text-base md:text-lg font-body">Our Projects</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium-heading text-white leading-tight mb-6 sm:mb-8"
                >
                  Proven Success,
                  <br />
                  <span className="text-white">
                    Delivered Results
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-6 sm:mb-8 font-body"
                >
                  <span className="sm:hidden">Explore our portfolio of successful property developments. Each project represents our commitment to maximising value, minimising risk, and delivering exceptional results for our clients.</span>
                  <span className="hidden sm:inline">Explore our portfolio of successful property developments and strategic investments across Melbourne. Each project represents our commitment to maximising value, minimising risk, and delivering exceptional results for our clients.</span>
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

        {/* Projects Content Section */}
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
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium-heading text-slate-900 mb-4 sm:mb-6">
                Our Project
                <span className="text-slate-900">
                  {" "}Portfolio
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-body">
                Explore our successful property developments and strategic investments across Melbourne. Over $100 million in completed projects showcasing our expertise and commitment to client success.
              </p>
            </div>

            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
              {[
                "Duplex",
                "3 Luxury Townhouses",
                "7 Luxury Townhouses",
                "Duplex",
                "Duplex",
                "6 Townhouses",
                "4 Luxury Townhouses",
                "6 Townhouses",
                "3 Luxury Townhouses"
              ].map((projectTitle, index) => {
                // Images for project cards - All projects now have images
                // Images with "main" in filename are prioritized for sidebar display
                let projectImages: string[] = [];
                
                if (projectTitle === "6 Townhouses" && index === 7) {
                  // Parkland project
                  projectImages = [
                    "/projects images/Parkland/Main.jpg",
                    "/projects images/Parkland/Main 2.jpg",
                    "/projects images/Parkland/Main 3.jpg",
                    "/projects images/Parkland/Main 4.jpg",
                    "/projects images/Parkland/1-30-32 Parkland Ave Print-7.jpg",
                    "/projects images/Parkland/1-30-32 Parkland Ave Print-13.jpg",
                    "/projects images/Parkland/1-30-32 Parkland Ave Print-16.jpg",
                    "/projects images/Parkland/1-30-32 Parkland Ave Print-18.jpg",
                    "/projects images/Parkland/1-30-32 Parkland Ave Print-21.jpg",
                    "/projects images/Parkland/1-30-32 Parkland Ave Print-22.jpg",
                    "/projects images/Parkland/4-30-32 Parkland Ave Print-7.jpg",
                    "/projects images/Parkland/4-30-32 Parkland Ave Print-15.jpg"
                  ];
                } else if (projectTitle === "3 Luxury Townhouses" && index === 8) {
                  // Narre Warren project
                  projectImages = [
                    "/projects images/Narre Warren/Main 1.jpg",
                    "/projects images/Narre Warren/Main 2.jpg",
                    "/projects images/Narre Warren/Main 3.png",
                    "/projects images/Narre Warren/Main 4.png",
                    "/projects images/Narre Warren/1.png",
                    "/projects images/Narre Warren/2.png",
                    "/projects images/Narre Warren/3.png",
                    "/projects images/Narre Warren/4.png",
                    "/projects images/Narre Warren/5.png",
                    "/projects images/Narre Warren/6.png",
                    "/projects images/Narre Warren/7.png"
                  ];
                } else if (projectTitle === "4 Luxury Townhouses" && index === 6) {
                  // Devon Meadows project
                  projectImages = [
                    "/projects images/Devon Meadows/1.jpg",
                    "/projects images/Devon Meadows/1.1.jpg",
                    "/projects images/Devon Meadows/2.jpg",
                    "/projects images/Devon Meadows/3.jpg",
                    "/projects images/Devon Meadows/4.jpg",
                    "/projects images/Devon Meadows/4B.jpg",
                    "/projects images/Devon Meadows/5.jpg",
                    "/projects images/Devon Meadows/6.jpg",
                    "/projects images/Devon Meadows/7.jpg",
                    "/projects images/Devon Meadows/8.jpg",
                    "/projects images/Devon Meadows/8B.jpg",
                    "/projects images/Devon Meadows/9.jpg",
                    "/projects images/Devon Meadows/10.jpg",
                    "/projects images/Devon Meadows/11.jpg",
                    "/projects images/Devon Meadows/12.jpg",
                    "/projects images/Devon Meadows/13.jpg",
                    "/projects images/Devon Meadows/14.jpg",
                    "/projects images/Devon Meadows/15.jpg",
                    "/projects images/Devon Meadows/16.jpg",
                    "/projects images/Devon Meadows/17.jpg",
                    "/projects images/Devon Meadows/18.jpg",
                    "/projects images/Devon Meadows/19.jpg",
                    "/projects images/Devon Meadows/20.jpg"
                  ];
                } else if (projectTitle === "3 Luxury Townhouses" && index === 1) {
                  // First Mordialloc card uses Mordialloc folder
                  projectImages = [
                    "/projects images/Mordialloc/Main 1.jpg",
                    "/projects images/Mordialloc/Main 2.jpg",
                    "/projects images/Mordialloc/Main 3.jpg",
                    "/projects images/Mordialloc/Main 4.jpg",
                    "/projects images/Mordialloc/Unit 1_494_Main_Street_5.jpg",
                    "/projects images/Mordialloc/Unit 1_494_Main_Street_7.jpg",
                    "/projects images/Mordialloc/Unit 1_494_Main_Street_12.jpg",
                    "/projects images/Mordialloc/Unit 1_494_Main_Street_13.jpg",
                    "/projects images/Mordialloc/Unit 1_494_Main_Street_15.jpg",
                    "/projects images/Mordialloc/Unit 1_494_Main_Street_17.jpg",
                    "/projects images/Mordialloc/Unit 1_494_Main_Street_18.jpg"
                  ];
                } else if (projectTitle === "Duplex" && index === 0) {
                  // Beaumaris project
                  projectImages = [
                    "/projects images/Beaumaris/Main 1.jpg",
                    "/projects images/Beaumaris/Main 2.jpg",
                    "/projects images/Beaumaris/Main 3.jpg",
                    "/projects images/Beaumaris/Main 4.jpg",
                    "/projects images/Beaumaris/15B Hastings Ave_05_web.jpg",
                    "/projects images/Beaumaris/15B Hastings Ave_07_web.jpg",
                    "/projects images/Beaumaris/15B Hastings Ave_08_web.jpg",
                    "/projects images/Beaumaris/15B Hastings Ave_10_web.jpg",
                    "/projects images/Beaumaris/15B Hastings Ave_13_web.jpg",
                    "/projects images/Beaumaris/495652_15A_Hastings_058.jpg"
                  ];
                } else if (projectTitle === "7 Luxury Townhouses") {
                  // Berwick project
                  projectImages = [
                    "/projects images/Berwick/Main 1.jpg",
                    "/projects images/Berwick/Main 2.jpg",
                    "/projects images/Berwick/Main 3.jpg",
                    "/projects images/Berwick/Main 4.jpg",
                    "/projects images/Berwick/1.jpg",
                    "/projects images/Berwick/3.jpg",
                    "/projects images/Berwick/4.jpg",
                    "/projects images/Berwick/6.jpg",
                    "/projects images/Berwick/9.jpg",
                    "/projects images/Berwick/16.jpg",
                    "/projects images/Berwick/17.jpg",
                    "/projects images/Berwick/20.jpg",
                    "/projects images/Berwick/21.jpg",
                    "/projects images/Berwick/23.jpg",
                    "/projects images/Berwick/26.jpg"
                  ];
                } else if (projectTitle === "6 Townhouses" && index === 5) {
                  // Hampton Park project
                  projectImages = [
                    "/projects images/Hampton Park/Main 1.jpg",
                    "/projects images/Hampton Park/Main 2.jpg",
                    "/projects images/Hampton Park/Main 3.jpg",
                    "/projects images/Hampton Park/Main 4.jpg",
                    "/projects images/Hampton Park/67 Somerville Road Print-3.jpg",
                    "/projects images/Hampton Park/67 Somerville Road Print-7.jpg",
                    "/projects images/Hampton Park/67 Somerville Road Print-28.jpg",
                    "/projects images/Hampton Park/67 Somerville Road Print-29.jpg",
                    "/projects images/Hampton Park/67 Somerville Road Print-31.jpg",
                    "/projects images/Hampton Park/67 Somerville Road Print-32.jpg"
                  ];
                } else if (projectTitle === "Duplex" && index === 3) {
                  // Second Mordialloc card uses Mordialloc 2 folder
                  projectImages = [
                    "/projects images/Mordialloc 2/Main 1.JPEG",
                    "/projects images/Mordialloc 2/Main 2.jpg",
                    "/projects images/Mordialloc 2/Main 3.jpg",
                    "/projects images/Mordialloc 2/Main 4.jpg",
                    "/projects images/Mordialloc 2/425358_8_Magnolia_Street_1.jpg",
                    "/projects images/Mordialloc 2/425358_8_Magnolia_Street_6.jpg",
                    "/projects images/Mordialloc 2/425358_8_Magnolia_Street_16.jpg",
                    "/projects images/Mordialloc 2/425358_8_Magnolia_Street_27.jpg",
                    "/projects images/Mordialloc 2/425358_8_Magnolia_Street_34.jpg"
                  ];
                } else if (projectTitle === "Duplex" && index === 4) {
                  // Bentleigh project
                  projectImages = [
                    "/projects images/Bentleigh/Main 1.jpg",
                    "/projects images/Bentleigh/Main 2.jpg",
                    "/projects images/Bentleigh/Main 3.jpg",
                    "/projects images/Bentleigh/Main 4.jpg",
                    "/projects images/Bentleigh/ia-2022.07.20-Ardwick%208a%20-%20%23154%20.jpg",
                    "/projects images/Bentleigh/ia-2022.07.20-Ardwick%208a%20-%20%23199%20.jpg",
                    "/projects images/Bentleigh/ia-2022.07.20-Ardwick%208a%20-%20%23273%20.jpg"
                  ];
                }

                return (
                  <div
                    key={index}
                    className="group text-center"
                  >
                    <ProjectCard 
                      title={projectTitle}
                      images={projectImages}
                      hasImages={projectImages.length > 0}
                    />
                  </div>
                )
              })}
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