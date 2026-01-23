'use client'

import { motion } from 'framer-motion'
import styles from '@/styles/sections/Verse.module.css'

const starAnimation = {
  rotate: [0, 360],
  scale: [1, 1.1, 1],
  transition: {
    rotate: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
    },
    scale: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

const glowPulse = {
  opacity: [0.6, 1, 0.6],
  filter: [
    'drop-shadow(0 0 10px rgba(212, 84, 106, 0.3))',
    'drop-shadow(0 0 20px rgba(212, 84, 106, 0.5))',
    'drop-shadow(0 0 10px rgba(212, 84, 106, 0.3))',
  ],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
    },
  },
}

export default function VerseSection() {
  return (
    <section className={styles.verseSection} id="verse">
      <motion.div
        className={styles.verseContainer}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: 'spring' }}
      >
        <motion.div
          className={styles.verseIcon}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          whileHover={{ scale: 1.2, rotate: 180 }}
        >
          <motion.svg
            viewBox="0 0 24 24"
            fill="currentColor"
            animate={starAnimation}
          >
            <motion.path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              animate={glowPulse}
            />
          </motion.svg>
        </motion.div>

        <motion.p
          className={styles.verseArabic}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
          whileHover={{ scale: 1.02 }}
        >
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
        </motion.p>

        <motion.p
          className={styles.verseEnglish}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
        >
          "And among His signs is that He created for you spouses from among yourselves, that you may find tranquility in them, and He placed between you affection and mercy."
        </motion.p>

        <motion.p
          className={styles.verseReference}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ scale: 1.05, color: 'var(--text-highlight)' }}
        >
          — Surah Ar-Rum, 30:21
        </motion.p>
      </motion.div>
    </section>
  )
}
