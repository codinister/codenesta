import { headers } from 'next/headers';
import { limiter } from './redisConfig';

const rateLimit = async () => {
  const headersList = await headers();

  const forwardedFor = headersList.get('x-forwarded-for');

  const ip = forwardedFor?.split(',')[0]?.trim() || 'anonymous';

  const result = await limiter.limit(ip);

  if (!result.success) {
    throw new Error('Too many requests!');
  }

  return result;
};

export default rateLimit;
