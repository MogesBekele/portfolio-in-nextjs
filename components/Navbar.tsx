import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = () => {
  return (
    <nav>
      <a href="">
        <Image
          src={assets.logo}
          alt="Logo"
          width={112} // set to your logo's width in px
          height={40} // set to your logo's height in px
          className="w-28 cursor-pointer mr-14"
        />
      </a>
      <ul>
        <li><a href="#top">Home</a></li>
          <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">My Work</a></li>
            <li><a href="#contact">Contact</a></li>
      </ul>
      <div>
        <a href="#contact">Contant <Image alt='arrow' src={assets.arrow_icon}/> </a>
      </div>

    </nav>
  )
}

export default Navbar