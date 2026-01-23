'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import styles from '@/styles/Envelope.module.css'

// Floating decorations component
const FloatingDecorations = () => {
  const [decorations, setDecorations] = useState<{
    hearts: Array<{ id: number; left: string; delay: number; duration: number }>;
    petals: Array<{ id: number; left: string; delay: number; duration: number }>;
  }>({ hearts: [], petals: [] })

  useEffect(() => {
    setDecorations({
      hearts: Array.from({ length: 8 }, (_, i) => ({
        id: i,
        left: `${10 + Math.random() * 80}%`,
        delay: Math.random() * 8,
        duration: 10 + Math.random() * 8,
      })),
      petals: Array.from({ length: 10 }, (_, i) => ({
        id: i,
        left: `${5 + Math.random() * 90}%`,
        delay: Math.random() * 10,
        duration: 12 + Math.random() * 8,
      })),
    })
  }, [])

  if (decorations.hearts.length === 0) return null

  return (
    <div className={styles.floatingDecorations}>
      {decorations.hearts.map((heart) => (
        <motion.div
          key={`heart-${heart.id}`}
          className={styles.floatingHeart}
          style={{ left: heart.left }}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{
            y: '-100px',
            opacity: [0, 0.6, 0.6, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          ♥
        </motion.div>
      ))}
      {decorations.petals.map((petal) => (
        <motion.div
          key={`petal-${petal.id}`}
          className={styles.floatingPetal}
          style={{ left: petal.left }}
          initial={{ y: '-50px', opacity: 0, x: 0 }}
          animate={{
            y: '100vh',
            opacity: [0, 0.7, 0.7, 0],
            rotate: [0, 180, 360],
            x: [0, 30, -30, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

// Sparkle particles for seal break effect
const Sparkles = ({ isVisible }: { isVisible: boolean }) => {
  const [spreadDistance, setSpreadDistance] = useState(150)

  useEffect(() => {
    const updateSpread = () => {
      const width = window.innerWidth
      if (width < 480) {
        setSpreadDistance(80)
      } else if (width < 768) {
        setSpreadDistance(100)
      } else if (width < 1024) {
        setSpreadDistance(120)
      } else {
        setSpreadDistance(150)
      }
    }

    updateSpread()
    window.addEventListener('resize', updateSpread)
    return () => window.removeEventListener('resize', updateSpread)
  }, [])

  const sparkles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    angle: (i * 30) * (Math.PI / 180),
    delay: i * 0.02,
  }))

  return (
    <AnimatePresence>
      {isVisible && sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className={styles.sparkle}
          initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
          animate={{
            scale: [0, 1.5, 0],
            x: Math.cos(sparkle.angle) * spreadDistance,
            y: Math.sin(sparkle.angle) * spreadDistance,
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 0.8,
            delay: sparkle.delay,
            ease: 'easeOut',
          }}
        />
      ))}
    </AnimatePresence>
  )
}

export default function TapPage() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [showSparkles, setShowSparkles] = useState(false)
  const bgMusicRef = useRef<HTMLAudioElement>(null)

  const handleEnvelopeClick = useCallback(async () => {
    if (!isOpen) {
      setIsOpen(true)
      setShowSparkles(true)

      // Start background music on user interaction
      if (bgMusicRef.current) {
        try {
          bgMusicRef.current.volume = 0.5
          bgMusicRef.current.currentTime = 0
          await bgMusicRef.current.play()
          localStorage.setItem('musicStarted', 'true')
        } catch (err) {
          console.log('Audio play failed:', err)
        }
      }

      // Navigate to home after animation completes (reduced from 1500ms)
      setTimeout(() => {
        router.push('/home')
      }, 900)
    }
  }, [isOpen, router])

  // Prevent scrolling on this page
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  // Preload audio
  useEffect(() => {
    if (bgMusicRef.current) {
      bgMusicRef.current.load()
    }
  }, [])

  // Prefetch home page for faster navigation
  useEffect(() => {
    router.prefetch('/home')
  }, [router])

  return (
    <div className={styles.pageWrapper}>
      {/* Background Music */}
      <audio ref={bgMusicRef} preload="auto" src="/music/background.mp3" loop />

      {/* Floating Decorations */}
      <FloatingDecorations />

      {/* Main Container */}
      <div className={styles.envelopeScene}>
        {/* Envelope Container */}
        <motion.div
          className={styles.envelopeContainer}
          onClick={handleEnvelopeClick}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Letter that slides out from behind */}
          <motion.div
            className={styles.letter}
            animate={
              isOpen
                ? {
                    y: '-50vh',
                    opacity: 1,
                    scale: 1,
                    rotateX: [0, -5, 0],
                  }
                : { y: '0', opacity: 0, scale: 0.9, rotateX: 0 }
            }
            transition={{
              duration: 0.7,
              delay: isOpen ? 0.3 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className={styles.letterContent}>
              <p className={styles.bismillah}>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
              <p className={styles.inviteText}>You are invited to the wedding of</p>
              <div className={styles.names}>
                <span className={styles.groom}>Jaseem</span>
                <span className={styles.ampersand}>&</span>
                <span className={styles.bride}>Haifa</span>
              </div>
              <div className={styles.date}>
                <span>Saturday</span>
                <span className={styles.fullDate}>January 31, 2026</span>
              </div>
            </div>
          </motion.div>

          {/* Envelope PNG Image */}
          <motion.div
            className={styles.envelopeImageWrapper}
            animate={
              isOpen
                ? {
                    rotateX: [0, -5, 15],
                    y: ['0vh', '-1vh', '30vh'],
                    scale: [1, 1.03, 0.75],
                    opacity: [1, 1, 0],
                    filter: ['brightness(1)', 'brightness(1.1)', 'brightness(0.8)']
                  }
                : {
                    rotateX: 0,
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    filter: 'brightness(1)'
                  }
            }
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
              times: [0, 0.25, 1]
            }}
          >
            <Image
              src="/images/envelope.png"
              alt="Envelope"
              width={500}
              height={350}
              className={styles.envelopeImage}
              priority
            />
          </motion.div>

          {/* Wax Seal on top of envelope - centered on round area */}
          <motion.div
            className={styles.waxSeal}
            animate={
              isOpen
                ? {
                    scale: [1, 1.2, 1.4, 0],
                    opacity: [1, 1, 0.8, 0],
                    y: [0, -10, -30, -200],
                    rotate: [0, -10, 20, 360],
                    filter: ['brightness(1)', 'brightness(1.3)', 'brightness(1.5)', 'brightness(0)']
                  }
                : { scale: 1, opacity: 1, y: 0, rotate: 0 }
            }
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              times: [0, 0.2, 0.4, 1]
            }}
            whileHover={!isOpen ? { scale: 1.08, rotate: 3 } : {}}
            whileTap={!isOpen ? { scale: 0.95 } : {}}
          >
            {/* Sparkles effect */}
            <Sparkles isVisible={showSparkles} />

            {/* Glow effect on click */}
            <motion.div
              className={styles.sealGlow}
              animate={isOpen ? { scale: [1, 3], opacity: [0.8, 0] } : { scale: 1, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />

            <Image
              src="/images/wax-seal.png"
              alt="Wax Seal"
              width={150}
              height={150}
              className={styles.sealImage}
              priority
            />
          </motion.div>
        </motion.div>

      </div>

      {/* Transition Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.transitionOverlay}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: [0, 0.3, 1],
              scale: [1.1, 1.05, 1],
            }}
            transition={{
              delay: 1.0,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              times: [0, 0.4, 1]
            }}
          />
        )}
      </AnimatePresence>
      {/* Hidden prefetch link for faster navigation */}
      <Link href="/home" prefetch={true} style={{ display: 'none' }} aria-hidden="true" />
    </div>
  )
}
