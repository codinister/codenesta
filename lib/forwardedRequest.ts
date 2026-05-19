import { NextRequest } from 'next/server';
import axios from 'axios'
import csrfKey from './csrfKey';

const forwardedRequest = async (url: string, req: NextRequest) => {
  const data =
    req.method !== 'GET' && req.method !== 'HEAD'
      ? await req.json()
      : undefined;

  const res = await axios({
    url,
    method: req.method,
    headers: {
      'x-api-key': csrfKey()
    },
    data,
  })
    .then((data) => data)
    .catch((err) => err);

  return res;
};

export default forwardedRequest;
