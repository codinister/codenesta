'use client';
import axios from 'axios';

const fetch = axios.create({
  baseURL: '/api/gateway',
  headers: {
    'x-api-key': process.env.NEXT_PUBLIC_CSRF_KEY,
  },
});
const fetchApi = ({ ...options }) => {
  return fetch(options)
    .then((data) => data)
    .catch((err) => err);
};

export default fetchApi;
