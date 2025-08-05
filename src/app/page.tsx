import { WeddingFooter } from '@/components/wedding-footer'
import type { Metadata } from 'next'

import { WeddingHero } from '@/components/wedding-hero'
import { WeddingInvitation } from '@/components/wedding-invitation'
import { WeddingProgram } from '@/components/wedding-program'
import { WeddingGifts } from '@/components/wedding-gifts'
import { GuestNameProvider } from '@/components/guest-name-provider'

export const metadata: Metadata = {
  description:
    'Приглашение на свадьбу Александра и Екатерины. Присоединяйтесь к нам в этот особенный день в Таллинне, Эстония.',
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <WeddingHero />
      <main>
        <GuestNameProvider>
          <WeddingInvitation />
        </GuestNameProvider>
        <WeddingProgram />
        <WeddingGifts />
      </main>
      <WeddingFooter />
    </div>
  )
}
