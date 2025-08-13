"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Send, Loader2, CheckCircle } from "lucide-react"
import Footer from "@/components/sections/footer"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function FeedbackPage() {
  const [selectedRating, setSelectedRating] = useState<number>(0)
  const [hoveredRating, setHoveredRating] = useState<number>(0)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [showImprovementForm, setShowImprovementForm] = useState<boolean>(false)
  const [improvementText, setImprovementText] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleStarClick = (rating: number) => {
    setSelectedRating(rating)
  }

  const handleStarHover = (rating: number) => {
    setHoveredRating(rating)
  }

  const handleSubmit = async () => {
    if (selectedRating === 0) return

    setSubmitted(true)

    if (selectedRating === 5) {
      // Send 5-star feedback and redirect to Google review page
      try {
        await fetch('/api/feedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            rating: selectedRating,
            improvementText: "",
            honeypot: ""
          })
        })
      } catch (error) {
        console.error('Failed to send feedback:', error)
      }
      
      // Redirect to Google review page for excellent rating
      window.location.href = "https://g.page/r/CSy-AvWm3H2uEAI/review"
    } else {
      // Show improvement form for 4 stars or below
      setShowImprovementForm(true)
    }
  }

  const handleImprovementSubmit = async () => {
    // Send the feedback to the backend
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rating: selectedRating,
          improvementText: improvementText,
          honeypot: ""
        })
      })

      if (response.ok) {
        console.log("Feedback sent successfully")
      } else {
        console.error("Failed to send feedback")
      }
    } catch (error) {
      console.error("Error sending feedback:", error)
    }
    
    // Show loading animation for 3 seconds then redirect
    setTimeout(() => {
      window.location.href = "/"
    }, 3000)
  }

  const handleStartOver = () => {
    // Reset everything to start over
    setSelectedRating(0)
    setSubmitted(false)
    setShowImprovementForm(false)
    setImprovementText("")
    setIsLoading(false)
  }

  const getRatingText = (rating: number) => {
    switch (rating) {
      case 1: return "Needs Improvement"
      case 2: return "Fair Service"
      case 3: return "Good Experience"
      case 4: return "Very Satisfied"
      case 5: return "Outstanding Service"
      default: return "Rate Your Experience"
    }
  }

  return (
    <>
      <main className="relative min-h-screen flex items-center overflow-hidden bg-white py-6 sm:py-8 md:py-16">
        {/* White Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(248, 250, 252, 0.5) 0%, rgba(239, 246, 255, 0.3) 100%)' }} />
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
          <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                  <div className="flex flex-col items-center gap-6 sm:gap-8">
                    <div className="relative">
                      <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center">
                        <Loader2 className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-white animate-spin" />
                      </div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 font-heading">
                      Processing Your Feedback
                  </h2>
                    <p className="text-lg sm:text-xl text-slate-600 font-body">
                      Thank you for helping us improve. Redirecting you shortly.
                  </p>
                </div>
              </motion.div>
            ) : !submitted ? (
              <motion.div
                key="rating"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium-heading text-slate-900 leading-tight mb-4 sm:mb-6">
                    How Was Your
                    <br />
                      PdCon Experience?
                </h1>

                  <p className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 font-body">
                    Your feedback helps us provide exceptional property management services and improve every client experience.
                </p>

                {/* Star Rating - Fully responsive */}
                  <div className="flex justify-center items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 mb-6 sm:mb-8">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                      key={star}
                      onClick={() => handleStarClick(star)}
                      onMouseEnter={() => handleStarHover(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-1 sm:p-2 md:p-3 lg:p-4 transition-all duration-200 group"
                    >
                      <Star
                        className={cn(
                            "w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 transition-all duration-300",
                          (hoveredRating >= star || selectedRating >= star)
                              ? "fill-yellow-500 text-yellow-500 drop-shadow-lg"
                              : "text-slate-300 hover:text-yellow-300 group-hover:drop-shadow-lg"
                        )}
                      />
                    </motion.button>
                  ))}
                </div>

                {/* Rating Text - Responsive sizing */}
                  <motion.div
                  key={hoveredRating || selectedRating}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                    className="mb-8 sm:mb-10 md:mb-12"
                >
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 font-heading">
                  {getRatingText(hoveredRating || selectedRating)}
                    </p>
                  </motion.div>

                {/* Submit Button - Responsive sizing */}
                  <div>
                <Button
                  onClick={handleSubmit}
                  disabled={selectedRating === 0}
                  size="lg"
                  className={cn(
                        "bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white border-0",
                        "px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg lg:text-xl font-semibold group transition-all duration-300",
                        "hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25 font-body",
                        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
                        "transform-gpu will-change-transform"
                      )}
                      style={{ borderRadius: '0' }}
                    >
                      <span className="flex items-center gap-2 sm:gap-3">
                    Submit Rating
                        <Send className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
                  </div>
              </motion.div>
            ) : showImprovementForm ? (
              <motion.div
                key="improvement"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium-heading text-slate-900 mb-4 sm:mb-6">
                    Help Us Serve You
                    <br />
                      Even Better
                </h1>
                  <p className="text-lg sm:text-xl text-slate-600 mb-8 sm:mb-10 md:mb-12 font-body">
                    Your specific feedback helps us enhance our property management services for all clients.
                </p>

                  <div className="bg-transparent p-6 sm:p-8 md:p-12 max-w-4xl mx-auto">
                  <textarea
                    value={improvementText}
                    onChange={(e) => setImprovementText(e.target.value)}
                      placeholder="Please tell us specifically how we can improve our property management services..."
                      className="w-full h-32 sm:h-40 md:h-48 p-4 sm:p-6 bg-white border border-slate-200 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 resize-none font-body text-sm sm:text-base md:text-lg"
                      style={{ borderRadius: '0' }}
                  />
                  
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center">
                      <Button
                        onClick={handleImprovementSubmit}
                        size="lg"
                        className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white border-0 px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg font-semibold group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25 font-body"
                        style={{ borderRadius: '0' }}
                      >
                        <span className="flex items-center justify-center gap-2 sm:gap-3">
                          Submit Feedback
                          <Send className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </Button>
                      
                    <Button
                      onClick={handleStartOver}
                      variant="outline"
                      size="lg"
                        className="w-full sm:w-auto border-2 border-slate-300 text-slate-700 bg-white hover:bg-slate-50 px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg font-semibold font-body transition-all duration-300"
                        style={{ borderRadius: '0' }}
                    >
                        Change Rating
                    </Button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="thankyou"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="flex flex-col items-center gap-6 sm:gap-8">
                    <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center">
                      <CheckCircle className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-white" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium-heading text-slate-900">
                      Thank You for Your
                      <br />
                      <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                        Valuable Feedback
                      </span>
                    </h2>
                    <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-body">
                      Your input helps us continuously improve our property management services. We truly appreciate your partnership with PdCon.
                    </p>
                    <Button
                      onClick={() => window.location.href = "/"}
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white border-0 px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg font-semibold group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25 font-body"
                      style={{ borderRadius: '0' }}
                    >
                      Return to Home
                    </Button>
                </div>
              </motion.div>
              )}
          </AnimatePresence>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
} 