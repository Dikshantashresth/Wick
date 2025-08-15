'use client';
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaGun } from 'react-icons/fa6';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({ weight: '700', subsets: ['latin'] });
interface ScrollMarqueeProps {
  text: string;
}

const ScrollMarquee: React.FC<ScrollMarqueeProps> = ({ text }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-50px' });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        x: ['100%', '-100%'],
        transition: { duration: 10, repeat: Infinity, ease: 'linear' },
      });
    } else {
      controls.stop();
    }
  }, [inView, controls]);

  return (
    <div
      ref={ref}
      className="w-full overflow-hidden bg-red-800 border-t  border-b border-gray-300 py-2 mt-4"
    >
      <motion.div
  animate={controls}
  initial={{ x: '100%' }}
  className={`${orbitron.className} inline-flex whitespace-nowrap mb-3 items-center text-white text-7xl gap-4 px-2`}
>
  {text} <FaGun /> {text} <FaGun /> {text} <FaGun />
</motion.div>
    </div>
  );
};

export default ScrollMarquee;
