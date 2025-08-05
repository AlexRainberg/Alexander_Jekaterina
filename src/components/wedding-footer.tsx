'use client'

import { Container } from './container'
import { motion } from 'framer-motion'
import { HeartIcon, MapPinIcon, ClockIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import Emoji from '@/components/emoji';

export function WeddingFooter() {
  return (
    <footer className="bg-gradient-to-br from-wedding-sage-50 to-wedding-gold-50 py-16">
      <Container>
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-12">
            <motion.div className="flex items-center justify-center gap-3 mb-6">
  <HeartIcon className="w-8 h-8 text-wedding-gold-500 hidden md:block" /> {/* ➊ */}

  <h3 className="text-3xl font-elegant text-wedding-sage-800 whitespace-nowrap">
    Александр{' '}
          <Emoji
            name="heart"
            alt="сердце"
            fallback="и"                /* покажет «и» при сбое загрузки */
            />{' '}
            Екатерина
            </h3>

            <HeartIcon className="w-8 h-8 text-wedding-gold-500 hidden md:block" /> {/* ➊ */}
          </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-wedding-sage-600 mb-8"
            >
              4 сентября 2025 • Таллинн, Эстония
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-wedding-gold-200/50 shadow-lg">
              <ClockIcon className="w-6 h-6 text-wedding-gold-600 mx-auto mb-3" />
              <h4 className="font-semibold text-wedding-sage-800 mb-2">Время</h4>
              <p className="text-wedding-sage-600 text-base">16:30 - 23:00</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-wedding-gold-200/50 shadow-lg">
              <MapPinIcon className="w-6 h-6 text-wedding-gold-600 mx-auto mb-3" />
              <h4 className="font-semibold text-wedding-sage-800 mb-2">Место</h4>
              <p className="text-wedding-sage-600 text-base">ЗАГС Таллинн & Loft ja Ürdid</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-wedding-gold-200/50 shadow-lg">
              <HeartIcon className="w-6 h-6 text-wedding-gold-600 mx-auto mb-3" />
              <h4 className="font-semibold text-wedding-sage-800 mb-2">Дресс-код</h4>
              <p className="text-wedding-sage-600 text-base">Элегантный</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-wedding-gold-200/50 max-w-2xl mx-auto mb-12"
          >
            <h4 className="text-2xl font-elegant text-wedding-sage-800 mb-6 flex items-center justify-center gap-2">
              <PhoneIcon className="w-5 h-5 text-wedding-gold-600" />
              Есть вопросы?
            </h4>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <div className="flex items-center gap-2 justify-center">
                <PhoneIcon className="w-4 h-4 text-wedding-sage-500" />
                <span className="text-wedding-sage-700">+372 588 78704</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <EnvelopeIcon className="w-4 h-4 text-wedding-sage-500" />
                <span className="text-wedding-sage-700">alexander.moroz.tln@gmail.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="border-t border-wedding-gold-200/50 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            {/* ✨ → sparkles */}
            <p className="text-wedding-sage-600 mb-4">
              Мы с нетерпением ждем встречи с вами в этот особенный день!{' '}
              <Emoji name="sparkles" alt="блестки" fallback="*" />
            </p>
            
            <div className="flex items-center justify-center gap-2 text-wedding-gold-400">
              <div className="w-12 h-px bg-current" />
              <Emoji
                name="revolving"
                alt="Два сердца"
                fallback="и"
                className="text-2xl"
              />
              <div className="w-12 h-px bg-current" />
            </div>
            
            <p className="text-base text-wedding-sage-500 mt-6">
              © 2025 • С любовью создано для нашей свадьбы
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </footer>
  )
}