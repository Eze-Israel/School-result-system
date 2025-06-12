import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

export default function  QuickLink() {
  return (
    <a
      href="https://wa.me/2348012345678" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white md:p-4 p-2 rounded-full shadow-lg hover:bg-green-600 transition-all z-50"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}
