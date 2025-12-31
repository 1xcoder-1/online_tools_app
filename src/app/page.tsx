import { ListTools } from '@/components/home/list-tools'
import { Hero } from '@/components/hero'
import { Features } from '@/components/home/features'

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <Features />
      <div className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight text-center md:text-left">Browse Tools</h2>
        <ListTools />
      </div>
    </div>
  )
}
