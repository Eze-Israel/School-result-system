
'use client';

import { useState, useRef, useEffect } from 'react';
import { User, LogOut, PenLineIcon } from "lucide-react";

interface UserProfileDropdownProps {
  userId: string;
  profilePicUrl: string;
}

export default function UserProfile({ userId, profilePicUrl }: UserProfileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState(profilePicUrl);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle image change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result as string);
        // here is where i will upload function to send to my backend
        // uploadToServer(file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm text-white">{userId}</span>
        <img
          src={previewImage}
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover border border-gray-300"
        />
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 md:mt-5 w-64 bg-black shadow-lg rounded-lg p-4 z-50">
          <div className="flex flex-col items-center">
            <img
              src={previewImage}
              alt="Profile Large"
              className="w-24 h-24 rounded-full object-cover border border-gray-300 my-2"
            />
            <p className="text-sm text-white mb-4">User: {userId}</p>

            <div className='flex items-center flex-row hover:underline text-white mb-5 px-4'>
              <User className='text-white w-4 h-4 mr-2' />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="text-sm"
              >
                Change Profile Picture
              </button>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
              />
            </div>

            <div className='flex items-center flex-row hover:underline text-white mb-5 px-4'>
              <PenLineIcon className='text-white w-4 h-4 mr-2' />
              <button
                onClick={() => alert('Change password')}
                className="text-sm"
              >
                Change Password
              </button>
            </div>

            <div className='flex items-center flex-row hover:underline text-white my-10 px-4'>
              <LogOut className='text-white w-4 h-4 mr-2' />
              <button
                onClick={() => alert('Logged out successfully')}
                className="text-sm"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
