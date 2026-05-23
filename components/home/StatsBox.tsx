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
    <div className="flex justify-start flex-col sm:flex-row items-center sm:gap-4 gap-2">
      <div className="text-white">
        <Stat num={num} />
      </div>
      <div>
        <p className="text-white text-left">{para1}</p>
        <p className="text-white text-left">{para2}</p>
      </div>
    </div>
  );
};

export default StatsBox;
