'use client'

import { useState, useEffect } from 'react'
import { Tool } from '@/lib/types'

const RECENT_TOOLS_KEY = 'recent-tools'
const MAX_RECENT_TOOLS = 4

export function useRecentTools() {
    const [recentTools, setRecentTools] = useState<Tool[]>([])

    useEffect(() => {
        const stored = localStorage.getItem(RECENT_TOOLS_KEY)
        if (stored) {
            try {
                setRecentTools(JSON.parse(stored))
            } catch (e) {
                console.error('Failed to parse recent tools', e)
            }
        }
    }, [])

    const addRecentTool = (tool: Tool) => {
        setRecentTools(prev => {
            // Remove duplicates
            const filtered = prev.filter(t => t.link !== tool.link)
            // Add to front
            const newTools = [tool, ...filtered].slice(0, MAX_RECENT_TOOLS)

            localStorage.setItem(RECENT_TOOLS_KEY, JSON.stringify(newTools))
            return newTools
        })
    }

    return { recentTools, addRecentTool }
}
