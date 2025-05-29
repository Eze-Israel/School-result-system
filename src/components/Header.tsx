import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  HomeIcon,
  PhoneIcon,
  UserGroupIcon,
  PhotoIcon,
  NewspaperIcon,
  DocumentCheckIcon,
  // ClipboardDocumentCheckIcon
} from  '@heroicons/react/24/outline';

const Header: React.FC = () => { 
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
      const toggleMenu = () => setIsOpen(!isOpen);

    
    //ARRAY OF LINKS ON NAV MOBILE MENU
    const menuItems = [
      { label: "Home", icon: HomeIcon, href: "/" },
      { label: "About Us", icon: UserGroupIcon, href: "/about" },
      { label: "Results", icon:  DocumentCheckIcon, href: "/contact" },
      { label: "Gallery", icon: PhotoIcon, href: "/contact" },
      { label: "News", icon: NewspaperIcon, href: "/contact" },
      { label: "Contact", icon: PhoneIcon, href: "/contact" },
      // { label: "News", icon:  ClipboardDocumentCheckIcon , href: "/contact" },
    ];


  return (
    <div className='bg-gray-800 text-white p-4 lg:px-16 shadow:md sticky top-0 z-50 '>
     <button onClick={toggleMenu} className="sticky top-4 left-8  z-50 text-blue-500 text-2xl mb-3 bars">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
     <div className='navMenu'>
      {isOpen && (
        <motion.nav
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          // className="fixed inset-0 z-40 bg-green-50 p-4"/
        >
          <ul className="flex flex-col space-y-4 bg-gray-500">
            {menuItems.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="w-full flex items-center space-x-3 text-left 
                  text-lg p-3 rounded-lg hover:bg-yellow-900 mt-4"
                >
                  <Icon className="w-5 h-5 text-green-600" />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </div>
  
       {!isOpen && (
      <div className='container mx-auto flex items-center justify-between gap-2'>
        <Link href="/">
        <Image
        src="/images/NEXT.png"
        alt='NextLogo'
        width={100}
        height={100}
        priority
        className='cursor-pointer rounded-full '
        />
        </Link>
      </div>
      )}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-white hover:underline"
            >
             Login
            </button>
            {dropdownOpen && (
                <div className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/Teacher">Log in as a Teacher</Link>
                <Link href="/Student">Log in as a Student</Link>
                </div>
                
            )}
          </div>
      </div>
       
  )
}

export default Header