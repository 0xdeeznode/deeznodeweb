import Hero from '@/components/main/Hero'
import Techlist from '@/components/main/Techlist'

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col'>
        <Hero />
        <Techlist />
      </div>
    </main>
  )
}
