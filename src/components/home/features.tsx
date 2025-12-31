'use client'

import { Zap, Shield, Smartphone, Globe } from 'lucide-react'

const FEATURES = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for speed to ensure you get your results in milliseconds.'
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'All processing happens in your browser. Your data never leaves your device.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Responsive',
    description: 'Fully responsive design that works perfectly on desktop, tablet, and mobile.'
  },
  {
    icon: Globe,
    title: 'Free & Open',
    description: 'Completely free to use with no hidden fees or subscriptions required.'
  }
]

export function Features() {
  return (
    <div className='py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
      {FEATURES.map((feature, idx) => {
        const Icon = feature.icon
        return (
          <div
            key={idx}
            className='flex flex-col items-center text-center p-6 bg-card border border-border/50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300'
          >
            <div className='p-3 bg-primary/10 rounded-full mb-4'>
              <Icon className='w-8 h-8 text-primary' />
            </div>
            <h3 className='text-lg font-semibold mb-2'>{feature.title}</h3>
            <p className='text-muted-foreground text-sm leading-relaxed'>{feature.description}</p>
          </div>
        )
      })}
    </div>
  )
}
