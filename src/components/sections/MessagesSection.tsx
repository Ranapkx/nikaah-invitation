'use client'

import { motion } from 'framer-motion'
import styles from '@/styles/sections/Messages.module.css'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

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

const avatarFloatAnimation = {
  y: [0, -8, 0],
  rotate: [0, 5, 0, -5, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

const heartBeatAnimation = {
  scale: [1, 1.15, 1, 1.1, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

const headerLineAnimation = {
  scaleX: [0, 1],
  opacity: [0, 1],
  transition: {
    duration: 0.8,
    ease: 'easeOut',
  },
}

const signatureAnimation = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.6,
      type: 'spring',
      stiffness: 120,
    },
  },
}

export default function MessagesSection() {
  return (
    <section className={styles.messagesSection} id="messages">
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
          From Our Hearts
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          A Note to Our Guests
        </motion.h2>
        <motion.div
          className={styles.headerLine}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={headerLineAnimation}
          viewport={{ once: true }}
        />
      </motion.div>

      <motion.div
        className={styles.messagesContainer}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <motion.div
          className={`${styles.messageCard} ${styles.groomMessage}`}
          variants={cardVariants}
          whileHover={{
            y: -12,
            scale: 1.02,
            boxShadow: '0 30px 80px rgba(107, 45, 92, 0.22)',
            transition: { type: 'spring', stiffness: 300, damping: 20 },
          }}
        >
          <motion.div
            className={styles.messageAvatar}
            animate={avatarFloatAnimation}
            whileHover={{ scale: 1.1, rotate: 10 }}
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
            >
              J
            </motion.span>
          </motion.div>
          <div className={styles.messageContent}>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              From the Groom
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              "As I embark on this beautiful journey, I am filled with gratitude for your presence in our lives. Your love and support have been a blessing, and I am honored to have you witness this sacred moment. May Allah bless us all."
            </motion.p>
            <motion.span
              className={styles.messageSignature}
              variants={signatureAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              — Jaseem
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          className={styles.messageDivider}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 200, damping: 15 }}
          whileHover={{ scale: 1.3, rotate: 15 }}
        >
          <motion.svg
            viewBox="0 0 24 24"
            fill="currentColor"
            animate={heartBeatAnimation}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </motion.svg>
        </motion.div>

        <motion.div
          className={`${styles.messageCard} ${styles.brideMessage}`}
          variants={cardVariants}
          whileHover={{
            y: -12,
            scale: 1.02,
            boxShadow: '0 30px 80px rgba(107, 45, 92, 0.22)',
            transition: { type: 'spring', stiffness: 300, damping: 20 },
          }}
        >
          <motion.div
            className={styles.messageAvatar}
            animate={{
              ...avatarFloatAnimation,
              rotate: [0, -5, 0, 5, 0],
            }}
            whileHover={{ scale: 1.1, rotate: -10 }}
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
            >
              H
            </motion.span>
          </motion.div>
          <div className={styles.messageContent}>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              From the Bride
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              "Your presence on our special day means the world to me. Thank you for being part of our journey and for showering us with your duas and blessings. I am truly grateful to have such wonderful people in my life."
            </motion.p>
            <motion.span
              className={styles.messageSignature}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.6, type: 'spring', stiffness: 120 }}
            >
              — Haifa
            </motion.span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
