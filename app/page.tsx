"use client";
import About from "@/components/About";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Servives from "@/components/Servives";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header/>
      <About/>
      <Servives/>
    </>
  );
}
