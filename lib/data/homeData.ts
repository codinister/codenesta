import serverConfig from '@/state/sanity/server.config';
import { groq } from 'next-sanity';


const homeData = async () => {
  const data = await serverConfig.fetch(groq`*[_type == "home"]
    `);

  return data;
};

export default homeData;
