'use client'

import { motion } from 'framer-motion'
import styles from '@/styles/sections/Gifts.module.css'

export default function GiftsSection() {
  return (
    <section className={styles.giftsSection} id="gifts">
      <motion.div
        className={styles.sectionHeader}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className={styles.sectionSubtitle}>Blessings</span>
        <h2>Wedding Gifts</h2>
        <div className={styles.headerLine} />
      </motion.div>

      <motion.div
        className={styles.giftsContainer}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <div className={styles.giftsIcon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="20,12 20,22 4,22 4,12" />
            <rect x="2" y="7" width="20" height="5" />
            <line x1="12" y1="22" x2="12" y2="7" />
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
          </svg>
        </div>
        <h3>Your Presence is Our Greatest Gift</h3>
        <p className={styles.giftsMessage}>
          Your love, prayers, and presence at our wedding are the most precious gifts we could receive.
          We are truly blessed to have you celebrate this special day with us.
        </p>

        <div className={styles.giftsNote}>
          <p>However, if you wish to honor us with a gift, we would be grateful for your kind gesture.
          Your duas for a blessed marriage are what we cherish most.</p>
        </div>

        <div className={styles.giftsDua}>
          <p className={styles.duaArabicSmall}>رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ</p>
          <p className={styles.duaTranslation}>"Our Lord, grant us from among our spouses and offspring comfort to our eyes"</p>
        </div>
      </motion.div>
    </section>
  )
}
