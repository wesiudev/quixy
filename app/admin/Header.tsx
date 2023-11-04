"use client";
import Link from "next/link";
import { useState } from "react";
import { FaCog, FaHome, FaToolbox } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#222430]  sm:px-4 sm:py-3 relative z-[4000]">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <button
          type="button"
          className="block text-gray-500 hover:text-white focus:text-white focus:outline-none sm:hidden"
          onClick={toggleNav}
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
            />
          </svg>
        </button>
      </div>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } px-2 pt-2 pb-4 sm:flex sm:p-0`}
      >
        <Link
          href="/"
          className="block px-2 py-1 mt-1 sm:mt-0 sm:ml-2 text-white font-semibold rounded hover:bg-gray-700"
        >
          <FaHome className="inline-block mr-2" />
          Strona Główna
        </Link>
      </nav>
    </header>
  );
}
