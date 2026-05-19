import { headers } from 'next/headers';
import { NextRequest } from 'next/server';
import csrfKey from './csrfKey';

const csrfValidation = async (req: NextRequest) => {
  const apiKey = csrfKey()
  const header = await headers();
  const api_key = header.get('x-api-key');

  if (api_key !== apiKey) {
    throw new Error('You are not authorised to access resources!');
  }
};

export default csrfValidation;
