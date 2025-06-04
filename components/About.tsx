import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-main">Inroduction</h4>
      <h2 className="text-center text-5xl font-main">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div>
          <Image
            src={assets.user_image}
            alt=""
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1 ">
       
        </div>
      </div>
    </div>
  );
};

export default About;
