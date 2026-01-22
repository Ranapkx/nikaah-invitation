'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '@/styles/Envelope.module.css'

interface EnvelopeProps {
  onOpen: () => void
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; angle: number }>>([])

  const handleOpen = useCallback(() => {
    if (isOpening) return
    setIsOpening(true)

    // Create particles for seal break effect
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: 0,
      y: 0,
      angle: (i / 12) * Math.PI * 2,
    }))
    setParticles(newParticles)

    // Play music
    const audio = document.getElementById('bgMusic') as HTMLAudioElement
    if (audio) {
      audio.play().catch(() => console.log('Audio autoplay blocked'))
    }

    // Fade out and show content
    setTimeout(() => {
      setIsVisible(false)
      setTimeout(onOpen, 500)
    }, 2500)
  }, [isOpening, onOpen])

  // Handle scroll/wheel to open
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      handleOpen()
    }

    let touchStartY = 0
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      const diff = touchStartY - e.touches[0].clientY
      if (diff > 30) {
        e.preventDefault()
        handleOpen()
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [handleOpen])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.envelopeWrapper}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          {/* Background */}
          <div className={styles.envelopeBg}>
            <div className={styles.bgGradient} />
            <div className={styles.bgPattern} />
            <div className={styles.floatingPetals}>
              {[...Array(12)].map((_, i) => (
                <span key={i} />
              ))}
            </div>
          </div>

          {/* Gold Corners */}
          <div className={`${styles.goldCorner} ${styles.topLeft}`}>
            <svg viewBox="0 0 100 100">
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D4AF37" />
                  <stop offset="50%" stopColor="#F4E4BC" />
                  <stop offset="100%" stopColor="#B8860B" />
                </linearGradient>
              </defs>
              <path d="M0 0 L100 0 L100 10 L10 10 L10 100 L0 100 Z" fill="url(#goldGradient)" />
            </svg>
          </div>
          <div className={`${styles.goldCorner} ${styles.topRight}`}>
            <svg viewBox="0 0 100 100">
              <path d="M0 0 L100 0 L100 100 L90 100 L90 10 L0 10 Z" fill="url(#goldGradient)" />
            </svg>
          </div>
          <div className={`${styles.goldCorner} ${styles.bottomLeft}`}>
            <svg viewBox="0 0 100 100">
              <path d="M0 0 L10 0 L10 90 L100 90 L100 100 L0 100 Z" fill="url(#goldGradient)" />
            </svg>
          </div>
          <div className={`${styles.goldCorner} ${styles.bottomRight}`}>
            <svg viewBox="0 0 100 100">
              <path d="M0 90 L90 90 L90 0 L100 0 L100 100 L0 100 Z" fill="url(#goldGradient)" />
            </svg>
          </div>

          {/* Envelope Container */}
          <div className={styles.envelopeContainer}>
            <motion.div
              className={styles.envelope3d}
              onClick={handleOpen}
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Envelope Back */}
              <div className={styles.envelopeBack}>
                <div className={styles.paperTexture} />
              </div>

              {/* Invitation Card */}
              <motion.div
                className={styles.invitationCard}
                animate={isOpening ? { y: '-120%' } : { y: 0 }}
                transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
              >
                <div className={styles.cardTexture} />
                <div className={styles.cardGoldBorder} />
                <div className={styles.cardInner}>
                  <div className={styles.cardHeaderOrnament}>
                    <svg viewBox="0 0 200 30" fill="none">
                      <path d="M0 15 Q50 0, 100 15 Q150 30, 200 15" stroke="url(#goldGradient)" strokeWidth="1" fill="none" />
                      <circle cx="100" cy="15" r="5" fill="url(#goldGradient)" />
                    </svg>
                  </div>
                  <p className={styles.cardBismillah}>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
                  <p className={styles.cardInvitationText}>You are cordially invited to celebrate the Nikah of</p>
                  <div className={styles.cardNamesSection}>
                    <h2 className={styles.cardGroom}>Jaseem</h2>
                    <span className={styles.cardAmpersand}>&</span>
                    <h2 className={styles.cardBride}>Haifa</h2>
                  </div>
                  <p className={styles.cardArabicNames}>جاسم و هيفاء</p>
                  <div className={styles.cardDivider}>
                    <span />
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <span />
                  </div>
                  <div className={styles.cardDateSection}>
                    <span className={styles.cardDay}>Saturday</span>
                    <span className={styles.cardFullDate}>January 31, 2026</span>
                    <span className={styles.cardHijri}>2 Rajab 1447 H</span>
                  </div>
                </div>
              </motion.div>

              {/* Envelope Front */}
              <div className={styles.envelopeFront}>
                <div className={styles.paperTexture} />
              </div>

              {/* Envelope Flap */}
              <motion.div
                className={styles.envelopeFlap}
                animate={isOpening ? { rotateX: -180 } : { rotateX: 0 }}
                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              >
                <div className={styles.flapInner}>
                  <div className={styles.paperTexture} />
                </div>
              </motion.div>

              {/* Wax Seal */}
              <motion.div
                className={styles.waxSeal}
                animate={isOpening ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                whileHover={{ scale: 1.1 }}
              >
                <div className={styles.sealDrips}>
                  <span /><span /><span />
                </div>
                <div className={styles.sealBody}>
                  <div className={styles.sealShine} />
                  <div className={styles.sealEmboss}>
                    <span className={styles.sealInitials}>J & H</span>
                  </div>
                </div>
                <div className={styles.sealShadow} />
              </motion.div>

              {/* Particles */}
              <AnimatePresence>
                {particles.map((particle) => (
                  <motion.div
                    key={particle.id}
                    className={styles.particle}
                    initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                    animate={{
                      x: Math.cos(particle.angle) * 80,
                      y: Math.sin(particle.angle) * 80,
                      scale: 0,
                      opacity: 0,
                    }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      backgroundColor: particle.id % 2 === 0 ? '#D4AF37' : '#8B0000',
                    }}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
