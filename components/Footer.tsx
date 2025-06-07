import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h1 className="w-36 mx-auto mb-2 font-semibold text-3xl cursor-pointer font-ovo">
          Moges<span className="text-red-700">.</span>
        </h1>
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image alt="" src={assets.mail_icon} className="w-6"/>
          mogesbekele32@gmail.com
        </div>
      </div>
      <div>
        <p>2025 Moges Bekele. all rights reserved.</p>
        <ul>
          <li><a target="_blank" href="https://github.com/MogesBekele">GitHub</a></li>
             <li><a target="_blank" href="https://www.instagram.com/moges.bek/">Instagram</a></li>
                <li><a target="_blank" href="https://web.facebook.com/">Facebook</a></li>
                   <li><a target="_blank" href="https://t.me/moges868">Telegram</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
