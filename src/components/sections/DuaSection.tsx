'use client'

import { motion } from 'framer-motion'
import styles from '@/styles/sections/Dua.module.css'

export default function DuaSection() {
  return (
    <section className={styles.duaSection} id="dua">
      <motion.div
        className={styles.duaContent}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className={styles.duaIcon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            <path d="M12 6v6l4 2" />
          </svg>
        </div>
        <h2 className={styles.duaTitle}>Request for Dua</h2>
        <p className={styles.duaText}>
          We humbly request your prayers for our union. May Allah bless this marriage
          with love, mercy, and tranquility, and may He make it a means of bringing
          us closer to Him.
        </p>
        <div className={styles.duaArabic}>
          رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا
        </div>
        <p className={styles.duaTranslation}>
          &quot;Our Lord, grant us from among our wives and offspring comfort to our eyes
          and make us an example for the righteous.&quot;
        </p>
        <span className={styles.duaReference}>— Surah Al-Furqan 25:74</span>
      </motion.div>
    </section>
  )
}
