import React from 'react'
import Link from 'next/link'

const index = () => {

  return (

    <div>
      <Link href="/LoginPage">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Go to Login Page
      </button>
    </Link>
    </div>

  )
}

export default index