import React from 'react'
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa6';



const Footer = () => {
  const date = new Date().getFullYear()


  return (
    <div className='bg-gray-800 text-white py-10'>
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10'>
        <div>
          <h3 className='text-lg font-bold mb-4'>Next Result System</h3>
          <p className='text-sm'>
            Next Result System, a result checking website
          </p>
        </div>
        {/* quick links */}
        <div>
          <h3 className='text-lg font-bold mb-4 '> Quick Links</h3>
          <ul className='text-sm'>

            <li className='mb-2'>
              <Link href="/" className='hover:underline'>
              Home
              </Link>
            </li>
            <li className='mb-2'>
              <Link href="/Gallery" className='hover:underline'>
              Gallery
              </Link>
            </li>

            <li className='mb-2'>
              <Link href="/about" className='hover:underline'>
              About
              </Link>
            </li>

            <li className='mb-2'>
              <Link href="/contact" className='hover:underline'>
              Contact
              </Link>
            </li>

            <li className='mb-2'>
              <Link href="/News" className='hover:underline'>
              News
              </Link>
            </li>
          </ul>
        </div>
        {/* contact section */}
        <div>
          <h3 className='text-lg font-bold mb-4 '> Contact Us </h3>
          <ul className='text-sm'>
            <li className='mb-2'>Email:support@nextresultsystem.com</li>
            <li className='mb-2'>Address: 123 Ago Street, Okota Lagos</li>
          </ul>
        </div>
        {/* social media section */}
        <div>
          <h3 className='text-lg font-bold mb-4'>Follow Us</h3>
          <ul className='flex space-x-1 text-sm'>
            <li>
              <a href='#'>
              <FaFacebook  className='p-4 rounded-full text-black text-6xl' />
              </a>
            </li>
            <li>
              <a href='#'>
              <FaTwitter  className='p-4 rounded-full text-black text-6xl'/>
              </a>
            </li>
            <li>
              <a href='#'>
              <FaLinkedin  className='p-4 rounded-full text-black text-6xl' />
              </a>
            </li>
            <li>
              <a href='#'>
              <FaInstagram  className='p-4 rounded-full text-black text-6xl'/>
              </a>
            </li>
            <li>
              <a href='#'>
              <FaWhatsapp  className='p-4 rounded-full text-black text-6xl' />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className='text-center mt-10 text-sm border-t border-blue-700 pt-4'>
        <p>&copy; {date} Next Result System. All rights reserved.</p>
      </div>
      </div>
  );
};

export default Footer