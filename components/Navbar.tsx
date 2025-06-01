import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="flex items-center justify-between px-8 py-4">
        <a href="#top" className="flex items-center">
          <Image
            src={assets.logo}
            alt="Logo"
            width={112}
            height={40}
            className="w-28 cursor-pointer mr-4"
          />
        </a>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-gray-800 mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-gray-800 mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-gray-800 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 text-lg font-semibold text-gray-700">
          <li>
            <a href="#top" className="hover:text-blue-600 transition-colors duration-200">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600 transition-colors duration-200">About</a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-600 transition-colors duration-200">Services</a>
          </li>
          <li>
            <a href="#work" className="hover:text-blue-600 transition-colors duration-200">My Work</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition-colors duration-200">Contact</a>
          </li>
        </ul>
        <div className="hidden md:block">
          <a
            href="#contact"
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Contact
            <Image
              alt="arrow"
              src={assets.arrow_icon}
              width={20}
              height={20}
              className="inline-block"
            />
          </a>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-8 pb-4">
          <ul className="flex flex-col gap-4 text-lg font-semibold text-gray-700">
            <li>
              <a href="#top" className="hover:text-blue-600 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-600 transition-colors duration-200" onClick={() => setMenuOpen(false)}>About</a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-600 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Services</a>
            </li>
            <li>
              <a href="#work" className="hover:text-blue-600 transition-colors duration-200" onClick={() => setMenuOpen(false)}>My Work</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600 transition-colors duration-200" onClick={() => setMenuOpen(false)}>Contact</a>
            </li>
            <li>
              <a
                href="#contact"
                className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition-colors duration-200 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Contact
                <Image
                  alt="arrow"
                  src={assets.arrow_icon}
                  width={20}
                  height={20}
                  className="inline-block"
                />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar