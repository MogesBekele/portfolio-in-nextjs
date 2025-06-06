import { serviceData } from '@/assets/assets'
import React, { useState } from 'react'
import Image from "next/image";

const MAX_DESCRIPTION_LENGTH = 100;

const truncate = (text: string, max: number) =>
  text.length > max ? text.slice(0, max).trim() + "..." : text;

const Servives = () => {
  // Track which card is expanded
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div id='services' className="w-full px-4 md:px-[8%] py-10 scroll-mt-20 pt-32">
      <h4 className="text-center mb-2 text-lg font-ovo">What I offer </h4>
      <h2 className="text-center text-5xl font-ovo">My Services</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius non blanditiis libero accusamus molestiae, maxime suscipit eos provident facilis voluptas ex distinctio saepe,
      </p>
      
  <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-2 gap-6 my-10 m-5'>
  {
    serviceData.map(({icon, title, description}, index)=> {
      const isLong = description.length > MAX_DESCRIPTION_LENGTH;
      const isOpen = expanded === index;
      return (
        <div
          key={index}
          className={
            'border border-gray-300 rounded-lg px-8 py-12 bg-white cursor-pointer transition duration-300' +
            (isOpen ? ' shadow-[6px_6px_0px_0px_rgba(0,0,0,0.25)] -translate-y-1 -translate-x-1' : '') +
            ' hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.25)] hover:-translate-y-1 hover:-translate-x-1'
          }
        > 
          <Image src={icon} alt='' className='w-10'/>
          <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
          <p className='text-sm text-gray-600 leading-5'>
            {isOpen || !isLong
              ? description
              : truncate(description, MAX_DESCRIPTION_LENGTH)}
          </p>
          {isLong && (
            <button
              className="mt-2 text-blue-600 hover:underline text-sm font-medium focus:outline-none"
              onClick={() => setExpanded(isOpen ? null : index)}
            >
              {isOpen ? "Show less" : "Read more"}
            </button>
          )}
        </div>
      )
    })
  }
</div>
    </div>
  )
}

export default Servives