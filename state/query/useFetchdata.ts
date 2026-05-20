import React from 'react';
import useGetQuery from './useGetQuery';
import { keyframes } from 'styled-components';

const useFetchdata = (key: string, path: string) => {
  const { isSuccess, data } = useGetQuery(key, path);
  return isSuccess ? data?.data.data : [];
};

export default useFetchdata;
