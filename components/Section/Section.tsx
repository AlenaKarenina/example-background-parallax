'use client'

import Image from 'next/image'
import imageMock from '../../public/images/2.jpg'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

export default function Section() {
  const container = useRef<any>(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <div
      ref={container}
      className='relative flex items-center justify-center h-screen overflow-hidden'
      style={{clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)'}}
    >
      <div className='relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between'>
        <p className='w-[50vw] text-[2vw] self-end uppercase mix-blend-difference'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.</p>
        <p className='text-[5vw] uppercase mix-blend-difference'>Background Parallax</p>
      </div>
      <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
        <motion.div
          style={{y}}
          className='relative w-full h-full'
        >
          <Image
            src={imageMock}
            fill
            alt='alt'
            style={{objectFit: 'cover'}}
          />
        </motion.div>
      </div>
    </div>
  )
}
