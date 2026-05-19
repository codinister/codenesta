import serverConfig from '@/state/sanity/server.config';
import { groq } from 'next-sanity';


const servicesData = async () => {
  const data = await serverConfig.fetch(groq`*[_type == "services"]
    `);

  return data;
};

export default servicesData;
