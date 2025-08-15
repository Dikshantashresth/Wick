import * as motion from "motion/react-client";
import React from "react";

const Latest = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      id="latest"
      className="flex flex-col items-center justify-center border-t border-t-white p-10 relative overflow-hidden bg-black"
    >
      {/* Glowing heading */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="font-extrabold text-6xl mb-6 bg-clip-text text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]"
      >
        Latest Release
      </motion.h1>

      {/* Video Frame with hover tilt */}
      <motion.div
        whileHover={{ scale: 1.05, rotateZ: 0.5 }}
        transition={{ duration: 0.4 }}
        className="relative rounded-xl overflow-hidden "
      >
        <iframe
          width="800"
          height="450"
          className="rounded-xl border-4 border-red-800 "
          src="https://www.youtube.com/embed/0FSwsrFpkbw?si=gMdIpZZtohAAK83P"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </motion.div>

      {/* Caption */}
      <p className="text-white text-lg mt-4 max-w-xl text-center opacity-80">
        Step inside the world of <span className="text-red-500">John Wick</span> — cinematic intensity, raw action, and unforgettable style.
      </p>

    
    </motion.section>
  );
};

export default Latest;
