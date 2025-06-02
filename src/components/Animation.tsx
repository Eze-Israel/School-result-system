'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const slides = [
  {
    image: '/images/Slide1.png',
    title: 'Welcome to Next Result System',
    subtitle: 'Bringing Digital Results to your Door step',
  },
  {
    image: '/images/Slide2.png',
    title: 'Connect and Access Your Results any where in the world',
    subtitle: 'Using Next Result System',
  },
  {
    image: '/images/Slide3.png',
    title: 'Access and Download your Results Directly from the Dashboard',
    subtitle: 'Tracking and Calculating Students Performace',
  },
  {
    image: '/images/Slide4.png',
    title: 'Monitor your Childs performance from the comfort of your Home',
    subtitle: 'Parents are Recommended to Use Next Result System',
  },
]

export default function AnimatedCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[500px] overflow-hidden  shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <img
            src={slides[index].image}
            alt={`Slide ${index}`}
            className="object-cover w-full h-full bg-black"
          />

          {/* Overlay Text Container */}
          <div className="absolute bottom-16 left-8 bg-black/60 p-6 rounded-xl max-w-xl text-white space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.3 }}
              className="md:text-3xl font-bold"
            >
              {slides[index].title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.5 }}
              className="md:text-lg"
            >
              {slides[index].subtitle}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
