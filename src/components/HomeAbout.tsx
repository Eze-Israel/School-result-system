import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const HomeAbout = () => {


  return (
    <div className='flex md:flex-row flex-col gap-3 md:px-4 px-3 md:mt-8 mt-3'>
         <AnimatePresence mode='wait'>
        <motion.div className="md:w-[50%] order-2 md:order-1"
        initial={{ opacity: 0.1, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }} 
        >
            <Image
            src="/images/About.jpg"  
            width={200}
            height={200}
            alt='About Image'
            className='w-full'
            
            />
        </motion.div>

        <motion.div className='md:w-[50%] text-center order-1 md:order-2'
          initial={{ opacity: 0, x: +300 }}
          whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.9, ease: 'easeOut' }}
         viewport={{ once: true, amount: 0.2 }} 
        >
            <h2 className='mb-2 font-bold text-center text-2xl'>About us:</h2>

            <p className='mb-8'> Next Imperial Team is a smart school platform designed for schools in-order for students to have direct access to their results, also giving parent and guardians the opportunity to view and print out their child / children result(s) 
                 instantly with just a scratch card at anytime and place convenient using a smartphones, Tablet, PC or Desktops.</p>
                  
            <p  className='mb-3'>1: &quot;Next Imperial Team – Empowering Schools with Modern, Professional Websites to Elevate Their Digital Presence.&quot;</p>

            <p className='mb-3'>2: &quot;Next Imperial Team – Helping Schools Shine Online with Modern, Professional Websites.&quot;</p>

            <p className='mb-3'>3: &quot;Next Imperial Team – Crafting Powerful, Professional Websites That Bring Schools into the Digital Age.&quot;</p>

            <p className='mb-3'>4: &quot;Next Imperial – Building Smart, Modern Websites That Empower Schools Online.&quot;</p>

            <p className='mb-3'>5: &quot;Next Imperial Team – Transforming School Websites for a Stronger, Smarter Digital Presence&quot;</p>

            </motion.div>
        </AnimatePresence>
        </div>
        
  )
}

export default HomeAbout