'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroSection from './sections/HeroSection'
import VerseSection from './sections/VerseSection'
import CoupleSection from './sections/CoupleSection'
import EventSection from './sections/EventSection'
import CountdownSection from './sections/CountdownSection'
import MessagesSection from './sections/MessagesSection'
import LocationSection from './sections/LocationSection'
import GiftsSection from './sections/GiftsSection'
import FaqSection from './sections/FaqSection'
import DuaSection from './sections/DuaSection'
import Footer from './sections/Footer'
import styles from '@/styles/InvitationContent.module.css'

interface InvitationContentProps {
  isVisible: boolean
}

export default function InvitationContent({ isVisible }: InvitationContentProps) {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'hidden'
    }
  }, [isVisible])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.invitationContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <HeroSection />
          <VerseSection />
          <CoupleSection />
          <EventSection />
          <CountdownSection />
          <MessagesSection />
          <LocationSection />
          <GiftsSection />
          <FaqSection />
          <DuaSection />
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
