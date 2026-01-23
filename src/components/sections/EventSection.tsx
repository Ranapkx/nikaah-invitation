'use client'

import { motion } from 'framer-motion'
import styles from '@/styles/sections/Event.module.css'

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

const iconFloat = {
  y: [0, -5, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

const detailItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
}

export default function EventSection() {
  return (
    <section className={styles.eventSection} id="events">
      <motion.div
        className={`${styles.sectionHeader} ${styles.light}`}
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
          Join Us
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Wedding Events
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
        className={styles.eventsGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <motion.div
          className={styles.eventCard}
          variants={cardVariants}
          whileHover={{
            y: -15,
            boxShadow: '0 30px 80px rgba(107, 45, 92, 0.2)',
            transition: { type: 'spring', stiffness: 300, damping: 20 },
          }}
        >
          <div className={styles.eventHeader}>
            <motion.div
              className={styles.eventIcon}
              animate={iconFloat}
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Nikaah Ceremony
            </motion.h3>
            <motion.p
              className={styles.eventArabic}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              عقد النكاح
            </motion.p>
          </div>

          <motion.div
            className={styles.eventDetails}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className={styles.detailItem}
              variants={detailItemVariants}
              whileHover={{ x: 5, backgroundColor: 'rgba(212, 84, 106, 0.05)' }}
            >
              <motion.svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                whileHover={{ scale: 1.1 }}
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </motion.svg>
              <div>
                <strong>Saturday, January 31, 2026</strong>
                <span>2 Rajab 1447 H</span>
              </div>
            </motion.div>

            <motion.div
              className={styles.detailItem}
              variants={detailItemVariants}
              whileHover={{ x: 5, backgroundColor: 'rgba(212, 84, 106, 0.05)' }}
            >
              <motion.svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </motion.svg>
              <div>
                <strong>10:30 AM - 1:00 PM</strong>
                <span>Morning Ceremony</span>
              </div>
            </motion.div>

            <motion.div
              className={styles.detailItem}
              variants={detailItemVariants}
              whileHover={{ x: 5, backgroundColor: 'rgba(212, 84, 106, 0.05)' }}
            >
              <motion.svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </motion.svg>
              <div>
                <strong>Rose Lounge</strong>
                <span>Nooradi, Tirur Road, Malappuram</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.a
            href="https://roselounge.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnEvent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, type: 'spring', stiffness: 120 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 30px rgba(212, 84, 106, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Location</span>
            <motion.svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12,5 19,12 12,19" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
