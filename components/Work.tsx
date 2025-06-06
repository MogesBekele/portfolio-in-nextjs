import { assets, workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const Work = () => {
  return (
    <div id="work" className="w-full px-4 md:px-[8%] py-10 scroll-mt-20 pt-32">
      <h4 className="text-center mb-2 text-lg font-ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        welcome to my web development portfolio Explore a collection of projects
        showcasing my expertise in fullstack development
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-2 gap-5 my-10'>
        {workData.map((project, index) => (
          <div className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <div>
              <Image alt="send icon" src={assets.send_icon} className="w-5"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
