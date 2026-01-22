'use client'

import { motion } from 'framer-motion'
import styles from '@/styles/sections/Verse.module.css'

export default function VerseSection() {
  return (
    <section className={styles.verseSection} id="verse">
      <div className={styles.verseContainer}>
        <motion.div
          className={styles.verseIcon}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </motion.div>

        <motion.p
          className={styles.verseArabic}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
        </motion.p>

        <motion.p
          className={styles.verseEnglish}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          "And among His signs is that He created for you spouses from among yourselves, that you may find tranquility in them, and He placed between you affection and mercy."
        </motion.p>

        <motion.p
          className={styles.verseReference}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          — Surah Ar-Rum, 30:21
        </motion.p>
      </div>
    </section>
  )
}
