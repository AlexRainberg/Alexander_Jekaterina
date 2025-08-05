'use client'

import { Container } from '@/components/container'
import { WeddingBackground } from '@/components/wedding-background'
import { WeddingCountdown } from '@/components/wedding-countdown'
import { WeddingNavbar } from '@/components/wedding-navbar'
import { Button } from '@/components/button'
import Emoji from '@/components/emoji'
import { motion } from 'framer-motion'
import { HeartIcon, CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline'

function TypewriterText({ text, delay = 0 }: { text: string, delay?: number }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.05,
            delay: delay + index * 0.03,
            ease: "easeOut"
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

export function WeddingHero() {
  const weddingDate = new Date('2025-09-04T16:30:00')
  const weddingDateFormatted = new Intl.DateTimeFormat('ru-RU', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(weddingDate)

  return (
    <div className="relative min-h-screen flex flex-col">
      <WeddingBackground />
      
      <header className="relative z-10">
        <Container className="relative z-10">
          <WeddingNavbar />
        </Container>
      </header>

      <main className="relative z-10 flex-1 flex items-center justify-center w-full py-12">
        <Container className="w-full">
          <motion.div 
            className="mx-auto max-w-5xl text-center w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            

            <motion.h1 
              className="text-4xl sm:text-6xl lg:text-8xl font-elegant tracking-tight text-wedding-sage-800 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                <span className="block">
                  <TypewriterText text="Александр" delay={0.8} />
                </span>
                
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }} 
                  animate={{ scale: 1, rotate: 0 }} 
                  transition={{ duration: 1, delay: 2, ease: "easeOut" }} 
                  className="text-wedding-gold-500 text-4xl sm:text-6xl" 
                > 
                  <Emoji 
                    name="heart" 
                    alt="сердце" 
                    fallback="и" 
                    className="inline-block w-[1em] h-[1em] align-baseline" 
                  />
                </motion.div>
                
                <span className="block">
                  <TypewriterText text="Екатерина" delay={2.5} />
                </span>
              </div>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.5 }}
              className="mb-12"
            >
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/90 backdrop-blur-sm rounded-2xl border border-wedding-gold-200/50 shadow-xl">
                <CalendarDaysIcon className="w-6 h-6 text-wedding-gold-600" />
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-elegant text-wedding-sage-800 capitalize">
                    {weddingDateFormatted}
                  </div>
                  <div className="text-wedding-sage-600 text-base mt-1">
                    Таллинн, Эстония
                  </div>
                </div>
                <MapPinIcon className="w-6 h-6 text-wedding-sage-600" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 4 }}
              className="mb-12"
            >
              <WeddingCountdown targetDate={weddingDate} />
            </motion.div>

            <motion.p 
              className="mx-auto max-w-3xl text-lg sm:text-xl text-wedding-sage-700 mb-12 leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 4.5 }}
            >
              В атмосфере старинного Таллинна мы хотим разделить с вами самый важный 
              и волшебный день в нашей жизни. Ваше присутствие сделает наше торжество 
              поистине незабываемым и наполнит его особенной радостью.
            </motion.p>

             <motion.div 
               className="flex justify-center items-center"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 5 }}
             >
               <motion.div
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
               >
                 <Button 
                   href="#program" 
                   className="group relative overflow-hidden bg-gradient-to-r from-wedding-gold-500 to-wedding-gold-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                 >
                   <span className="relative z-10 flex items-center gap-2">
                     Программа празднования
                     <CalendarDaysIcon className="w-5 h-5" />
                   </span>
                   <motion.div
                     className="absolute inset-0 bg-gradient-to-r from-wedding-gold-600 to-wedding-gold-700"
                     initial={{ x: "100%" }}
                     whileHover={{ x: 0 }}
                     transition={{ duration: 0.3 }}
                   />
                 </Button>
               </motion.div>
             </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 5.5, ease: "easeOut" }}
              className="mt-16 flex justify-center"
            >
              <div className="flex items-center gap-4">
                <div className="w-20 h-px bg-gradient-to-r from-transparent to-wedding-gold-400"></div>
                <Emoji
                  name="sparkles"
                  alt="блёстки"
                  fallback="*"
                  className="text-4xl"
                />
                <div className="w-20 h-px bg-gradient-to-l from-transparent to-wedding-gold-400"></div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </main>
    </div>
  )
}