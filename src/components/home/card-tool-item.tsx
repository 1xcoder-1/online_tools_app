'use client'

import Link from 'next/link'

import { Tool } from '@/lib/types'

type CardToolItemProps = {
  tool: Tool
}

export function CardToolItem({ tool }: CardToolItemProps) {
  const Icon = tool.icon

  return (
    <Link
      href={tool.link}
      className='group relative flex flex-col items-center justify-center bg-background p-4 rounded-xl border border-border/50 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex-shrink-0'
    >
      <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
      <Icon
        color={tool.color}
        size={32}
        className='group-hover:scale-110 transition-transform duration-300'
      />
      <p className='font-medium mt-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300'>
        {tool.label}
      </p>
    </Link>
  )
}
