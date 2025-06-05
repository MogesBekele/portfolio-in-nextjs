import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from "next/image";

const Servives = () => {
  return (
    <div id='services' className="w-full px-4 md:px-[8%] py-10 scroll-mt-20 pt-32">
      <h4 className="text-center mb-2 text-lg font-ovo">What I offer </h4>
      <h2 className="text-center text-5xl font-ovo">My Services</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius non blanditiis libero accusamus molestiae, maxime suscipit eos provident facilis voluptas ex distinctio saepe,
      </p>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
        {
          serviceData.map(({icon, title, description, link}, index)=>(
            <div
              key={index}
              className='border border-gray-300 rounded-lg px-8 py-12 bg-white cursor-pointer transition duration-300 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.25)] hover:-translate-y-1 hover:-translate-x-1'
            > 
              <Image src={icon} alt='' className='w-10'/>
              <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
              <p className='text-sm text-gray-600 leading-5'>{description}</p>
              <a href={link} className="inline-flex items-center gap-1 mt-4 text-blue-600 hover:underline">
                Read more <Image alt='' src={assets.right_arrow} className='w-4'/>
              </a>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Servives