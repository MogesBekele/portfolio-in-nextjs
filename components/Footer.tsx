import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Footer = () => {
  return (
    <footer className="mt-20 bg-gradient-to-t from-gray-100 via-white to-transparent py-10 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 mb-5">
        <h1 className="font-ovo text-3xl font-semibold flex items-center gap-1">
          <span className="tracking-wide">Moges</span>
          <span className="text-red-700">.</span>
        </h1>
        <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow">
          <Image alt="Mail" src={assets.mail_icon} className="w-6" />
          <a
            href="mailto:mogesbekele32@gmail.com"
            className="text-base font-medium text-gray-700 hover:text-blue-600 transition"
          >
            mogesbekele32@gmail.com
          </a>
        </div>
        <hr className="w-full border-t-2 border-gray-200 my-2" />
        <ul className="grid grid-cols-2 gap-4 sm:flex sm:gap-6 mt-2">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/MogesBekele"
              className="text-gray-700 hover:text-black transition font-semibold"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/moges.bek/"
              className="text-gray-700 hover:text-pink-600 transition font-semibold"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://web.facebook.com/"
              className="text-gray-700 hover:text-blue-700 transition font-semibold"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/moges868"
              className="text-gray-700 hover:text-blue-500 transition font-semibold"
            >
              Telegram
            </a>
          </li>
        </ul>
        <p className="text-xs text-gray-500 mt-4">
          &copy; 2025 Moges Bekele. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
