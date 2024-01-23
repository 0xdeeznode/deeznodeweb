import Hero from '@/components/main/Hero'
import Library from '@/components/main/Library'
import Techlist from '@/components/main/Techlist'
import DeTitle from '@/components/sub/DeTitle'

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col'>
        <Hero />
        <Techlist />
        <Library />
      </div>
    </main>
  )
}
