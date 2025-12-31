'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type Word = {
  text: string
  className: string
}

type FlipWordsProps = {
  words: Word[]
  duration?: number
}

export const FlipWords = ({ words, duration = 2000 }: FlipWordsProps) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, duration)

    return () => clearInterval(interval)
  }, [duration, words.length])

  return (
    <div className='relative inline-grid h-7 sm:h-10 overflow-hidden min-w-[150px] align-top'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={words[index].text}
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className={`absolute left-0 top-0 w-full ${words[index].className}`}
        >
          {words[index].text}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
