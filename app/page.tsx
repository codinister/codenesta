'use client';

import StatsBox from '@/components/home/StatsBox';
import { Button } from '@/components/ui/button';
import useFetchdata from '@/state/query/useFetchdata';
import { HomeType } from '@/types/types';
import Link from 'next/link';
import { FaDownload } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { LuGithub } from 'react-icons/lu';
import { motion } from 'motion/react';
import {
  custFadeLeft,
  fadeBottom,
  fadeLeft,
  fadeScale,
  fadeTop,
  staggerChild,
} from '@/variants/variants';

const Home = () => {
  const data: HomeType = useFetchdata('home', 'home');

  return (
    <div>
      <div className="px-8 sm:px-0 sm:flex-row flex-col sm:mt-6 sm;gap-24 gap-12 mb-8 sm:mb-12 mx-auto flex items-center  container">
        <div className="sm:flex sm:justify-start sm:items-center">
          <motion.div
            variants={fadeScale}
            initial="hidden"
            animate="visible"
            className="w-80 h-80 sm:py-0 shadow-5xl rounded-2xl sm:rounded-full sm:w-75 sm:h-75"
            style={{
              backgroundImage: `url(${data[0]?.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
            }}
          ></motion.div>
        </div>

        <div>
          <motion.h5
            variants={fadeBottom}
            initial="hidden"
            animate="visible"
            className="text-white"
          >
            {data[0]?.title}
          </motion.h5>

          <motion.h3
            variants={fadeBottom}
            initial="hidden"
            animate="visible"
            className="text-primary"
          >
            {data[0]?.fullname}
          </motion.h3>
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className=" my-6"
          >
            {data[0]?.desc}
          </motion.p>
          <motion.div
            variants={staggerChild}
            initial="hidden"
            animate="visible"
            className="flex justify-start flex-wrap sm:gap-6 gap-4 mt-12"
          >
            <motion.button
              whileHover={{
                y: -5,
              }}
              whileTap={{
                scale: 0.7,
              }}
              custom={1.5}
              variants={custFadeLeft}
              className="flex gap-2 justify-center items-center border border-primary rounded-2xl text-primary hover:bg-white hover:text-black w-38 sm:min-w-auto"
            >
              DOWNLOAD CV
              <FaDownload />
            </motion.button>

            {data[0]?.social.map((v, k) => {
              return (
                <motion.a
                  whileHover={{
                    y: -5,
                  }}
                  whileTap={{
                    scale: 0.7,
                  }}
                  custom={Number(k + 1) * 0.6}
                  variants={custFadeLeft}
                  key={k}
                  href={v.url}
                  title={v.title}
                  className="hover:border-white hover:text-white text-primary sm:w-10 sm:h-10 w-7 h-7 rounded-full border border-primary flex items-center justify-center"
                >
                  {v.title === 'Facebook' ? (
                    <FaFacebookF />
                  ) : v.title === 'Linkedin' ? (
                    <FaLinkedinIn />
                  ) : (
                    <LuGithub />
                  )}
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
      <div className="gap-4 mx-auto container flex sm:justify-between   p-8 sm:p-0 flex-wrap">
        {data[0]?.stat.map((v, k) => (
          <div key={k} className="basis-30 grow">
            <StatsBox num={v.total} para1={v.title} para2={v.sub_title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
