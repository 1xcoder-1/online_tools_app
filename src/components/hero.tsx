'use client'

import Link from 'next/link'

import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import { FlipWords } from '@/components/ui/flip-words'

const WORDS = [
  {
    text: 'Convertor',
    className:
      'bg-clip-text text-transparent bg-gradient-to-r from-[#ff1835] to-[#ffc900]'
  },
  {
    text: 'Calculator',
    className:
      'bg-clip-text text-transparent bg-gradient-to-r from-[#0077ff] to-[#00e7df]'
  },
  {
    text: 'Generator',
    className:
      'bg-clip-text text-transparent bg-gradient-to-r from-[#7f00de] to-[#ff007f]'
  },
  {
    text: 'Tester',
    className:
      'bg-clip-text text-transparent bg-gradient-to-r from-[#26b868] to-[#1cb2e0]'
  }
]

export function Hero() {
  return (
    <div className='relative my-12 py-16 md:py-24 space-y-8 flex flex-col items-center text-center z-10'>
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/10 opacity-20 blur-[100px]"></div>
      </div>

      <motion.div
        className='will-change-[transform,opacity] space-y-6 max-w-3xl'
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className='text-4xl md:text-6xl font-extrabold tracking-tight space-y-4'>
          <span className='block text-slate-900'>The Ultimate Collection of</span>
          <FlipWords words={WORDS} className="pb-2" />
        </h1>
        <p className='leading-relaxed text-lg md:text-xl text-muted-foreground tracking-wide max-w-2xl mx-auto'>
          Boost your productivity with our suite of powerful, free, and privacy-focused online tools. Developer friendly, designer approved.
        </p>
        <div className="pt-4 flex justify-center gap-4">
          <Button
            variant='default'
            size='lg'
            className='text-lg font-semibold tracking-wide h-12 px-8 rounded-full shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all'
            asChild
          >
            <Link href='#get-started'>Explore Tools</Link>
          </Button>
          <Button
            variant='outline'
            size='lg'
            className='text-lg font-semibold tracking-wide h-12 px-8 rounded-full hover:bg-muted/50 transition-all'
            asChild
          >
            <Link href='https://github.com/1xcoder-1' target="_blank">GitHub</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
