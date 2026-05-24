'use client';

import CountUp from 'react-countup';

const Stat = ({ num }: { num: number }) => {
  return (
    <CountUp
      end={num}
      duration={2}
      delay={0.4}
      className="sm:text-5xl text-4xl font-extrabold"
    />
  );
};

export default Stat
