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
      className='group relative flex flex-col items-center justify-center bg-card p-6 rounded-lg border border-border transition-all duration-200 hover:border-primary/50 hover:shadow-sm'
    >
      <div className='p-3 rounded-full bg-secondary/50 group-hover:bg-primary/10 transition-colors'>
        <Icon
          size={24}
          className='text-foreground group-hover:text-primary transition-colors'
        />
      </div>
      <p className='font-medium mt-4 text-sm text-foreground'>
        {tool.label}
      </p>
    </Link>
  )
}
