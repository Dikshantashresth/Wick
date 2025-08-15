"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

import About from "./components/About";
import Latest from "./components/Latest";
import ScrollMarquee from "./components/ScrollMarquee";

const Home = () => {
  const { scrollY } = useScroll();

  // Example: Different speed factors
  const heroY = useTransform(scrollY, [0, 500], [0, -100]); // slower
  
  const aboutY = useTransform(scrollY, [0, 500], [0, -30]);

  return (
    <div className="relative overflow-hidden">
      <Navbar />

      <motion.div style={{ y: heroY }}>
        <Hero />
      </motion.div>

      <ScrollMarquee text="John"  />


      <motion.div style={{ y: aboutY }}>
        <About />
      </motion.div>

      <Latest />
      <Footer />
    </div>
  );
};

export default Home;
