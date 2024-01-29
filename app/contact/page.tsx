import Contact from '@/components/main/Contact'
import SubFooter from '@/components/sub/SubFooter'

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col'>
        <Contact />
        <SubFooter />
      </div>
    </main>
  )
}
