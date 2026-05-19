import serverConfig from '@/state/sanity/server.config';
import { groq } from 'next-sanity';



const experienceData = async () => {

  const data = await serverConfig.fetch(groq`*[_type == "experience"]
    `);

  return data;
};

export default experienceData;
