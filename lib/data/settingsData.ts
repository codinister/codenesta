import serverConfig from '@/state/sanity/server.config';
import { groq } from 'next-sanity';



const settingsData = async () => {
  const data = await serverConfig.fetch(groq`*[_type == "settings"]
    `);

  return data;
};

export default settingsData;
