"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'; // Import useState

export default function HeaderTop() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  return (
    <header className="bg-white border-b border-[#b5b5b5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 relative"> {/* Added 'relative' for mobile menu positioning */}
          <div className="flex items-center">
            <Link href="/">
              <Image src="/logo.svg" alt="Logo" width={65} height={23} />
            </Link>
          </div>

          {/* Desktop Search and Navigation - hidden on small screens */}
          <div className="hidden lg:flex items-center gap-12">
            <div className="flex items-center bg-neutral-100 rounded-lg px-4 py-2 w-96">
              <Image src="/search.svg" alt="Search" width={24} height={24} />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent focus:outline-none ml-2 text-sm text-[#656565] w-full"
              />
            </div>
            <nav className="flex items-center gap-12 text-black font-medium">
              <Link href="#" className="opacity-30 hover:opacity-100">About</Link>
              <Link href="#" className="opacity-30 hover:opacity-100">Contact Us</Link>
              <Link href="#" className="opacity-30 hover:opacity-100">Blog</Link>
            </nav>
          </div>

          {/* Right-side icons and Hamburger menu button */}
          <div className="flex items-center gap-6">
            <Link href="#">
              <Image src="/favorites.svg" alt="Favorites" width={32} height={32}  className='hover:opacity-50'/>
            </Link>
            <Link href="#">
              <Image src="/cart.svg" alt="Cart" width={32} height={32} className='hover:opacity-50'/>
            </Link>
            <Link href="#">
              <Image src="/user.svg" alt="User" width={32} height={32} className='hover:opacity-50'/>
            </Link>

            {/* Hamburger icon for mobile */}
            <button
              className="lg:hidden p-2 text-black focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 z-50">
              <nav className="flex flex-col items-center gap-4 text-black font-medium">
                <Link href="#" className="opacity-30 py-2" onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link href="#" className="opacity-30 py-2" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                <Link href="#" className="opacity-30 py-2" onClick={() => setIsMenuOpen(false)}>Blog</Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
