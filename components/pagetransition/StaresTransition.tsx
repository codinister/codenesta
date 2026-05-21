'use client';

import { AnimatePresence } from 'motion/react';
import { usePathname } from 'next/navigation';
import Stares from './Stares';
import {motion} from 'motion/react'

const StaresTransition = () => {
  const path = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={path}>
        <motion.div className="fixed top-0 w-screen h-screen pointer-events-none z-55"
        initial={{
          opacity: 1 
        }}
        animate={{
          opacity: 0, 
          transition: {
            duration: 0.4, 
            delay: 1, 
            ease: 'easeInOut'
          }
        }}
        >
          <Stares />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default StaresTransition;
