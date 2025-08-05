'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { Link } from './link'
import Image from 'next/image'

const links = [
  { href: '#invitation', label: 'Приглашение' },
  { href: '#program', label: 'Программа' },
  { href: '#gifts', label: 'О подарках' },
]

function DesktopNav() {
  return (
    <nav className="relative hidden md:flex">
      {links.map(({ href, label }) => (
        <div key={href} className="relative flex">
          <Link
            href={href}
            className="flex items-center px-4 py-3 text-base font-medium text-wedding-sage-700 hover:text-wedding-gold-600 transition-colors duration-200"
          >
            {label}
          </Link>
        </div>
      ))}
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg text-wedding-sage-700 hover:bg-wedding-gold-50 md:hidden transition-colors duration-200"
      aria-label="Открыть меню"
    >
      {({ open }) => (
        open ? <XMarkIcon className="size-6" /> : <Bars2Icon className="size-6" />
      )}
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <DisclosurePanel className="md:hidden">
      <div className="flex flex-col gap-6 py-4 bg-white/90 backdrop-blur-sm rounded-2xl mt-4 border border-wedding-gold-200/50 shadow-lg">
        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
            }}
            key={href}
          >
            <Link 
              href={href} 
              className="text-base font-medium text-wedding-sage-700 hover:text-wedding-gold-600 transition-colors duration-200 px-4"
            >
              {label}
            </Link>
          </motion.div>
        ))}
      </div>
    </DisclosurePanel>
  )
}

export function WeddingNavbar() {
  return (
    <Disclosure as="header" className="pt-6 sm:pt-8">
      <div className="relative flex justify-between items-center">
        <div className="relative flex gap-6 items-center">
          <div className="py-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2"
            >
              <Image 
                src="/favicon.ico" 
                alt="Логотип свадьбы" 
                width={32} 
                height={32} 
                className="h-8 w-8"
              />
              <span className="text-xl font-serif text-wedding-sage-800 hidden sm:block">
                Наша Свадьба
              </span>
            </motion.div>
          </div>
        </div>
        <DesktopNav />
        <MobileNavButton />
      </div>
      <MobileNav />
    </Disclosure>
  )
}