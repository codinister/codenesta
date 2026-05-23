'use client';

import CountUp from 'react-countup';

const Stat = ({ num }: { num: number }) => {
  return (
    <CountUp
      end={num}
      duration={4}
      delay={1.5}
      className="text-5xl font-extrabold"
    />
  );
};

export default Stat
