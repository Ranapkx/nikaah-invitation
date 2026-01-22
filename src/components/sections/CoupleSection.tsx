'use client'

import { motion } from 'framer-motion'
import styles from '@/styles/sections/Couple.module.css'

export default function CoupleSection() {
  return (
    <section className={styles.coupleSection} id="couple">
      <motion.div
        className={styles.sectionHeader}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className={styles.sectionSubtitle}>With Love</span>
        <h2>The Couple</h2>
        <div className={styles.headerLine} />
      </motion.div>

      <div className={styles.coupleContainer}>
        <motion.div
          className={styles.personCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className={styles.personImage}>
            <div className={styles.imagePlaceholder}>
              <span>J</span>
            </div>
          </div>
          <div className={styles.personInfo}>
            <span className={styles.role}>The Groom</span>
            <h3 className={styles.personName}>Jaseem</h3>
            <p className={styles.arabicName}>جاسم</p>
          </div>
        </motion.div>

        <motion.div
          className={styles.coupleHeart}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className={styles.heartIcon}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </motion.div>

        <motion.div
          className={styles.personCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className={styles.personImage}>
            <div className={styles.imagePlaceholder}>
              <span>H</span>
            </div>
          </div>
          <div className={styles.personInfo}>
            <span className={styles.role}>The Bride</span>
            <h3 className={styles.personName}>Haifa</h3>
            <p className={styles.arabicName}>هيفاء</p>
          </div>
        </motion.div>
      </div>

      <motion.p
        className={styles.invitationMessage}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        The family of the bride cordially invites you<br />
        to celebrate the Nikah ceremony
      </motion.p>
    </section>
  )
}
