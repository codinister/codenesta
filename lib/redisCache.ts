import { redis } from './redisConfig';

const redisCache = async (key: string, cb: Function) => {
  const data = await redis.get(key);

  if (data !== null) {
    return data;
  } else {
    const result = await cb();
    redis.set(key, JSON.stringify(result), {
      ex: 60,
    });
    return result;
  }
};

export default redisCache;
