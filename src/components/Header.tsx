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
import { ChevronDownIcon, ChevronUpIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

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
    <div className='bg-gray-800 text-white p-4 lg:px-24 shadow:md sticky top-0 z-50 md:flex justify-between'>
     <button onClick={toggleMenu} className="sticky top-4 left-8  z-50 text-blue-500 text-2xl mb-3 bars">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
     <div className='navMenu '>
      {isOpen && (
        <motion.nav
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          // className="fixed inset-0 z-40 bg-green-50 p-4"/
        >
          <ul className="flex flex-col space-y-2 bg-gray-800/70">
            {menuItems.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="w-full flex items-center space-x-3 text-left 
                  text-lg p-3 rounded-lg hover:bg-black/40 mt-3"
                >
                  <Icon className="w-5 h-5 text-blue-500" />
                  <span>{label}</span>
                </a>
                
              </li>
            ))}
          </ul>
          <div>
               <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-white-300 rounded flex flex-end md:hidden relative bg-black/70 py-2 px-6 mt-3 mb-1 hover:bg-blue-600 "
            >
             Login
             {dropdownOpen ? (
                    <ChevronDoubleLeftIcon className=" ml-2 w-4 h-6" />
                  ) : (
                    <ChevronDoubleRightIcon className=" ml-2 w-4 h-6" />
                  )}
            </button>
            {dropdownOpen && (
                <div className=" flex w-fit absolute bg-black gap-1 ml-[25%] rounded mb-8 top-113">
                  <Link className="hover:bg-blue-700 p-2 rounded px-3 border-l-2 border-l-yellow-400" href="/Teacher">Teachers Login</Link>
                <Link className="hover:bg-blue-700 p-2 rounded px-3 border-l-2 border-l-yellow-400"   href="/Student">Students Login</Link>
                </div>
                
            )}
            </div>

        </motion.nav>
      )}
    </div>
        <div className='flex md:space-x-80'> 
       {!isOpen && (
        <Link className='flex flex-row' href="/">
        <Image
        src="/images/NEXT.png"
        alt='NextLogo'
        width={50}
        height={50}
        priority
        className='cursor-pointer rounded-full relative'
        />
        <h1 className='md:text-3xl mt-2'>Next Result System</h1>
        </Link>
      )}
          <div className='hidden md:block mt-3'>
            {!isOpen && (
              <div className='flex justify-end gap-3'>
            <div >
            <Link href="/" className="hover:underline">Home</Link>
            </div>
            <div>
            <Link href="/about" className="hover:underline">About Us</Link>
            </div>
            <div>
            <Link href="/News" className="hover:underline">News</Link>
            </div>
            <div>
            <Link href="/Gallery" className="hover:underline">Gallery</Link>
            </div>
            <div>
            <Link href="/contact" className="hover:underline">Contact</Link>
            </div>
            {/* {"check here later"}  */}
            
            <div>
               <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-yellow-300 hover:underline md:flex md:flex-end  relative px-3 "
            >
            
             Login
             {dropdownOpen ? (
                    <ChevronUpIcon className="w-4 h-6" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-6" />
                  )}
            </button>
            {dropdownOpen && (
                <div className="px-4 mt-[2%] flex flex-col w-fit absolute bg-black/70 pr-4 ">
                  <Link className="hover:bg-blue-700 p-3  text-center" href="/Teacher">Log in as a Teacher</Link>
                <Link className="hover:bg-blue-700 p-3  text-center border-t-1 border-t-yellow-400"   href="/Student">Log in as a Student</Link>
                </div>
                
            )}
            </div>
            
            </div>
            )}
          </div>
          </div>
          
      </div>
       
  )
}

export default Header