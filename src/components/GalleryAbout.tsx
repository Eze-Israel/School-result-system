import React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const GalleryAbout = () => {

  return (

    <div className=' '>
        <AnimatePresence mode='wait'>
        <motion.div className='grid md:grid-cols-3 grid-cols-1 gap-3 w-full mb-2'
        initial={{ opacity: 0.1, x: +100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }} 
        >
        <Image
        alt='galleryPhoto'
        height={300}
        width={300}
        src="/images/Gallery1.png"
        className='w-full'
        />
          <Image
        alt='galleryPhoto'
        height={300}
        width={300}
        src="/images/Gallery2.png"
        className='w-full'

        />
          <Image
        alt='galleryPhoto'
        height={300}
        width={300}
        src="/images/Gallery3.png"
        className='w-full'

        />
        </motion.div>
        </AnimatePresence>
        <AnimatePresence>
        <motion.div className='grid md:grid-cols-3 grid-cols-1 gap-3 w-full '
          initial={{ opacity: 0.1, x: -400 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 1, ease: 'easeOut' }}
         viewport={{ once: true, amount: 0.2 }} 
        >
          <Image
        alt='galleryPhoto'
        height={300}
        width={300}
        src="/images/Gallery4.png"
        className='w-full'

        />
          <Image
        alt='galleryPhoto'
        height={300}
        width={300}
        src="/images/Gallery5.png"
        className='w-full'

        />
          <Image
        alt='galleryPhoto'
        height={300}
        width={300}
        src="/images/Gallery6.png"
        className='w-full'

        />
        </motion.div>
        </AnimatePresence>
        
        </div>
  )
}

export default GalleryAbout