"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Servives from "@/components/Servives";
import Work from "@/components/Work";
import { useEffect, useState } from "react";
export default function Home() {
  const [isDarkMode, setIsDarkMOde] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Servives />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
// learn more on server actions 
// route handler 
