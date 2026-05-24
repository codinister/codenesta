'use client';

import navData from '@/components/nav/navDava';
import useFetchdata from '@/state/query/useFetchdata';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { custFadeBottom, fadeBottom, fadeTop, staggerChild } from '@/variants/variants';

const DesktopNav = () => {
  const path = usePathname();

  const data = useFetchdata('settings', 'settings');

  return (
    <div className="sm:flex hidden mx-auto container py-3  justify-between items-center">
      <motion.div
        variants={fadeBottom}
        initial="hidden"
        animate="visible"
      >
        <Image
          src={data[0]?.logo || '/empty.png'}
          alt="logo"
          width={100}
          height={70}
        />
      </motion.div>
      <div>
        <motion.ul 
        variants={staggerChild}
        initial="hidden"
        animate="visible"

        className="flex gap-6 ">
          {navData.map(
            (
              v: {
                name: string;
                path: string;
              },
              k: number,
            ) => (
              <motion.li 
              whileTap={{
                scale: 0.8
              }}
              custom={Number(k+1) * 0.4}
              variants={custFadeBottom}
              key={k}>
                <Link
                  className={`block rounded-3xl px-3 hover:bg-primary hover:text-black ${path === v.path ? 'bg-primary text-black' : 'text-white'}`}
                  href={v.path}
                >
                  {v.name}
                </Link>
              </motion.li>
            ),
          )}
        </motion.ul>
      </div>
    </div>
  );
};

export default DesktopNav;
