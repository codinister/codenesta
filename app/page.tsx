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

const Home = () => {
  const data: HomeType = useFetchdata("home", "home");

  return (
    <div>
      <div className="mt-6 gap-24 mb-12 mx-auto flex items-center  container">
        <div className="flex justify-start items-center">
          <div
            className="shadow-5xl rounded-full w-75 h-75 border-3 border-white"
            style={{
              backgroundImage: `url(${data[0]?.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
            }}
          ></div>
        </div>

        <div>
          <h5 className="text-white">{data[0]?.title}</h5>
         
          <h3 className="text-primary">{data[0]?.fullname}</h3>
          <p className=" my-6">{data[0]?.desc}</p>
          <div className="flex gap-6 mt-12">
            <Button variant="outline">
              DOWNLOAD CV
              <FaDownload />
            </Button>
            {data[0]?.social.map((v, k) => {
              return (
                <Link
                  key={k}
                  href={v.url}
                  title={v.title}
                  className="hover:border-white hover:text-white text-primary w-10 h-10 rounded-full border border-primary flex items-center justify-center"
                >
                  {v.title === 'Facebook' ? (
                    <FaFacebookF />
                  ) : v.title === 'Linkedin' ? (
                    <FaLinkedinIn />
                  ) : (
                    <LuGithub />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mx-auto container flex justify-between ">
        {data[0]?.stat.map((v, k) => (
          <StatsBox key={k} num={v.total} para1={v.title} para2={v.sub_title} />
        ))}
      </div>
    </div>
  );
};

export default Home;
