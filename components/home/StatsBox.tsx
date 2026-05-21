'use client';

import Stat from './Stats';

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
    <div className="flex flex-wrap items-center gap-4">
      <div className="text-white">
        <Stat num={num} />
      </div>
      <div>
        <p className="text-white">{para1}</p>
        <p className="text-white">{para2}</p>
      </div>
    </div>
  );
};

export default StatsBox;
