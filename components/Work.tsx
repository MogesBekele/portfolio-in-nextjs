import { assets, workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";

const Work = () => {
  return (
    <div id="work" className="w-full px-4 md:px-[8%] py-10 scroll-mt-20 pt-32">
      <h2 className="text-center text-5xl font-ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        welcome to my web development portfolio Explore a collection of projects
        showcasing my expertise in fullstack development
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-2 gap-6 my-10 m-6">
        {workData.map((project, index) => (
          <div
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-9/12 rounded-md absolute bottom-5 left-1/7  -traslate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transtion">
                <Image alt="send icon" src={assets.send_icon} className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.2px] rounded-full py-3 px-10 mx-auto my-20 hover:bg-amber-50 duration-500"
      >
        show more{" "}
        <Image
          src={assets.right_arrow_bold}
          alt="right arrow "
          className="w-4"
        />{" "}
      </a>
    </div>
  );
};

export default Work;
