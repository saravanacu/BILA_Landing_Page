import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Programs from "./components/Programs";
import Impact from "./components/Impact";
import Management from "./components/Management";
import Donation from "./components/Donation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col font-display">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <Vision />
        <Programs />
        <Impact />
        <Management />
        <Donation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}