'use client';

import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdVisibility, MdLock } from 'react-icons/md';



export default function LoginPage() {
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
    <>
    <div className=" flex items-center justify-center bg-white">
    
    <div className="flex w-full shadow-lg rounded-lg overflow-hidden">
  

       {/* Left side: Image and curve */}
       <div className="relative w-1/2 bg-blue-700  md:flex items-center justify-center ">
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-white ">
            <img
              src="images/schoolboy.png" 
              alt="Student"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right side: Login form */}
        <div className="w-full md:w-1/2 p-10">
        <div className='t-10px text-left'>
        <Link href="/">
              <span className="text-sm text-gray-600 hover:text-purple-600 cursor-pointer float-right  ">
                &larr; Back to HomePage
              </span>
            </Link>
            </div>
           
            <div className='flex items-center mb-6'>
            <img
              src="images/NEXT.png" 
              alt="Logo"
              className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] object-cover "
            />
            <h2>Next Result System</h2>
            </div>

            <h1 className="text-2xl md:text-4xl font-bold block text-center mb-9">Welcome</h1>
            

          <form onSubmit={handleSubmit} className="space-y-4">
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
      </div>
    </>
  );
}
