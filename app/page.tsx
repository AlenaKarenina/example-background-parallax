'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import Intro from '@/components/Intro/Intro'
import Section from '@/components/Section/Section'

export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <Intro />
      <div className='flex justify-center my-40'>
        <p className='text-[5vw] uppercase text-center leading-none'>
          Lorem ipsum<br/>dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <Section />
      <div className='h-screen'/>
    </main>
  )
}
