'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '@/styles/sections/Countdown.module.css'

const TimeUnit = ({ value, label, delay }: { value: number; label: string; delay: number }) => (
  <motion.div
    className={styles.timeUnit}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ scale: 1.1, y: -5 }}
  >
    <motion.div
      className={styles.timeNumberWrapper}
      animate={{
        boxShadow: [
          '0 10px 35px rgba(107, 45, 92, 0.12)',
          '0 15px 45px rgba(212, 84, 106, 0.2)',
          '0 10px 35px rgba(107, 45, 92, 0.12)',
        ],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          className={styles.timeNumber}
          initial={{ opacity: 0, y: -20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </AnimatePresence>
    </motion.div>
    <span className={styles.timeLabel}>{label}</span>
  </motion.div>
)

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const weddingDate = new Date(2026, 0, 31, 10, 30, 0)

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
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Jaseem & Haifa - Nikaah Ceremony')}&dates=20260131T103000/20260131T130000&location=${encodeURIComponent('Rose Lounge, Nooradi, Tirur Road, Malappuram, Kerala 676504, India')}&details=${encodeURIComponent('Nikaah Ceremony of Jaseem and Haifa.')}`
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
          transition={{ duration: 0.8, type: 'spring' }}
        >
          Counting Down to Our Special Day
        </motion.h2>

        <motion.p
          className={styles.countdownSubtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Join us as we begin our journey together
        </motion.p>

        <div className={styles.countdownTimer}>
          <TimeUnit value={timeLeft.days} label="Days" delay={0.1} />
          <motion.div
            className={styles.timeSeparator}
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            :
          </motion.div>
          <TimeUnit value={timeLeft.hours} label="Hours" delay={0.2} />
          <motion.div
            className={styles.timeSeparator}
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
          >
            :
          </motion.div>
          <TimeUnit value={timeLeft.minutes} label="Minutes" delay={0.3} />
          <motion.div
            className={styles.timeSeparator}
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
          >
            :
          </motion.div>
          <TimeUnit value={timeLeft.seconds} label="Seconds" delay={0.4} />
        </div>

        <motion.button
          className={styles.btnCalendar}
          onClick={addToGoogleCalendar}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05, y: -5, boxShadow: '0 18px 50px rgba(212, 84, 106, 0.5)' }}
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
