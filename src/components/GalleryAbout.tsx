import React from 'react'
import Image from 'next/image'

const GalleryAbout = () => {

  return (

    <div className='mt-10 grid md:grid-cols-2 grid-cols-1 bg-black'>
        <div className=''>
        <div>
        <Image
        alt='galleryPhoto'
        height={300}
        width={300}
        src="/images/Gallery1.png"
        className='w-full'
        />
        </div>
        <div>
          <Image
        alt='galleryPhoto'
        height={300}
        width={300}
        src="/images/Gallery2.png"
        className='w-full'

        />
        </div>
        <div>
          <Image
        alt='galleryPhoto'
        height={300}
        width={300}
        src="/images/Gallery3.png"
        className='w-full'

        />
        </div>
        </div>
        <div className=''>
        <div>
          <Image
        alt='galleryPhoto'
        height={300}
        width={300}
        src="/images/Gallery4.png"
        className='w-full'

        />
        </div>
        <div>
          <Image
        alt='galleryPhoto'
        height={300}
        width={300}
        src="/images/Gallery5.png"
        className='w-full'

        />
        </div>
        <div>
          <Image
        alt='galleryPhoto'
        height={300}
        width={300}
        src="/images/Gallery6.png"
        className='w-full'

        />
        </div>
        </div>
        
        </div>
  )
}

export default GalleryAbout