'use client'

import { motion } from 'framer-motion'
import styles from '@/styles/sections/Hero.module.css'

const particlePositions = [
  { left: '10%', top: '20%', delay: 0 },
  { left: '20%', top: '80%', delay: 2 },
  { left: '30%', top: '40%', delay: 4 },
  { left: '50%', top: '10%', delay: 6 },
  { left: '70%', top: '60%', delay: 8 },
  { left: '80%', top: '30%', delay: 10 },
  { left: '90%', top: '70%', delay: 12 },
  { left: '60%', top: '90%', delay: 14 },
]

export default function HeroSection() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroBgOverlay} />
      <div className={styles.heroParticles}>
        {particlePositions.map((pos, i) => (
          <motion.span
            key={i}
            style={{ left: pos.left, top: pos.top }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15,
              delay: pos.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className={styles.heroContent}>
        <motion.div
          className={styles.heroTop}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <motion.p
            className={styles.bismillah}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </motion.p>
          <motion.p
            className={styles.bismillahEnglish}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            In the name of Allah, the Most Gracious, the Most Merciful
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.heroCenter}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, type: 'spring', stiffness: 100 }}
        >
          <motion.p
            className={styles.weddingLabel}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Nikaah Invitation
          </motion.p>
          <div className={styles.coupleNamesWrapper}>
            <motion.h1
              className={styles.groomName}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8, type: 'spring', stiffness: 80 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {'\u00A0'}Jaseem
            </motion.h1>
            <motion.span
              className={styles.namesSeparator}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.3, rotate: 10 }}
            >
              &
            </motion.span>
            <motion.h1
              className={styles.brideName}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8, type: 'spring', stiffness: 80 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              Haifa
            </motion.h1>
          </div>
          <motion.p
            className={styles.arabicNames}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            جاسم و هيفاء
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.heroBottom}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <motion.div
            className={styles.saveTheDate}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <span className={styles.stdLabel}>Save the Date</span>
            <div className={styles.stdDate}>
              <motion.span
                className={styles.stdDay}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.6, type: 'spring', stiffness: 150 }}
              >
                31
              </motion.span>
              <div className={styles.stdMonthYear}>
                <span>January</span>
                <span>2026</span>
              </div>
            </div>
            <span className={styles.stdHijri}>2 Rajab 1447 H</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
