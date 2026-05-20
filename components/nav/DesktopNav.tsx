'use client';

import navData from '@/components/nav/navDava';
import useFetchdata from '@/state/query/useFetchdata';
import { Link } from 'lucide-react';
import Image from 'next/image';

const DesktopNav = () => {

  const data = useFetchdata('settings', 'settings')

  return (
    <nav>
      <div className="container py-3 flex justify-between items-center">
        <div>
          <Image src={data?.logo || '/empty.png'} alt="logo" width={100} height={70} />
        </div>
        <div>
          <ul className="flex gap-6 ">
            {Object.values(navData).map(
              (
                v: {
                  name: string;
                  path: string;
                },
                k: number,
              ) => (
                <li key={k}>
                  <Link href={v.path}>{v.name}</Link>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
