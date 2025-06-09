'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

const slides = [
  {
    image: '/images/Slide1.png',
    title:
      'Welcome to Next Result System we digital result system to your doorstep',
    subtitle: 'The digital and mobile result system',
  },
  {
    image: '/images/Slide2.png',
    title:
      'Connect and Access Your Results any where in the world from your Desktop, Phone or Tablet',
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

export default function SwiperCarousel() {
  return (
    <div className="relative w-full overflow-hidden shadow-lg min-h-screen">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="object-cover w-full h-full bg-black"
              />

              {/* Overlay Text Container */}
              <div className="absolute bottom-16 md:left-8 bg-black/60 p-6 rounded-xl max-w-xl text-white space-y-2">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="md:text-3xl font-bold"
                >
                  {slide.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="md:text-lg"
                >
                  {slide.subtitle}
                </motion.p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
