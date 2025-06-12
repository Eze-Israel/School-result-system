import React from 'react'
import Hero from '@/components/Hero'
import HomeAbout from '@/components/HomeAbout'
import GalleryAbout from '@/components/GalleryAbout'
import Academic from '@/components/Academic'
import QuickLink from '@/components/QuickLink'
const index = () => {
  return (
    <>
    <div >
     <Hero/>
     <HomeAbout/>
     <GalleryAbout />
     <Academic />
    <QuickLink/>
      
      </div>
      </>
  )
}

export default index