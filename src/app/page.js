import Image from 'next/image'
import LandingPage from '@/components/LandingPage'
import Navbar from '@/components/Navbar'
import Gallery from '@/components/Gallery'
import ActionSteps from '@/components/ActionSteps'
import Test from '@/components/Test'


export default function Home() {
  return (
    <>
    <Navbar />
    <main className='bg-gradient-to-r from-violet-400 to-fuchsia-500'>
      <LandingPage />
      <Gallery />
      <ActionSteps />
      {/* <Test /> */}
    </main>
    
    </>
  )
}
