"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      // Here you would typically send the message to your chat service
      console.log('Message sent:', message)
      setMessage("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Fixed positioned container */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        {/* Chat Window */}
        {isOpen && (
          <div
            className="absolute bottom-16 right-0 w-80 sm:w-96 h-[500px] rounded-2xl mb-2 overflow-hidden transition-all duration-200"
            style={{ 
              backgroundColor: '#ffffff',
              border: '1px solid #f3f4f6',
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)" 
            }}
          >
            {/* Chat Header */}
            <div 
              className="flex items-center justify-between p-5"
              style={{ 
                background: 'linear-gradient(135deg, #161441 0%, #1e1b4b 100%)',
                color: '#ffffff'
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold font-heading text-base">PdCon Assistant</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#4ade80' }}></div>
                    <p className="text-xs" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Online • How can we help?</p>
                  </div>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200"
                style={{ 
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.backgroundColor = 'transparent';
                }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-5 h-80 overflow-y-auto" style={{ background: 'linear-gradient(180deg, #f9fafb 0%, #ffffff 100%)' }}>
              <div className="space-y-4">
                {/* Welcome Message */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ 
                    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}>
                    <MessageCircle className="w-4 h-4" style={{ color: '#ffffff' }} />
                  </div>
                  <div className="p-4 rounded-2xl max-w-xs" style={{ 
                    backgroundColor: '#ffffff',
                    border: '1px solid #f3f4f6',
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                  }}>
                    <p className="text-sm font-body leading-relaxed" style={{ color: '#1f2937' }}>
                      Hello! I'm here to help you with any questions about our property development and management services. How can I assist you today?
                    </p>
                  </div>
                </div>

                {/* Sample quick actions */}
                <div className="flex flex-wrap gap-2 ml-11">
                  <button 
                    className="px-4 py-2 rounded-full text-xs transition-colors duration-200"
                    style={{ 
                      backgroundColor: '#ffffff',
                      border: '1px solid #e5e7eb',
                      color: '#4b5563',
                      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLButtonElement;
                      target.style.backgroundColor = '#f9fafb';
                      target.style.borderColor = '#d1d5db';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLButtonElement;
                      target.style.backgroundColor = '#ffffff';
                      target.style.borderColor = '#e5e7eb';
                    }}
                  >
                    Property Development
                  </button>
                  <button 
                    className="px-4 py-2 rounded-full text-xs transition-colors duration-200"
                    style={{ 
                      backgroundColor: '#ffffff',
                      border: '1px solid #e5e7eb',
                      color: '#4b5563',
                      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLButtonElement;
                      target.style.backgroundColor = '#f9fafb';
                      target.style.borderColor = '#d1d5db';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLButtonElement;
                      target.style.backgroundColor = '#ffffff';
                      target.style.borderColor = '#e5e7eb';
                    }}
                  >
                    Project Management
                  </button>
                  <button 
                    className="px-4 py-2 rounded-full text-xs transition-colors duration-200"
                    style={{ 
                      backgroundColor: '#ffffff',
                      border: '1px solid #e5e7eb',
                      color: '#4b5563',
                      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                      const target = e.target as HTMLButtonElement;
                      target.style.backgroundColor = '#f9fafb';
                      target.style.borderColor = '#d1d5db';
                    }}
                    onMouseLeave={(e) => {
                      const target = e.target as HTMLButtonElement;
                      target.style.backgroundColor = '#ffffff';
                      target.style.borderColor = '#e5e7eb';
                    }}
                  >
                    Contact Info
                  </button>
                </div>

                {/* Typing indicator */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ 
                    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}>
                    <MessageCircle className="w-4 h-4" style={{ color: '#ffffff' }} />
                  </div>
                  <div className="p-3 rounded-2xl" style={{ 
                    backgroundColor: '#ffffff',
                    border: '1px solid #f3f4f6',
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                  }}>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#9ca3af' }}></div>
                      <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#9ca3af', animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#9ca3af', animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4" style={{ 
              borderTop: '1px solid #f3f4f6',
              backgroundColor: '#ffffff'
            }}>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 rounded-xl text-sm font-body transition-colors duration-200"
                  style={{ 
                    border: '1px solid #e5e7eb',
                    backgroundColor: '#ffffff',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    const target = e.target as HTMLInputElement;
                    target.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                    target.style.boxShadow = '0 0 0 2px rgba(59, 130, 246, 0.3)';
                  }}
                  onBlur={(e) => {
                    const target = e.target as HTMLInputElement;
                    target.style.borderColor = '#e5e7eb';
                    target.style.boxShadow = 'none';
                  }}
                />
                <button 
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  className="w-12 h-12 flex items-center justify-center rounded-xl transition-opacity duration-200"
                  style={{ 
                    backgroundColor: '#161441',
                    color: '#ffffff',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    opacity: !message.trim() ? '0.5' : '1',
                    cursor: !message.trim() ? 'not-allowed' : 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    if (message.trim()) {
                      const target = e.target as HTMLButtonElement;
                      target.style.opacity = '0.9';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (message.trim()) {
                      const target = e.target as HTMLButtonElement;
                      target.style.opacity = '1';
                    }
                  }}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs mt-2 font-body" style={{ color: '#9ca3af' }}>
                Chat functionality coming soon...
              </p>
            </div>
          </div>
        )}

        {/* Chat Toggle Button */}
        <button
          onClick={toggleChat}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none"
          style={{ 
            backgroundColor: '#161441',
            color: '#ffffff',
            boxShadow: "0 10px 25px -5px rgba(22, 20, 65, 0.3), 0 4px 6px -2px rgba(22, 20, 65, 0.15)",
            transform: 'scale(1)'
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.transform = 'scale(1)';
          }}
          onMouseDown={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.transform = 'scale(0.95)';
          }}
          onMouseUp={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.transform = 'scale(1.05)';
          }}
          onFocus={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.boxShadow = '0 10px 25px -5px rgba(22, 20, 65, 0.3), 0 4px 6px -2px rgba(22, 20, 65, 0.15), 0 0 0 4px rgba(59, 130, 246, 0.2)';
          }}
          onBlur={(e) => {
            const target = e.target as HTMLButtonElement;
            target.style.boxShadow = '0 10px 25px -5px rgba(22, 20, 65, 0.3), 0 4px 6px -2px rgba(22, 20, 65, 0.15)';
          }}
        >
          {/* Simple icon toggle */}
          {isOpen ? (
            <X className="w-6 h-6 sm:w-7 sm:h-7" />
          ) : (
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
          )}
        </button>
      </div>
    </>
  )
} 