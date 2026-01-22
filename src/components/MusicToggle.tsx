'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '@/styles/MusicToggle.module.css'

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio('/music/background.mp3')
    audioRef.current.loop = true
    audioRef.current.volume = 0.3

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
    } else {
      audioRef.current.play().catch(console.error)
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className={`${styles.musicToggle} ${isPlaying ? styles.playing : ''}`}
          onClick={toggleMusic}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          )}
          <span className={styles.musicWaves}>
            <span className={styles.wave} />
            <span className={styles.wave} />
            <span className={styles.wave} />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
