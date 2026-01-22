'use client'

import { useState } from 'react'
import Envelope from '@/components/Envelope'
import InvitationContent from '@/components/InvitationContent'
import MusicToggle from '@/components/MusicToggle'

export default function Home() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false)

  const handleEnvelopeOpen = () => {
    setIsEnvelopeOpen(true)
  }

  return (
    <main>
      {!isEnvelopeOpen && <Envelope onOpen={handleEnvelopeOpen} />}
      <InvitationContent isVisible={isEnvelopeOpen} />
      <MusicToggle />
    </main>
  )
}
