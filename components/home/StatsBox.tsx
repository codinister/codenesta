'use client';

import { fadeBottom } from '@/variants/variants';
import Stat from './Stats';
import {motion} from 'motion/react'
const StatsBox = ({
  num,
  para1,
  para2,
}: {
  num: number;
  para1: string;
  para2: string;
}) => {
  return (
    <motion.div 
    variants={fadeBottom}
    initial="hidden"
    whileInView="visible"
    viewport={{
      amount: 0.3, 
      once: true
    }}
    className="flex justify-start flex-col sm:flex-row sm:items-center sm:gap-4 gap-2">
      <div className="text-white">
        <Stat num={num} />
      </div>
      <div>
        <p className="text-white text-left">{para1}</p>
        <p className="text-white text-left">{para2}</p>
      </div>
    </motion.div>
  );
};

export default StatsBox;
