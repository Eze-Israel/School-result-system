import React from 'react'
import Image from 'next/image'

const GalleryAbout = () => {

  return (

    <div className=' '>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-3 w-full mb-2'>
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
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-3 w-full '>
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
        </div>
        
        </div>
  )
}

export default GalleryAbout