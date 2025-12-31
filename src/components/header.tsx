'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SiGithub } from '@icons-pack/react-simple-icons'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { Logo } from '@/components/logo'
import { ModeToggle } from '@/components/mode-toggle'
import { LIST_TOOLS } from '@/lib/constants'

function HeaderBreadcrumb() {
  const pathname = usePathname()

  let currentTool = null
  let currentCategory = null

  for (const category of LIST_TOOLS) {
    const tool = category.tools.find((t) => t.link === pathname)
    if (tool) {
      currentTool = tool
      currentCategory = category
      break
    }
  }

  if (!currentTool || !currentCategory) return null

  const Icon = currentTool.icon

  return (
    <div className='hidden md:flex items-center gap-2 ml-6 px-3 py-1.5 rounded-full bg-muted/40 border border-border/40 animate-in fade-in slide-in-from-left-4 duration-500'>
      <Icon className='w-4 h-4' style={{ color: currentTool.color }} />
      <span className='text-sm font-medium'>{currentTool.label}</span>
      <div className='h-4 w-px bg-border mx-1' />
      <div className='flex items-center gap-1.5'>
        <div
          className='w-2 h-2 rounded-full opacity-70'
          style={{ backgroundColor: currentTool.color }}
        />
        <span className='text-xs text-muted-foreground'>
          {currentCategory.label}
        </span>
      </div>
    </div>
  )
}

export function Header() {
  return (
    <header
      className='fixed inset-x-0 top-0 z-40 bg-background/20 backdrop-blur-[10px] shadow-sm saturate-100'
      style={{
        WebkitBackdropFilter: 'blur(10px)'
      }}
    >
      <div className='mx-auto max-w-6xl flex items-center justify-between px-4 md:px-8 h-14'>
        <div className='flex items-center'>
          <Link href='/' aria-label='Home' title='Home'>
            <Logo />
          </Link>
          <HeaderBreadcrumb />
        </div>

        <div className='flex items-center gap-3'>
          <ModeToggle />

          <Tooltip>
            <TooltipTrigger>
              <Link
                href='https://github.com/1xcoder-1'
                target='_blank'
                rel='noreferrer noopener'
                aria-label='GitHub'
              >
                <SiGithub />
              </Link>
            </TooltipTrigger>
            <TooltipContent sideOffset={10}>
              <p>@1xcoder</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </header>
  )
}
