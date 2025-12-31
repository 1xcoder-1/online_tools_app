'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type Word = {
  text: string
  className: string
}

import { cn } from '@/lib/utils'

type FlipWordsProps = {
  words: Word[]
  duration?: number
  className?: string
}

export const FlipWords = ({ words, duration = 2000, className }: FlipWordsProps) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, duration)

    return () => clearInterval(interval)
  }, [duration, words.length])

  // Find longest word for sizing
  const longestWord = words.reduce((a, b) => a.text.length > b.text.length ? a : b, words[0]);

  return (
    <div className={cn('relative inline-grid overflow-hidden align-top justify-items-center', className)}>
      {/* Invisible copy of the longest word to set container size */}
      <div className={cn("invisible opacity-0 px-2 select-none", longestWord.className)}>
        {longestWord.text}
      </div>

      <AnimatePresence mode='wait'>
        <motion.div
          key={words[index].text}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className={cn(`absolute left-0 top-0 w-full text-center whitespace-nowrap`, words[index].className)}
        >
          {words[index].text}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
