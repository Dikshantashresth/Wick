import React from "react";
import Image from "next/image";
import * as motion from "motion/react-client";
const Hero = () => {

  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [1,0.5,1,0.7,0.6] }}
        
        transition={{ duration: 2, ease: "easeOut",repeat:Infinity,repeatType:'loop' }} className="relative w-full h-[80vh]">
      {/* Background Image */}
    <div className="absolute inset-0">
     
        <Image
          src="/cover.jpeg"
          alt="John Wick"
          fill
          className="object-cover contrast-150"
          priority
        />
     </div>
      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <motion.div initial={{y:-10,opacity:0}}
        animate={{y:10,opacity:1}}
        transition={{duration:2.5, ease:'easeInOut'}}
        className="flex text-8xl font-extrabold">
          <h1 className="text-white  drop-shadow-lg ">John</h1>
          <h1 className="text-red-800">Wick</h1>
        </motion.div>

        <h2 className="text-white text-2xl font-semibold drop-shadow-lg italic ">
          “Guns. Lots of guns.”
        </h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="bg-red-800 p-3 rounded-3xl text-2xl font-semibold text-white hover:bg-red-700 mt-2 cursor-pointer"
        >
          Join
        </motion.button>
      </div>
     
    </motion.div>
  );
};

export default Hero;
