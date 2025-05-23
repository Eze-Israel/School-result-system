import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useLogin } from '../hooks/useLogin';
import { MdVisibility, MdLock, MdVerifiedUser  } from 'react-icons/md';

const index = () => {
  const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const loginMutation = useLogin();
      const router = useRouter();
    
     
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        loginMutation.mutate({username, password });
        if (username === '2345' && password === 'password') {
          router.push('/dashboard');
      };
      };

  return (

    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: "url('/images/design.jpg')" }} 
    >
        <div className="w-1/2 ">
                  <div className="ellipse"><img alt="Ellipse" src="/images/circle33.png"/></div>
                  <div className="ellipse-2"><img  alt="Ellipse" src="/images/schoolboy.png" /></div>
       </div>

         {/* Right side: Login form */}
        <div className="w-1/2 md:w-1/2 p-10">
        <Link href="/">
              <span className="text-md p-2 text-xl hover:text-purple-600 cursor-pointer right-0 absolute top-0 ">
                &larr; Back to HomePage
              </span>
            </Link>
           
            <div className=' mb-6'>
            <img
              src="images/NEXT.png" 
              alt="Logo"
              className="w-[20px] h-[20px] md:w-[50px] md:h-[50px] object-cover m-auto"
            />
            <h2 className="text-2xl md:text-3xl font-bold block text-center mb-9">Next Result System</h2>
            </div>

            <h1 className="text-2xl md:text-4xl font-bold block text-center mb-9">Welcome</h1>
            
          {/* start here */}
          <form onSubmit={handleSubmit} className="space-y-4 space-x-4">
            <div>
              <label htmlFor="username" className="block text-md font-medium text-gray-700">
              </label>
              <input
                id="username"
                type="text"
                className="w-1/2 border-b-2 border-gray-400 focus:outline-none focus:border-purple-600"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder='Username'
              />
            </div>
            <div className='space-x-2'>
              <label htmlFor="password" className="block text-md font-medium text-gray-700">
            <MdLock className="text-gray-600" />
              </label>
              <input
                id="password"
                type="password"
                className="w-1/2 border-b-2 border-gray-400 focus:outline-none focus:border-purple-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder='Password'
                
              />
              <MdVisibility className="text-gray-600 cursor-pointer position-absolute" />
            </div>
            <button
              type="submit"
              disabled={loginMutation.isPending}
              className="w-20 md:w-40 bg-blue-600 text-white py-2 px-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loginMutation.isPending ? 'Logging in...' : 'Log in'}
            </button>
            {loginMutation.isError && (
              <p className="text-red-500 text-sm text-center">
                {(loginMutation.error as Error).message}
              </p>
            )}
            {loginMutation.isSuccess && (
              <p className="text-green-500 text-sm text-center">
                Logged in successfully!
              </p>
            )}
          </form>

      </div>
      
    </div>

  )
}

export default index