'use client'

import { useEffect, useState } from 'react'
import { WeddingInvitation } from './wedding-invitation'

export function GuestNameProvider({ children }: { children: React.ReactNode }) {
  const [guestGreeting, setGuestGreeting] = useState("Дорогие гости")

  useEffect(() => {
    // Читаем параметры URL на стороне клиента
    const urlParams = new URLSearchParams(window.location.search)
    const guestName = urlParams.get('guest')
    const guestSurname = urlParams.get('surname')
    
    if (guestName && guestSurname) {
      setGuestGreeting(`${guestName}, ${guestSurname}`)
    } else if (guestName) {
      setGuestGreeting(guestName)
    }
  }, [])

  return (
    <WeddingInvitation guestNames={[guestGreeting]} />
  )
} 