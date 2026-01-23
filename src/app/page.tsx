'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to /tap quickly
    const timer = setTimeout(() => {
      router.push('/tap')
    }, 800)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, var(--pastel-cream) 0%, var(--pastel-pink) 50%, var(--pastel-lavender) 100%)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          textAlign: 'center',
          padding: '40px',
        }}
      >
        {/* Loading Hearts Animation */}
        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '20px',
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              style={{
                fontSize: '2rem',
                color: 'var(--text-highlight)',
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            >
              ♥
            </motion.span>
          ))}
        </motion.div>

        {/* Names */}
        <motion.h1
          style={{
            fontFamily: 'var(--font-script)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            background: 'linear-gradient(135deg, var(--text-highlight) 0%, var(--text-primary) 50%, var(--text-accent) 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          Jaseem & Haifa
        </motion.h1>

        {/* Loading text */}
        <motion.p
          style={{
            marginTop: '15px',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            letterSpacing: '3px',
            textTransform: 'uppercase',
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          Loading invitation...
        </motion.p>
      </motion.div>
    </main>
  )
}
