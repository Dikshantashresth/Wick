"use client";
import Image from "next/image";
import React from "react";
import { Clock, Target, DollarSign } from "lucide-react"; // Assassin-style icons
import * as motion from "motion/react-client";

const About = () => {
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}  
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.3}} 
      transition={{ duration: 0.8, ease: 'easeOut' }}

      className="flex flex-col md:flex-row py-7 mt-2 gap-6 justify-center items-center"
      id="about"
    >
      {/* Left Image */}
      
      <motion.div
      initial={{ opacity: 0, y: 50 }}   
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.4}}
      
        whileHover={{ rotate: 2, scale: 1.025 }}
        transition={{ type: "spring", stiffness: 100, duration:5 }}
        className=" cursor-pointer w-full md:w-1/2 flex justify-center"
      >
        <Image
          src={"/card.jpeg"}
          alt="John Wick Card"
          width={500}
          height={1000}
          priority
          className="object-cover rounded-2xl shadow-lg"
        />
      </motion.div>

      {/* Right Text */}
      <motion.div initial={{ opacity: 0, y: 50 }}  
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.7}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
       className="w-full md:w-2/3 text-white p-2">
        <h1 className="font-bold text-4xl flex items-center gap-3">
          <Target className="text-red-500 w-8 h-8" />
          John Wick
        </h1>

        <p className="mt-2 font-semibold leading-relaxed text-sm md:text-base">
          The John Wick universe, born from a desire to create a unique action
          film, has evolved into a complex, stylized world of assassins and
          their intricate rules. It's a place where a retired hitman, John Wick,
          is drawn back into a hidden world of assassins, governed by the
          mysterious High Table and its own currency, the marker. This world,
          though steeped in violence, operates with its own code of conduct,
          including a Continental hotel that serves as a neutral ground. The
          universe, initially just a covert world of rich people doing bad
          things, has become a mythos with ancient and classical epic
          influences....
        </p>

        {/* Icon List */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <motion.div         whileHover={{ rotate: -2, scale: 1.025 }} 
        transition={{ type: "spring", stiffness: 100, duration:3 }} className="flex flex-col items-center bg-red-900 bg-opacity-20 p-3 rounded-xl">
            <Clock className="w-8 h-8 text-red-500" />
            <p className="mt-2 font-semibold text-center">Time is Ticking</p>
          </motion.div>

          <motion.div         whileHover={{ rotate: 2, scale: 1.025 }}
        transition={{ type: "spring", stiffness: 100, duration:3 }} className="flex flex-col items-center bg-red-900 bg-opacity-20 p-3 rounded-xl">
            <Target className="w-8 h-8 text-red-500" />
            <p className="mt-2 font-semibold text-center">Deadly Precision</p>
          </motion.div>

          <motion.div         whileHover={{ rotate: 2, scale: 1.025 }} 
        transition={{ type: "spring", stiffness: 100, duration:3 }} className="flex flex-col items-center bg-red-900 bg-opacity-20 p-3 rounded-xl">
            <DollarSign className="w-8 h-8 text-red-500" />
            <p className="mt-2 font-semibold text-center">The Marker</p>
          </motion.div>
        </div>
      </motion.div>
      
    </motion.div>
  );
};

export default About;
