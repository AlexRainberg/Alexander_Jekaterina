'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function WeddingBackground() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const positions = [
    { left: '15%', top: '85%' }, { left: '25%', top: '90%' }, { left: '35%', top: '88%' },
    { left: '45%', top: '92%' }, { left: '55%', top: '87%' }, { left: '65%', top: '89%' },
    { left: '75%', top: '91%' }, { left: '85%', top: '86%' }, { left: '20%', top: '93%' },
    { left: '30%', top: '84%' }, { left: '40%', top: '90%' }, { left: '50%', top: '88%' },
    { left: '60%', top: '92%' }, { left: '70%', top: '85%' }, { left: '80%', top: '89%' },
    { left: '10%', top: '87%' }, { left: '90%', top: '91%' }, { left: '5%', top: '89%' },
    { left: '95%', top: '86%' }, { left: '50%', top: '95%' }
  ]

  const delays = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 0.2, 0.7, 1.2, 1.7, 2.2, 2.7, 3.2, 0.3, 0.8, 1.3, 1.8, 2.3]
  const durations = [4, 4.5, 5, 4.2, 4.8, 5.2, 4.6, 5.1, 4.3, 4.9, 5.3, 4.4, 4.7, 5.0, 4.1, 4.6, 5.2, 4.8, 4.5, 4.9]

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-wedding-green-50 via-white to-wedding-gold-50"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute -top-40 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-wedding-gold-200/40 via-wedding-gold-300/20 to-wedding-gold-400/30 blur-3xl"
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, ease: "easeOut", delay: 0.5 }}
        className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-gradient-to-br from-wedding-sage-200/40 via-wedding-green-200/20 to-wedding-sage-300/30 blur-3xl"
      />

      {isClient && Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
            y: [-20, -100, -200]
          }}
          transition={{
            duration: durations[i],
            repeat: Infinity,
            delay: delays[i],
            ease: "easeOut"
          }}
          style={{
            left: positions[i].left,
            top: positions[i].top,
          }}
        >
          {i % 3 === 0 && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-wedding-gold-400/60">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          )}
          
          {i % 3 === 1 && (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-wedding-sage-400/60">
              <path d="M12 22a10 10 0 01-10-10 10 10 0 0110-10 10 10 0 0110 10 10 10 0 01-10 10zm0-18a8 8 0 00-8 8 8 8 0 008 8 8 8 0 008-8 8 8 0 00-8-8zm0 14a6 6 0 01-6-6 6 6 0 016-6 6 6 0 016 6 6 6 0 01-6 6zm0-10a4 4 0 00-4 4 4 4 0 004 4 4 4 0 004-4 4 4 0 00-4-4z"/>
            </svg>
          )}
          
          {i % 3 === 2 && (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-wedding-gold-500/70">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  )
}