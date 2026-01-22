'use client'

import { motion } from 'framer-motion'
import styles from '@/styles/sections/Hero.module.css'

export default function HeroSection() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroBgOverlay} />
      <div className={styles.heroParticles}>
        {[...Array(8)].map((_, i) => (
          <span key={i} />
        ))}
      </div>

      <div className={styles.heroContent}>
        <motion.div
          className={styles.heroTop}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <p className={styles.bismillah}>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
          <p className={styles.bismillahEnglish}>In the name of Allah, the Most Gracious, the Most Merciful</p>
        </motion.div>

        <motion.div
          className={styles.heroCenter}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p className={styles.weddingLabel}>Nikah Invitation</p>
          <div className={styles.coupleNamesWrapper}>
            <h1 className={styles.groomName}>Jaseem</h1>
            <span className={styles.namesSeparator}>&</span>
            <h1 className={styles.brideName}>Haifa</h1>
          </div>
          <p className={styles.arabicNames}>جاسم و هيفاء</p>
        </motion.div>

        <motion.div
          className={styles.heroBottom}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className={styles.saveTheDate}>
            <span className={styles.stdLabel}>Save the Date</span>
            <div className={styles.stdDate}>
              <span className={styles.stdDay}>31</span>
              <div className={styles.stdMonthYear}>
                <span>January</span>
                <span>2026</span>
              </div>
            </div>
            <span className={styles.stdHijri}>2 Rajab 1447 H</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
