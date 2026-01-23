'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '@/styles/MusicToggle.module.css'

const floatAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

const waveVariants = {
  animate: (i: number) => ({
    height: ['6px', '18px', '6px'],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      delay: i * 0.1,
      ease: 'easeInOut',
    },
  }),
}

const noteVariants = {
  initial: { opacity: 0, y: 0, x: 0, scale: 0 },
  animate: (i: number) => ({
    opacity: [0, 1, 0],
    y: [-20, -60],
    x: [0, (i % 2 === 0 ? 1 : -1) * 20],
    scale: [0.5, 1, 0.5],
    rotate: [0, (i % 2 === 0 ? 1 : -1) * 30],
    transition: {
      duration: 2,
      repeat: Infinity,
      delay: i * 0.6,
      ease: 'easeOut',
    },
  }),
}

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio('/music/background.mp3')
    audioRef.current.loop = true
    audioRef.current.volume = 0.3

    // Check if music was started from tap page
    const musicStarted = localStorage.getItem('musicStarted')
    if (musicStarted === 'true') {
      audioRef.current.play().then(() => {
        setIsPlaying(true)
      }).catch(console.error)
    }

    // Show button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => {
      clearTimeout(timer)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const toggleMusic = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      localStorage.setItem('musicStarted', 'false')
    } else {
      audioRef.current.play().catch(console.error)
      localStorage.setItem('musicStarted', 'true')
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className={`${styles.musicToggle} ${isPlaying ? styles.playing : ''}`}
          onClick={toggleMusic}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            ...floatAnimation,
          }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          whileHover={{
            scale: 1.15,
            boxShadow: '0 15px 50px rgba(212, 84, 106, 0.4)',
          }}
          whileTap={{ scale: 0.9 }}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {/* Pulsing ring when playing */}
          <AnimatePresence>
            {isPlaying && (
              <>
                <motion.span
                  className={styles.pulseRing}
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{
                    scale: [1, 1.5, 2],
                    opacity: [0.5, 0.3, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }}
                />
                <motion.span
                  className={styles.pulseRing}
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{
                    scale: [1, 1.5, 2],
                    opacity: [0.5, 0.3, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: 0.5,
                    ease: 'easeOut',
                  }}
                />
              </>
            )}
          </AnimatePresence>

          {/* Floating music notes when playing */}
          <AnimatePresence>
            {isPlaying && (
              <div className={styles.musicNotes}>
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className={styles.musicNote}
                    custom={i}
                    variants={noteVariants}
                    initial="initial"
                    animate="animate"
                  >
                    ♪
                  </motion.span>
                ))}
              </div>
            )}
          </AnimatePresence>

          {/* Play/Pause icon */}
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.div
                key="waves"
                className={styles.musicWaves}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.2 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className={styles.wave}
                    custom={i}
                    variants={waveVariants}
                    animate="animate"
                  />
                ))}
              </motion.div>
            ) : (
              <motion.svg
                key="play"
                viewBox="0 0 24 24"
                fill="currentColor"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.2 }}
              >
                <polygon points="6,4 20,12 6,20" />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
