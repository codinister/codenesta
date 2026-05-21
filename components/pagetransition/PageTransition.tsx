'use client';

import { AnimatePresence, motion } from 'motion/react';
import { usePathname } from 'next/navigation';

const PageTransition = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const path = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        key={path}
        className="relative"
      >
        <motion.div
          className="bg-[#1b1b23] w-screen h-screen pointer-events-none fixed top-0  z-50"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: {
              ease: 'easeInOut',
              delay: 1,
              duration: 0.4,
            },
          }}
        />

        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;