'use client'

import { motion } from 'framer-motion'
import styles from '@/styles/sections/Dua.module.css'

const glowAnimation = {
  opacity: [0.5, 1, 0.5],
  scale: [1, 1.05, 1],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

const textRevealVariants = {
  hidden: { opacity: 0, y: 20 },
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

export default function DuaSection() {
  return (
    <section className={styles.duaSection} id="dua">
      <motion.div
        className={styles.duaContent}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
      >
        <motion.div
          className={styles.duaIcon}
          animate={floatAnimation}
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <motion.svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            animate={glowAnimation}
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            <path d="M12 6v6l4 2" />
          </motion.svg>
        </motion.div>

        <motion.h2
          className={styles.duaTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, type: 'spring' }}
        >
          Request for Dua
        </motion.h2>

        <motion.p
          className={styles.duaText}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          We humbly request your prayers for our union. May Allah bless this marriage
          with love, mercy, and tranquility, and may He make it a means of bringing
          us closer to Him.
        </motion.p>

        <motion.div
          className={styles.duaArabic}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8, type: 'spring', stiffness: 100 }}
          whileHover={{ scale: 1.03 }}
        >
          رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا
        </motion.div>

        <motion.p
          className={styles.duaTranslation}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          &quot;Our Lord, grant us from among our wives and offspring comfort to our eyes
          and make us an example for the righteous.&quot;
        </motion.p>

        <motion.span
          className={styles.duaReference}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.4 }}
          whileHover={{ scale: 1.05, color: 'var(--text-highlight)' }}
        >
          — Surah Al-Furqan 25:74
        </motion.span>

        {/* Barakallah Dua */}
        <motion.div
          className={styles.divider}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0, duration: 0.6 }}
        />

        <motion.div
          className={styles.duaArabic}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1, duration: 0.8, type: 'spring', stiffness: 100 }}
          whileHover={{ scale: 1.03 }}
        >
          بَارَكَ اللهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
        </motion.div>

        <motion.p
          className={styles.duaTranslation}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          &quot;May Allah bless you both, shower His blessings upon you, and unite you in goodness.&quot;
        </motion.p>

        <motion.span
          className={styles.duaReference}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.4 }}
          whileHover={{ scale: 1.05, color: 'var(--text-highlight)' }}
        >
          — Hadith (Abu Dawud, Tirmidhi)
        </motion.span>
      </motion.div>
    </section>
  )
}
