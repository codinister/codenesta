import serverConfig from '@/state/sanity/server.config';
import { groq } from 'next-sanity';

const educationData = async () => {
  const data = await serverConfig.fetch(groq`*[_type == "education"]
    `);

  return data;
};

export default educationData;
