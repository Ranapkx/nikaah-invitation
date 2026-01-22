'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from '@/styles/sections/Countdown.module.css'

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const weddingDate = new Date(2026, 0, 31, 14, 0, 0)

    const updateCountdown = () => {
      const now = new Date()
      const diff = weddingDate.getTime() - now.getTime()

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  const addToGoogleCalendar = () => {
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Jaseem & Haifa - Nikah Ceremony')}&dates=20260131T140000/20260131T180000&location=${encodeURIComponent('Rose Lounge, Nooradi, Tirur Road, Malappuram, Kerala 676504, India')}&details=${encodeURIComponent('Nikah Ceremony of Jaseem and Haifa.')}`
    window.open(url, '_blank')
  }

  return (
    <section className={styles.countdownSection} id="countdown">
      <div className={styles.countdownBg} />
      <div className={styles.countdownContent}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Counting Down to Our Special Day
        </motion.h2>

        <motion.p
          className={styles.countdownSubtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Join us as we begin our journey together
        </motion.p>

        <motion.div
          className={styles.countdownTimer}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className={styles.timeUnit}>
            <div className={styles.timeNumberWrapper}>
              <span className={styles.timeNumber}>{String(timeLeft.days).padStart(2, '0')}</span>
            </div>
            <span className={styles.timeLabel}>Days</span>
          </div>
          <div className={styles.timeSeparator}>:</div>
          <div className={styles.timeUnit}>
            <div className={styles.timeNumberWrapper}>
              <span className={styles.timeNumber}>{String(timeLeft.hours).padStart(2, '0')}</span>
            </div>
            <span className={styles.timeLabel}>Hours</span>
          </div>
          <div className={styles.timeSeparator}>:</div>
          <div className={styles.timeUnit}>
            <div className={styles.timeNumberWrapper}>
              <span className={styles.timeNumber}>{String(timeLeft.minutes).padStart(2, '0')}</span>
            </div>
            <span className={styles.timeLabel}>Minutes</span>
          </div>
          <div className={styles.timeSeparator}>:</div>
          <div className={styles.timeUnit}>
            <div className={styles.timeNumberWrapper}>
              <span className={styles.timeNumber}>{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
            <span className={styles.timeLabel}>Seconds</span>
          </div>
        </motion.div>

        <motion.button
          className={styles.btnCalendar}
          onClick={addToGoogleCalendar}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span>Add to Calendar</span>
        </motion.button>
      </div>
    </section>
  )
}
