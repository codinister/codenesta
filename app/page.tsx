'use client';

import { Button } from '@/components/ui/button';
import useFetchdata from '@/state/query/useFetchdata';
import { HomeType } from '@/type/type';

const Home = () => {
  const data: HomeType = useFetchdata('home', 'home');

  return <div>

  </div>;
};

export default Home;
