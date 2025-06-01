import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = () => {
  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]' >
      <Image alt='' src={assets.header_bg_color} className='w-full'/>
    </div>
    <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
      <a href="#top">
        <Image
          src={assets.logo}
          alt="Logo"
          width={112} // set to your logo's width in px
          height={40} // set to your logo's height in px
          className="w-28 cursor-pointer mr-14"
        />
      </a>
      <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
        <li><a  href="#top">Home</a></li>
          <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">My Work</a></li>
            <li><a href="#contact">Contact</a></li>
      </ul>
      <div>
        <a className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 ' href="#contact">Contant <Image className='w-3' alt='' src={assets.arrow_icon}/> </a>
      </div>

    </nav>
    </>
  )
}

export default Navbar