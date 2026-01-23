'use client'

import { motion } from 'framer-motion'
import styles from '@/styles/sections/Gifts.module.css'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
}

const giftIconAnimation = {
  y: [0, -10, 0],
  rotate: [0, 5, 0, -5, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

const sparkleAnimation = {
  scale: [1, 1.2, 1],
  opacity: [0.5, 1, 0.5],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

export default function GiftsSection() {
  return (
    <section className={styles.giftsSection} id="gifts">
      <motion.div
        className={styles.sectionHeader}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
      >
        <motion.span
          className={styles.sectionSubtitle}
          initial={{ opacity: 0, letterSpacing: '0px' }}
          whileInView={{ opacity: 1, letterSpacing: '4px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Blessings
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Wedding Gifts
        </motion.h2>
        <motion.div
          className={styles.headerLine}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </motion.div>

      <motion.div
        className={styles.giftsContainer}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        whileHover={{
          y: -5,
          boxShadow: '0 30px 80px rgba(107, 45, 92, 0.15)',
          transition: { type: 'spring', stiffness: 200 },
        }}
      >
        <motion.div
          className={styles.giftsIcon}
          animate={giftIconAnimation}
          whileHover={{ scale: 1.2, rotate: 10 }}
        >
          <motion.svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            animate={sparkleAnimation}
          >
            <polyline points="20,12 20,22 4,22 4,12" />
            <rect x="2" y="7" width="20" height="5" />
            <line x1="12" y1="22" x2="12" y2="7" />
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
          </motion.svg>
        </motion.div>

        <motion.h3
          variants={itemVariants}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: 'spring' }}
        >
          Your Presence is Our Greatest Gift
        </motion.h3>

        <motion.p
          className={styles.giftsMessage}
          variants={itemVariants}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Your love, prayers, and presence at our wedding are the most precious gifts we could receive.
          We are truly blessed to have you celebrate this special day with us.
        </motion.p>

        <motion.div
          className={styles.giftsNote}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
          whileHover={{ scale: 1.02 }}
        >
          <p>However, if you wish to honor us with a gift, we would be grateful for your kind gesture.
          Your duas for a blessed marriage are what we cherish most.</p>
        </motion.div>

        <motion.div
          className={styles.giftsDua}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, type: 'spring', stiffness: 80 }}
        >
          <motion.p
            className={styles.duaArabicSmall}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ
          </motion.p>
          <motion.p
            className={styles.duaTranslation}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            "Our Lord, grant us from among our spouses and offspring comfort to our eyes"
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}
