'use client'

import { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import HeroSection from '@/components/sections/HeroSection'
import VerseSection from '@/components/sections/VerseSection'
import CoupleSection from '@/components/sections/CoupleSection'
import EventSection from '@/components/sections/EventSection'
import CountdownSection from '@/components/sections/CountdownSection'
import MessagesSection from '@/components/sections/MessagesSection'
import LocationSection from '@/components/sections/LocationSection'
import GiftsSection from '@/components/sections/GiftsSection'
import FAQSection from '@/components/sections/FAQSection'
import DuaSection from '@/components/sections/DuaSection'
import Footer from '@/components/sections/Footer'
import FloatingDecorations from '@/components/FloatingDecorations'
import SectionDivider from '@/components/SectionDivider'
import MusicToggle from '@/components/MusicToggle'
import ScrollToTop from '@/components/ScrollToTop'
import styles from '@/styles/InvitationContent.module.css'

// Page transition variants - optimized for faster load
const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
}

// Section wrapper with optimized animations for faster perceived load
const SectionWrapper = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.4,
        delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  )
}

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    document.body.style.overflow = 'auto'
  }, [])

  return (
    <motion.div
      className={styles.invitationContent}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Progress Bar */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, var(--text-highlight), var(--gold), var(--text-accent))',
          transformOrigin: '0%',
          scaleX,
          zIndex: 9999,
        }}
      />

      {/* Floating Decorations */}
      <FloatingDecorations />

      {/* Hero Section */}
      <SectionWrapper>
        <HeroSection />
      </SectionWrapper>

      {/* Divider */}
      <SectionDivider variant="wave" />

      {/* Verse Section */}
      <SectionWrapper delay={0.1}>
        <VerseSection />
      </SectionWrapper>

      {/* Divider */}
      <SectionDivider variant="hearts" />

      {/* Couple Section */}
      <SectionWrapper delay={0.1}>
        <CoupleSection />
      </SectionWrapper>

      {/* Divider */}
      <SectionDivider variant="ornament" />

      {/* Event Section */}
      <SectionWrapper delay={0.1}>
        <EventSection />
      </SectionWrapper>

      {/* Divider */}
      <SectionDivider variant="stars" />

      {/* Countdown Section */}
      <SectionWrapper delay={0.1}>
        <CountdownSection />
      </SectionWrapper>

      {/* Divider */}
      <SectionDivider variant="hearts" />

      {/* Messages Section */}
      <SectionWrapper delay={0.1}>
        <MessagesSection />
      </SectionWrapper>

      {/* Divider */}
      <SectionDivider variant="wave" />

      {/* Location Section */}
      <SectionWrapper delay={0.1}>
        <LocationSection />
      </SectionWrapper>

      {/* Divider */}
      <SectionDivider variant="ornament" />

      {/* Gifts Section */}
      <SectionWrapper delay={0.1}>
        <GiftsSection />
      </SectionWrapper>

      {/* Divider */}
      <SectionDivider variant="stars" />

      {/* FAQ Section */}
      <SectionWrapper delay={0.1}>
        <FAQSection />
      </SectionWrapper>

      {/* Divider */}
      <SectionDivider variant="hearts" />

      {/* Dua Section */}
      <SectionWrapper delay={0.1}>
        <DuaSection />
      </SectionWrapper>

      {/* Footer */}
      <Footer />

      {/* Fixed Elements */}
      <MusicToggle />
      <ScrollToTop />
    </motion.div>
  )
}
