import React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'


const Academic = () => {
  return (
    <div className='my-12'>
        <h1 className='text-center md:text-4xl text-2xl text-blue-900 my-8 font-bold'>OUR ACADEMIC PROGRAME</h1>
        <AnimatePresence mode='wait'>
        <motion.div className='grid md:grid-cols-3 grid-cols-1 gap-3  mb-2 px-4'
        initial={{ opacity: 0, x: -300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }} 
                >
        <div className='shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-white rounded p-4'>
        <Image
        alt='caplogo'
        height={50}
        width={50}
        src="/images/cap.png"
        />
        <h2 className='text-left text-blue-500'>Result Checker</h2>
        <p>
        School Forum Scratch Cards On Mobile, PC or Tablets? it doesn&apos;t matter. 
        Check your school results anytime, anyday right from the comfort of you palm.
        </p>
        </div>
        <div className='shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-white rounded p-4'>
          <Image
        alt='galleryPhoto'
        height={50}
        width={50}
        src="/images/chatlogo.png"
        />
        <h2>School Forum</h2>
        <p>Comprehensive curriculum with
            College preparatory program with
            emphasis on critical thinking.
        </p>
        </div>
        <div className='shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-white rounded p-4'>
          <Image
        alt='galleryPhoto'
        height={50}
        width={50}
        src="/images/scratcard.png"
        />
        <h2>Scratch Cards</h2>
        <p>College preparatory program with advanced placement options.</p>
        </div>
        </motion.div>
        </AnimatePresence>

         <AnimatePresence mode='wait'>
        <motion.div className='grid md:grid-cols-3 grid-cols-1 gap-3 px-4'
            initial={{ opacity: 0, x: +300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.2 }} 
                >
        <div className='shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-white rounded p-4'>
          <Image
        alt='galleryPhoto'
        height={50}
        width={50}
        src="/images/Newslogo.png"
        />
        <h2 className='text-blue-500'>News on the GO!</h2>
            <p>Stay updated! never lose a hint as we tend to drive you 
            all the latest happenings in the School / Educational sector.
            </p>
        </div>
        <div className='shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-white rounded p-4'>
          <Image
        alt='galleryPhoto'
        height={50}
        width={50}
        src="/images/timelogo.png"
        />
        <h2 className='text-blue-500'>24/7 Realtime support</h2>
        <p>Comprehensive curriculum with emphasis on critical thinking.</p>
        </div>

        <div className='shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-white rounded p-4'>
          <Image
        alt='galleryPhoto'
        height={50}
        width={50}
        src="/images/book.png"
        />
        <h2 className='text-blue-500'>School Board</h2>
        <p> College preparatory program with advanced placement options.</p>
   
        </div>
        </motion.div>
        </AnimatePresence>
        
        </div>
  )
}

export default Academic