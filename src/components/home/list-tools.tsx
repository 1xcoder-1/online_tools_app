'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

import { Input } from '@/components/ui/input'
import { LIST_TOOLS } from '@/lib/constants'
import { Tool } from '@/lib/types'
import { ListCardTools } from './list-card-tools'
import { useRecentTools } from '@/hooks/use-recent-tools'
import { CardToolItem } from './card-tool-item'

export function ListTools() {
  const [value, setValue] = useState('')
  const { recentTools, addRecentTool } = useRecentTools()

  const filterTools = (tool: Tool): boolean =>
    tool.label.toLowerCase().includes(value.toLowerCase()) ||
    tool.keywords.some(keyword =>
      keyword.toLowerCase().includes(value.toLowerCase())
    )

  return (
    <motion.div
      className='will-change-[transform,opacity] space-y-4'
      initial={{
        y: 40,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        duration: 1
      }}
    >
      <div className='flex flex-col items-center w-full space-y-8'>
        <div className="relative w-full max-w-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <Input
            className='pl-12 h-12 text-lg bg-background/50 backdrop-blur-[8px] border-border/50 focus-visible:ring-primary/50 transition-all rounded-full shadow-sm hover:shadow-md'
            placeholder='Search for a tool...'
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </div>

        <div id='get-started' className='my-12 w-full space-y-10 scroll-mt-20'>
          {!value && recentTools.length > 0 && (
            <div className='border rounded-lg bg-background/50 backdrop-blur-[8px] shadow-sm'>
              <div className='p-4 pb-0 font-semibold flex items-center gap-2'>
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                Recently Used
              </div>
              <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4'>
                {recentTools.map(tool => (
                  <div key={tool.label} onClick={() => addRecentTool(tool)}>
                    <CardToolItem tool={tool} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {value
            ? LIST_TOOLS.filter(list =>
              list.tools.some(tool => filterTools(tool))
            ).map(list => {
              const { label, tools } = list
              const filtered = tools.filter(tool => filterTools(tool))

              return (
                <div key={label} onClick={(e) => {
                  // Attempt to find the clicked tool content to add to recent
                  const target = e.target as HTMLElement;
                  const link = target.closest('a');
                  if (link) {
                    const href = link.getAttribute('href');
                    const tool = filtered.find(t => t.link === href);
                    if (tool) addRecentTool(tool);
                  }
                }}>
                  <ListCardTools tools={filtered} title={label} />
                </div>
              )
            })
            : LIST_TOOLS.map(tool => {
              const { label, tools } = tool

              return (
                <div key={label} onClick={(e) => {
                  const target = e.target as HTMLElement;
                  const link = target.closest('a');
                  if (link) {
                    const href = link.getAttribute('href');
                    const selectedTool = tools.find(t => t.link === href);
                    if (selectedTool) addRecentTool(selectedTool);
                  }
                }}>
                  <ListCardTools tools={tools} title={label} />
                </div>
              )
            })}
        </div>
      </div>
    </motion.div>
  )
}
