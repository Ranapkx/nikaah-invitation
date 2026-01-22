'use client'

import { motion } from 'framer-motion'
import styles from '@/styles/sections/Event.module.css'

export default function EventSection() {
  return (
    <section className={styles.eventSection} id="events">
      <motion.div
        className={`${styles.sectionHeader} ${styles.light}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className={styles.sectionSubtitle}>Join Us</span>
        <h2>Wedding Events</h2>
        <div className={styles.headerLine} />
      </motion.div>

      <div className={styles.eventsGrid}>
        <motion.div
          className={styles.eventCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className={styles.eventHeader}>
            <div className={styles.eventIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3>Nikah Ceremony</h3>
            <p className={styles.eventArabic}>عقد النكاح</p>
          </div>

          <div className={styles.eventDetails}>
            <div className={styles.detailItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <div>
                <strong>Saturday, January 31, 2026</strong>
                <span>2 Rajab 1447 H</span>
              </div>
            </div>

            <div className={styles.detailItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
              <div>
                <strong>2:00 PM</strong>
                <span>After Jummah Prayer</span>
              </div>
            </div>

            <div className={styles.detailItem}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <strong>Rose Lounge</strong>
                <span>Nooradi, Tirur Road, Malappuram</span>
              </div>
            </div>
          </div>

          <a href="https://roselounge.com/" target="_blank" rel="noopener noreferrer" className={styles.btnEvent}>
            <span>View Location</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12,5 19,12 12,19" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
