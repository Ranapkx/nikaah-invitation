'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from '@/styles/FloatingDecorations.module.css'

interface Heart {
  id: number
  left: string
  delay: number
  duration: number
  size: number
}

interface Petal {
  id: number
  left: string
  delay: number
  duration: number
  size: number
  rotate: number
}

interface Sparkle {
  id: number
  left: string
  top: string
  delay: number
  duration: number
  size: number
}

export default function FloatingDecorations() {
  const [hearts, setHearts] = useState<Heart[]>([])
  const [petals, setPetals] = useState<Petal[]>([])
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Generate random values only on client side
    setHearts(
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 8,
        duration: 18 + Math.random() * 8,
        size: 10 + Math.random() * 12,
      }))
    )

    setPetals(
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 12,
        duration: 22 + Math.random() * 8,
        size: 15 + Math.random() * 18,
        rotate: Math.random() * 360,
      }))
    )

    setSparkles(
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 4,
        duration: 2.5 + Math.random() * 2.5,
        size: 4 + Math.random() * 6,
      }))
    )

    setIsClient(true)
  }, [])

  // Don't render anything until client-side
  if (!isClient) {
    return <div className={styles.decorationsContainer} />
  }

  return (
    <div className={styles.decorationsContainer}>
      {/* Floating Hearts */}
      <div className={styles.heartsLayer}>
        {hearts.map((heart) => (
          <motion.div
            key={`heart-${heart.id}`}
            className={styles.floatingHeart}
            style={{
              left: heart.left,
              fontSize: heart.size,
            }}
            initial={{ y: '110vh', opacity: 0, rotate: 0 }}
            animate={{
              y: '-10vh',
              opacity: [0, 0.6, 0.6, 0],
              rotate: [0, 15, -15, 0],
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
      </div>

      {/* Floating Petals */}
      <div className={styles.petalsLayer}>
        {petals.map((petal) => (
          <motion.div
            key={`petal-${petal.id}`}
            className={styles.floatingPetal}
            style={{
              left: petal.left,
              width: petal.size,
              height: petal.size,
            }}
            initial={{ y: '-10vh', opacity: 0, rotate: petal.rotate, x: 0 }}
            animate={{
              y: '110vh',
              opacity: [0, 0.7, 0.7, 0],
              rotate: [petal.rotate, petal.rotate + 180, petal.rotate + 360],
              x: [0, 50, -50, 0],
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

      {/* Twinkling Sparkles */}
      <div className={styles.sparklesLayer}>
        {sparkles.map((sparkle) => (
          <motion.div
            key={`sparkle-${sparkle.id}`}
            className={styles.sparkle}
            style={{
              left: sparkle.left,
              top: sparkle.top,
              width: sparkle.size,
              height: sparkle.size,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: sparkle.duration,
              delay: sparkle.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  )
}
