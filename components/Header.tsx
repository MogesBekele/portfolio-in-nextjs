import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Header = () => {
  return (
    <div>
      
      <div>
        <Image alt='' src={assets.profile_img} className='rounded-full w-32'/>
        <h3 className='flex items-center gap-2 text-xl md:text-2xl mb-3 font-font-ovo '>Hi I'm Moges Bekele <Image src={assets.hand_icon} alt='' className='w-6'/> </h3>
      </div>
    </div>
  )
}

export default Header
