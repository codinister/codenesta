'use client';

import CountUp from 'react-countup';

const Stat = ({ num }: { num: number }) => {
  return (
    <CountUp
      end={num}
      duration={4}
      delay={1.5}
      className="sm:text-5xl text-4xl font-extrabold"
    />
  );
};

export default Stat
