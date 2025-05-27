import React, { useState } from 'react'
import Link from 'next/link'


const index = () => {
  const [showOptions, setShowOptions] = useState(false)

  const handleShow = () => {
  setShowOptions(true)
  }

  return (
  
    <div>
      <div >
      <button onClick={handleShow} className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Login</button>
      {showOptions && (
      <div className='dropdown-options'>
        <Link href="/Teacher">
      <button >Login as Teacher</button>
      </Link>
      <Link href="/Student">
      <button>Login as Student</button>
      </Link>
      </div>
   )}
   </div>
    
    </div>

  )
}

export default index