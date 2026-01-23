'use client'

import { motion } from 'framer-motion'
import styles from '@/styles/sections/Location.module.css'

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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
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

const iconPulseAnimation = {
  scale: [1, 1.1, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

const pinBounceAnimation = {
  y: [0, -5, 0],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

export default function LocationSection() {
  return (
    <section className={styles.locationSection} id="location">
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
          Find Us
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Venue Location
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
        className={styles.locationContainer}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <motion.div
          className={styles.locationInfo}
          variants={itemVariants}
        >
          <motion.div
            className={styles.venueCard}
            whileHover={{
              y: -10,
              boxShadow: '0 30px 80px rgba(107, 45, 92, 0.2)',
              transition: { type: 'spring', stiffness: 300 },
            }}
          >
            <motion.div
              className={styles.venueIcon}
              animate={pinBounceAnimation}
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Rose Lounge
            </motion.h3>
            <motion.p
              className={styles.venueAddress}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Nooradi, Tirur Road<br />
              Malappuram, Kerala 676504, India
            </motion.p>
            <div className={styles.venueDetails}>
              <motion.div
                className={styles.venueDetail}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: 'spring' }}
                whileHover={{ x: 5 }}
              >
                <motion.svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  animate={iconPulseAnimation}
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </motion.svg>
                <span>10:30 AM - 1:00 PM, January 31, 2026</span>
              </motion.div>
              <motion.div
                className={styles.venueDetail}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, type: 'spring' }}
                whileHover={{ x: 5 }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+91 9137800800</span>
              </motion.div>
            </div>
            <motion.a
              href="https://roselounge.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnDirections}
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
              <motion.svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                animate={{ rotate: [0, 15, 0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <polygon points="3,11 22,2 13,21 11,13 3,11" />
              </motion.svg>
              <span>Visit Website</span>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.locationMap}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <motion.div
            className={styles.mapWrapper}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0!2d76.0!3d10.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRose+Lounge+Malappuram!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
