import { custFadeLeftType } from '@/types/types';
import { type Variants } from 'motion/react';

//x

export const custFadeBottom: custFadeLeftType = {
  hidden: {
    opacity: 0,
    y: -60,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      ease: 'easeOut',
      duration: 0.6,
    },
  }),
};

export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1.5,
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1.5,
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

//Y
export const fadeTop: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5,
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const fadeBottom: Variants = {
  hidden: {
    opacity: 0,
    y: -60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

//SCALE

export const fadeScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1.5,
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

//STAGGER CHILDREN
export const staggerChild = {
  hidden: {},
  visible: {
    staggerChildren: 0.3,
  },
};
