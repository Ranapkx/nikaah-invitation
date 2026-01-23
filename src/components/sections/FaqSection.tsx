'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '@/styles/sections/Faq.module.css'

const faqs = [
  {
    question: 'What is the dress code?',
    answer: 'We request pastel shade dresses for the occasion. Please wear elegant attire in soft pastel colors like blush pink, lavender, mint, peach, or light blue.',
  },
  {
    question: 'Is there parking available?',
    answer: 'Yes, complimentary parking is available at the venue. There will be attendants to guide you to the designated parking areas.',
  },
  {
    question: 'Will there be refreshments?',
    answer: 'Yes, light refreshments and traditional sweets will be served after the Nikaah ceremony. We look forward to sharing this joyful moment with you.',
  },
  {
    question: 'How can I contact the family?',
    answer: 'For any questions, please reach out to the bride\'s family or contact Rose Lounge at +91 9137800800. You can also use the WhatsApp share button at the bottom of this page.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
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

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className={styles.faqSection} id="faq">
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
          Questions
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Frequently Asked
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
        className={styles.faqContainer}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
            variants={itemVariants}
            whileHover={{
              y: -3,
              boxShadow: '0 15px 40px rgba(107, 45, 92, 0.12)',
              transition: { type: 'spring', stiffness: 300, damping: 20 },
            }}
            layout
          >
            <motion.div
              className={styles.faqQuestion}
              onClick={() => toggleFaq(index)}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className={styles.faqIcon}
                animate={{
                  rotate: activeIndex === index ? 360 : 0,
                  scale: activeIndex === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.3, type: 'spring' }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </motion.span>
              <h3>{faq.question}</h3>
              <motion.span
                className={styles.faqToggle}
                animate={{
                  rotate: activeIndex === index ? 180 : 0,
                  scale: activeIndex === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6,9 12,15 18,9" />
                </svg>
              </motion.span>
            </motion.div>
            <AnimatePresence mode="wait">
              {activeIndex === index && (
                <motion.div
                  className={styles.faqAnswerWrapper}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: 'auto',
                    opacity: 1,
                    transition: {
                      height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                      opacity: { duration: 0.25, delay: 0.15 },
                    },
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { duration: 0.3 },
                      opacity: { duration: 0.15 },
                    },
                  }}
                >
                  <motion.p
                    className={styles.faqAnswer}
                    initial={{ y: -10 }}
                    animate={{ y: 0 }}
                    exit={{ y: -10 }}
                    transition={{ duration: 0.3, type: 'spring', stiffness: 100 }}
                  >
                    {faq.answer}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
