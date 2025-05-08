import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import Link from 'next/link';


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginMutation = useLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate({ email, password });
  };

  return (
    <>
    <div className=" flex items-center justify-center bg-white">
    
    <div className="flex w-full shadow-lg rounded-lg overflow-hidden">
  

       {/* Left side: Image and curve */}
       <div className="relative w-1/2 bg-blue-700  md:flex items-center justify-center">
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-white">
            <img
              src="images/schoolboy.png" 
              alt="Student"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right side: Login form */}
        <div className="w-full md:w-1/2 p-10">
        <Link href="/">
              <span className="text-sm text-gray-600 hover:text-purple-600 cursor-pointer float-right ">
                &larr; Back to HomePage
              </span>
            </Link>
           
            <div className='bg-red-400'>
            <img
              src="images/schoolLogo.png" 
              alt="Logo"
              className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] object-cover m-auto"

            />
            <h1 className="text-2xl md:text-4xl font-bold block text-center">Welcome</h1>
            </div>

          <div className="flex justify-between items-center mb-6">
          </div>
          
        
      
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              disabled={loginMutation.isPending}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loginMutation.isPending ? 'Logging in...' : 'Login'}
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
