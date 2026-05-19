import serverConfig from '@/state/sanity/server.config';
import { groq } from 'next-sanity';



const aboutData = async () => {
  const data = await serverConfig.fetch(groq`*[_type == "about"]
    `);

  return data;
};

export default aboutData;
