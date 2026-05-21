'use client';

import { Sheet, SheetClose, SheetContent, SheetTrigger } from '../ui/sheet';
import navData from '@/components/nav/navDava';
import useFetchdata from '@/state/query/useFetchdata';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Title } from '@radix-ui/react-dialog';
import { CiMenuBurger } from 'react-icons/ci';

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  const data = useFetchdata('settings', 'settings');

  return (
    <div className="block sm:hidden">
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Title></Title>
        <CiMenuBurger className="m-8 text-5xl font-bold text-white" />
      </SheetTrigger>
      <SheetContent side="left" className="w-80">
        <div className="bg-[#1b1b23] p-8 h-screen">
          <SheetClose className="text-white text-4xl ">X</SheetClose>
          <div className="my-12">
            <Image
              className="mx-auto"
              src={data[0]?.logo || '/empty.png'}
              alt="logo"
              width={130}
              height={100}
            />
          </div>
          <ul className="flex gap-8 flex-col mt-30 text-center">
            {navData.map(
              (
                v: {
                  name: string;
                  path: string;
                },
                k: number,
              ) => (
                <li key={k}>
                  <Link
                  onClick={()=> setOpen(false)}
                    className={`text-2xl block px-3 hover:text-primary  ${path === v.path ? 'text-primary' : 'text-white'}`}
                    href={v.path}
                  >
                    {v.name}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
    </div>
  );
};

export default MobileNav;
