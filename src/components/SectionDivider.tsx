'use client'

import { motion } from 'framer-motion'
import styles from '@/styles/SectionDivider.module.css'

interface SectionDividerProps {
  variant?: 'hearts' | 'ornament' | 'wave' | 'stars'
}

export default function SectionDivider({ variant = 'ornament' }: SectionDividerProps) {
  if (variant === 'hearts') {
    return (
      <motion.div
        className={styles.divider}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.span
          className={styles.line}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        <div className={styles.heartsContainer}>
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className={styles.heart}
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 200 }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              whileHover={{ scale: 1.3 }}
            >
              ♥
            </motion.span>
          ))}
        </div>
        <motion.span
          className={styles.line}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>
    )
  }

  if (variant === 'wave') {
    return (
      <motion.div
        className={styles.waveDivider}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <motion.path
            d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="20%" stopColor="var(--text-highlight)" />
              <stop offset="50%" stopColor="var(--gold)" />
              <stop offset="80%" stopColor="var(--text-highlight)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    )
  }

  if (variant === 'stars') {
    return (
      <motion.div
        className={styles.divider}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.span
          className={styles.line}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        <div className={styles.starsContainer}>
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.span
              key={i}
              className={styles.star}
              initial={{ scale: 0, rotate: 0 }}
              whileInView={{ scale: 1, rotate: 180 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.08, type: 'spring', stiffness: 200 }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
            >
              ✦
            </motion.span>
          ))}
        </div>
        <motion.span
          className={styles.line}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>
    )
  }

  // Default ornament
  return (
    <motion.div
      className={styles.ornamentDivider}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: 'spring' }}
    >
      <motion.span
        className={styles.ornamentLine}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        className={styles.ornamentCenter}
        animate={{
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 60 30" fill="none">
          <path
            d="M5 15 Q15 5, 30 15 Q45 25, 55 15"
            stroke="var(--gold)"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="30" cy="15" r="4" fill="var(--text-highlight)" />
          <circle cx="10" cy="15" r="2" fill="var(--gold)" />
          <circle cx="50" cy="15" r="2" fill="var(--gold)" />
        </svg>
      </motion.div>
      <motion.span
        className={styles.ornamentLine}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />
    </motion.div>
  )
}
