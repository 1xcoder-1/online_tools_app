'use client'

import { useState } from 'react'
import { CopyIcon, RefreshCwIcon } from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Textarea } from '@/components/ui/text-area'

const LOREM_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui doloremque eum fugiat quo voluptas nulla pariatur?`

const generateText = (count: number) => {
  const textArray = LOREM_TEXT.split('\n')
  let result = ''
  for (let i = 0; i < count; i++) {
    result += textArray[i % textArray.length] + '\n\n'
  }
  return result.trim()
}

export function FormLoremIpsumGenerator() {
  const [paragraphs, setParagraphs] = useState(3)
  const [generatedText, setGeneratedText] = useState(generateText(3))

  const handleGenerate = () => {
    setGeneratedText(generateText(paragraphs))
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText)
    toast.success('Copied to clipboard')
  }

  return (
    <div className='grid gap-6 md:grid-cols-2 w-full max-w-4xl'>
      <Card>
        <CardHeader>
          <CardTitle>Configuration</CardTitle>
          <CardDescription>
            Customize your Lorem Ipsum text.
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='space-y-2'>
            <div className='flex justify-between'>
              <Label htmlFor='paragraphs'>Paragraphs</Label>
              <span className='text-sm text-muted-foreground'>{paragraphs}</span>
            </div>
            <Slider
              id='paragraphs'
              min={1}
              max={20}
              step={1}
              value={[paragraphs]}
              onValueChange={val => {
                setParagraphs(val[0])
              }}
            />
          </div>

          <Button onClick={handleGenerate} className='w-full'>
            <RefreshCwIcon className='mr-2 h-4 w-4' />
            Generate
          </Button>
        </CardContent>
      </Card>

      <Card className='h-full'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle>Result</CardTitle>
          <Button variant='ghost' size='icon' onClick={handleCopy}>
            <CopyIcon className='h-4 w-4' />
          </Button>
        </CardHeader>
        <CardContent>
          <Textarea
            readOnly
            value={generatedText}
            className='min-h-[300px] resize-none font-mono text-sm'
          />
        </CardContent>
      </Card>
    </div>
  )
}
