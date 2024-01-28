import Footer from '@/components/main/Footer'
import Hero from '@/components/main/Hero'
import Library from '@/components/main/Library'
import Techlist from '@/components/main/Techlist'

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col'>
        <Hero />
        <Techlist />
        <Library heading='Recent Work'/>
        <Footer />
      </div>
    </main>
  )
}
