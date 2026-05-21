'use client';
import { motion } from 'motion/react';

const Stares = () => {
  return (
    <div className="flex">
      <motion.div
        className="h-screen flex-1 bg-primary"
        initial={{
          y: '-100%',
        }}
        animate={{
          y: ['-100%', 0, 0, '-100%'],
          transition: {
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          },
        }}
      ></motion.div>

      <motion.div
        className="h-screen flex-1 bg-primary"
        initial={{
          y: '100%',
        }}
        animate={{
          y: ['100%', 0, 0, '100%'],
          transition: {
            delay: 0.5,
            duration: 0.8,
            ease: 'easeInOut',
          },
        }}
      ></motion.div>

      <motion.div
        className="h-screen flex-1 bg-primary"
        initial={{
          y: '-100%',
        }}
        animate={{
          y: ['-100%', 0, 0, '-100%'],
          transition: {
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          },
        }}
      ></motion.div>

      <motion.div
        className="h-screen flex-1 bg-primary"
        initial={{
          y: '100%',
        }}
        animate={{
          y: ['100%', 0, 0, '100%'],
          transition: {
            delay: 0.5,
            duration: 0.8,
            ease: 'easeInOut',
          },
        }}
      ></motion.div>

      <motion.div
        className="h-screen flex-1 bg-primary"
        initial={{
          y: '-100%',
        }}
        animate={{
          y: ['-100%', 0, 0, '-100%'],
          transition: {
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          },
        }}
      ></motion.div>

      <motion.div
        className="h-screen flex-1 bg-primary"
        initial={{
          y: '100%',
        }}
        animate={{
          y: ['100%', 0, 0, '100%'],
          transition: {
            delay: 0.5,
            duration: 0.8,
            ease: 'easeInOut',
          },
        }}
      ></motion.div>
    </div>
  );
};

export default Stares;
