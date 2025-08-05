'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Emoji from '@/components/emoji'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface CountdownProps {
  targetDate: Date
  className?: string
}

export function WeddingCountdown({ targetDate, className = '' }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const target = targetDate.getTime()
      const difference = target - now
      
      console.log('Timer debug:', { 
        now: new Date(now).toLocaleString(), 
        target: new Date(target).toLocaleString(), 
        difference,
        differenceInDays: Math.floor(difference / (1000 * 60 * 60 * 24))
      })
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (!mounted) {
    return (
      <div className={`text-center ${className}`}>
        <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-wedding-gold-200/30">
              <div className="text-2xl sm:text-3xl font-bold text-wedding-gold-600">--</div>
              <div className="text-base text-wedding-sage-700 mt-1">Loading</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const timeUnits = [
    { value: timeLeft.days, label: 'Дней' },
    { value: timeLeft.hours, label: 'Часов' },
    { value: timeLeft.minutes, label: 'Минут' },
    { value: timeLeft.seconds, label: 'Секунд' },
  ]

  return (
    <div className={`text-center ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6"
      >
        <h3 className="text-2xl sm:text-3xl font-elegant text-wedding-sage-800 mb-2">
          До нашей свадьбы осталось
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-wedding-gold-400 to-wedding-gold-600 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-md mx-auto">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-wedding-gold-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <motion.div
                key={unit.value}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-3xl sm:text-4xl font-bold text-wedding-gold-600 leading-none"
              >
                {unit.value.toString().padStart(2, '0')}
              </motion.div>
              <div className="text-base text-wedding-sage-700 mt-2 font-medium">
                {unit.label}
              </div>
            </div>
            
            <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-wedding-gold-400 rounded-tl-lg opacity-60"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-wedding-gold-400 rounded-tr-lg opacity-60"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-wedding-gold-400 rounded-bl-lg opacity-60"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-wedding-gold-400 rounded-br-lg opacity-60"></div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="text-wedding-sage-600 mt-8 italic text-lg font-light"
      >
        Каждый миг приближает нас к нашему особенному дню!{' '}
        <Emoji
          name="sparkles"
          alt="блёстки"
          fallback="*"
          className="inline-block w-[1em] h-[1em] align-baseline"
        />
      </motion.p>
    </div>
  )
}