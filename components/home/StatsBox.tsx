'use client';

import { fadeBottom } from '@/variants/variants';
import Stat from './Stats';
import { useRef } from 'react';
import { useInView } from 'motion/react';


const StatsBox = ({
  num,
  para1,
  para2,
}: {
  num: number;
  para1: string;
  para2: string;
}) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-30px',
  });

  return (
    <div
      ref={ref}
      className="flex justify-start flex-col sm:flex-row sm:items-center sm:gap-4 gap-2"
    >
      <div className="text-white">{isInView && <Stat num={num} />+'<span className="sm:text-5xl text-4xl font-extrabold">+</span>'}</div>
      <div>
        <p className="text-white text-left">{para1}</p>
        <p className="text-white text-left">{para2}</p>
      </div>
    </div>
  );
};

export default StatsBox;
