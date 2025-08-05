'use client'

import { Container } from '@/components/container'
import { motion } from 'framer-motion'
import { HeartIcon, SparklesIcon } from '@heroicons/react/24/outline'
import Emoji from '@/components/emoji'

interface WeddingInvitationProps {
  guestNames?: string[]
  customMessage?: string
}

export function WeddingInvitation({ 
  guestNames = ["Дорогие гости"], 
  customMessage 
}: WeddingInvitationProps) {
  const defaultMessage = `
    Мы безмерно счастливы объявить, что 4 сентября 2025 года мы станем семьёй, и хотим, чтобы именно вы были рядом в этот по-настоящему особенный момент.

    Ваши улыбки, тёплые слова и искренние объятия сделают наш праздник полным. Примите это приглашение как знак нашей дружбы и любви к вам.
  `

  return (
    <section id="invitation" className="py-24 bg-gradient-to-br from-white via-wedding-gold-50/30 to-wedding-sage-50/50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-wedding-gold-200/50 shadow-lg mb-6"
            >
              <HeartIcon className="w-5 h-5 text-wedding-gold-600" />
              <span className="text-wedding-sage-700 font-medium">Личное приглашение</span>
              <HeartIcon className="w-5 h-5 text-wedding-gold-600" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white via-wedding-gold-50/50 to-wedding-sage-50/30 rounded-3xl"></div>
            
            <div className="absolute inset-0 rounded-3xl border-2 border-wedding-gold-200/30"></div>
            
            <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-wedding-gold-400 rounded-tl-2xl"></div>
            <div className="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2 border-wedding-gold-400 rounded-tr-2xl"></div>
            <div className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 border-wedding-gold-400 rounded-bl-2xl"></div>
            <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-wedding-gold-400 rounded-br-2xl"></div>

            <div className="relative p-12 sm:p-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-elegant text-wedding-sage-800 mt-4 mb-6 leading-tight">
                  {guestNames.join(", ")}!
                </h2>
                <div className="w-20 h-0.5 bg-gradient-to-r from-wedding-gold-400 to-wedding-gold-600 mx-auto"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none text-center"
              >
                <div className="text-wedding-sage-700 leading-relaxed space-y-6">
                  {(customMessage || defaultMessage)
                    .trim()
                    .split('\n\n')
                    .map((paragraph, index) => (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg sm:text-xl font-light leading-relaxed"
                      >
                        {paragraph.trim()}
                      </motion.p>
                    ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-16 h-px bg-gradient-to-r from-transparent to-wedding-gold-400"></div>
                  <SparklesIcon className="w-6 h-6 text-wedding-gold-500" />
                  <div className="w-16 h-px bg-gradient-to-l from-transparent to-wedding-gold-400"></div>
                </div>
                
                <p className="text-2xl sm:text-3xl font-elegant text-wedding-sage-800 mb-2">
                  С любовью и нетерпением,
                </p>
                <p className="text-xl sm:text-2xl font-elegant text-wedding-gold-600">
                  Александр и Екатерина
                </p>
              </motion.div>

              <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.8 }}
              viewport={{ once: true }}
              className="absolute top-8 left-1/2 -translate-x-1/2 text-4xl opacity-20"
            >
              {/* ❤️ → heart */}
              <Emoji
                name="heart"
                alt="сердце"
                fallback="❤️"
                className="inline-block w-[1em] h-[1em] align-baseline"
              />
            </motion.div>
              
              <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 2 }}
              viewport={{ once: true }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-3xl opacity-20"
            >
              {/* ✨ → sparkles */}
              <Emoji
                name="sparkles"
                alt="блёстки"
                fallback="✨"
                className="inline-block w-[1em] h-[1em] align-baseline"
              />
            </motion.div>
            </div>
          </motion.div>

          <motion.div /* анимация та же */ className="text-center mt-12">
            <div className="flex items-center justify-center gap-2 text-wedding-gold-400">
              <div className="w-8 h-px bg-current" />
              {/* 💕 → revolving */}
              <Emoji
                name="revolving"
                alt="два сердца"
                fallback="💕"
                className="text-2xl"
              />
              <div className="w-8 h-px bg-current" />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}