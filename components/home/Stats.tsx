'use client';

import CountUp from 'react-countup';

const Stat = ({ num }: { num: number }) => {
  return (
    <CountUp
      end={num}
      duration={5}
      delay={2}
      className="text-4xl sm:text-5xl font-extrabold"
    />
  );
};

export default Stat
