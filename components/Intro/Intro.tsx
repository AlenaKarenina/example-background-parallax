'use client'

import Image from 'next/image'
import imageMock from '../../public/images/3.jpg'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

export default function Intro() {
  const container = useRef<any>(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh'])

  return (
    <div className='h-screen overflow-hidden'>
      <motion.div
        style={{y}}
        className='relative h-full'
      >
        <Image
          src={imageMock}
          fill
          alt='alt'
          style={{objectFit: 'cover'}}
        />
      </motion.div>
    </div>
  )
}
