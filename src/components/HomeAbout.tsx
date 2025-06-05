import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const HomeAbout = () => {


  return (
    <div className='flex md:flex-row flex-col gap-3 px-4 md:mt-8'>
         <AnimatePresence mode="wait">
        <motion.div className="md:w-[50%]"
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }} 
        >
            <Image
            src="/images/About.png"  
            width={700}
            height={700}
            alt='About Image'
            className='w-full '
            
            />
        </motion.div>

        <motion.div className='md:w-[50%] text-left'
          initial={{ opacity: 0, x: +300 }}
          whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.9, ease: 'easeOut' }}
         viewport={{ once: true, amount: 0.2 }} 
        >
            <h2 className='mb-2 font-bold'>About us:</h2>

            <p className='mb-8'> Next Imperial Team is a smart school platform designed for schools in-order for students to have direct access to their results, also giving parent and guardians the opportunity to view and print out their child / children result(s) 
                 instantly with just a scratch card at anytime and place convenient using a smartphones, Tablet, PC or Desktops.</p>
                  {" "}
            <p>1: &quot;Next Imperial Team – Empowering Schools with Modern, Professional Websites to Elevate Their Digital Presence.&quot;</p>

            <p>2: &quot;Next Imperial Team – Helping Schools Shine Online with Modern, Professional Websites.&quot;</p>

            <p>3: &quot;Next Imperial Team – Crafting Powerful, Professional Websites That Bring Schools into the Digital Age.&quot;</p>

            <p>4: &quot;Next Imperial – Building Smart, Modern Websites That Empower Schools Online.&quot;</p>

            <p>5: &quot;Next Imperial Team – Transforming School Websites for a Stronger, Smarter Digital Presence&quot;</p>

            </motion.div>
        </AnimatePresence>
        </div>
        
  )
}

export default HomeAbout