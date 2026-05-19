import serverConfig from '@/state/sanity/server.config';
import { groq } from 'next-sanity';

const workData = async () => {
  const data = await serverConfig.fetch(groq`*[_type == "work"]
    `);

  return data;
};

export default workData;
