'use client'

import { motion } from 'framer-motion'
import styles from '@/styles/sections/Messages.module.css'

export default function MessagesSection() {
  return (
    <section className={styles.messagesSection} id="messages">
      <motion.div
        className={styles.sectionHeader}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className={styles.sectionSubtitle}>From Our Hearts</span>
        <h2>A Note to Our Guests</h2>
        <div className={styles.headerLine} />
      </motion.div>

      <div className={styles.messagesContainer}>
        <motion.div
          className={`${styles.messageCard} ${styles.groomMessage}`}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className={styles.messageAvatar}>
            <span>J</span>
          </div>
          <div className={styles.messageContent}>
            <h3>From the Groom</h3>
            <p>"As I embark on this beautiful journey, I am filled with gratitude for your presence in our lives. Your love and support have been a blessing, and I am honored to have you witness this sacred moment. May Allah bless us all."</p>
            <span className={styles.messageSignature}>— Jaseem</span>
          </div>
        </motion.div>

        <motion.div
          className={styles.messageDivider}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>

        <motion.div
          className={`${styles.messageCard} ${styles.brideMessage}`}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className={styles.messageAvatar}>
            <span>H</span>
          </div>
          <div className={styles.messageContent}>
            <h3>From the Bride</h3>
            <p>"Your presence on our special day means the world to me. Thank you for being part of our journey and for showering us with your duas and blessings. I am truly grateful to have such wonderful people in my life."</p>
            <span className={styles.messageSignature}>— Haifa</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
