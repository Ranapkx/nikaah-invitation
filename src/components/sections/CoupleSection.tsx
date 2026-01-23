'use client'

import { motion } from 'framer-motion'
import styles from '@/styles/sections/Couple.module.css'

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
}

const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

export default function CoupleSection() {
  return (
    <section className={styles.coupleSection} id="couple">
      <motion.div
        className={`${styles.sectionHeader} ${styles.light}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.span
          className={styles.sectionSubtitle}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          With Love
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: 'spring' }}
        >
          The Couple
        </motion.h2>
        <motion.div
          className={styles.headerLine}
          initial={{ width: 0 }}
          whileInView={{ width: 100 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </motion.div>

      <div className={styles.coupleContainer}>
        <motion.div
          className={styles.personCard}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -10, boxShadow: '0 25px 60px rgba(107, 45, 92, 0.2)' }}
        >
          <div className={styles.personImage}>
            <motion.div
              className={styles.imagePlaceholder}
              animate={floatAnimation}
              whileHover={{ scale: 1.05 }}
            >
              <span>J</span>
            </motion.div>
          </div>
          <div className={styles.personInfo}>
            <motion.span
              className={styles.role}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              The Groom
            </motion.span>
            <motion.h3
              className={styles.personName}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring' }}
            >
              Jaseem
            </motion.h3>
            <motion.p
              className={styles.arabicName}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              جاسم
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className={styles.coupleHeart}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
        >
          <motion.div
            className={styles.heartIcon}
            animate={{
              scale: [1, 1.15, 1, 1.1, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileHover={{ scale: 1.3 }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.personCard}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ y: -10, boxShadow: '0 25px 60px rgba(107, 45, 92, 0.2)' }}
        >
          <div className={styles.personImage}>
            <motion.div
              className={styles.imagePlaceholder}
              animate={floatAnimation}
              whileHover={{ scale: 1.05 }}
            >
              <span>H</span>
            </motion.div>
          </div>
          <div className={styles.personInfo}>
            <motion.span
              className={styles.role}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              The Bride
            </motion.span>
            <motion.h3
              className={styles.personName}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring' }}
            >
              Haifa
            </motion.h3>
            <motion.p
              className={styles.arabicName}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              هيفاء
            </motion.p>
          </div>
        </motion.div>
      </div>

      <motion.p
        className={styles.invitationMessage}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        The family of the bride cordially invites you<br />
        to celebrate the Nikaah ceremony
      </motion.p>
    </section>
  )
}
