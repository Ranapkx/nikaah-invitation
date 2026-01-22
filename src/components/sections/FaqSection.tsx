'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '@/styles/sections/Faq.module.css'

const faqs = [
  {
    question: 'What is the dress code?',
    answer: 'We request traditional or formal attire. Men may wear a thobe or formal suit, and women are encouraged to wear elegant modest attire such as an abaya or formal dress in soft colors.',
  },
  {
    question: 'Is there parking available?',
    answer: 'Yes, complimentary parking is available at the venue. There will be attendants to guide you to the designated parking areas.',
  },
  {
    question: 'Can I bring children?',
    answer: 'Children are welcome to attend the ceremony. We kindly ask parents to supervise their little ones during the formal proceedings.',
  },
  {
    question: 'Will there be refreshments?',
    answer: 'Yes, light refreshments and traditional sweets will be served after the Nikah ceremony. We look forward to sharing this joyful moment with you.',
  },
  {
    question: 'How can I contact the family?',
    answer: 'For any questions, please reach out to the bride\'s family or contact Rose Lounge at +91 9137800800. You can also use the WhatsApp share button at the bottom of this page.',
  },
]

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className={styles.faqSection} id="faq">
      <motion.div
        className={`${styles.sectionHeader} ${styles.light}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className={styles.sectionSubtitle}>Questions</span>
        <h2>Frequently Asked</h2>
        <div className={styles.headerLine} />
      </motion.div>

      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <div className={styles.faqQuestion} onClick={() => toggleFaq(index)}>
              <span className={styles.faqIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </span>
              <h3>{faq.question}</h3>
              <span className={styles.faqToggle}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6,9 12,15 18,9" />
                </svg>
              </span>
            </div>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className={styles.faqAnswerWrapper}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
