'use client'

import { motion } from 'framer-motion'
import styles from '@/styles/sections/Location.module.css'

export default function LocationSection() {
  return (
    <section className={styles.locationSection} id="location">
      <motion.div
        className={`${styles.sectionHeader} ${styles.light}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className={styles.sectionSubtitle}>Find Us</span>
        <h2>Venue Location</h2>
        <div className={styles.headerLine} />
      </motion.div>

      <div className={styles.locationContainer}>
        <motion.div
          className={styles.locationInfo}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className={styles.venueCard}>
            <div className={styles.venueIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3>Rose Lounge</h3>
            <p className={styles.venueAddress}>
              Nooradi, Tirur Road<br />
              Malappuram, Kerala 676504, India
            </p>
            <div className={styles.venueDetails}>
              <div className={styles.venueDetail}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
                <span>2:00 PM - January 31, 2026</span>
              </div>
              <div className={styles.venueDetail}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+91 9137800800</span>
              </div>
            </div>
            <a href="https://roselounge.com/" target="_blank" rel="noopener noreferrer" className={styles.btnDirections}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="3,11 22,2 13,21 11,13 3,11" />
              </svg>
              <span>Visit Website</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          className={styles.locationMap}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0!2d76.0!3d10.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRose+Lounge+Malappuram!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
