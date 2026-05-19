import serverConfig from '@/state/sanity/server.config';
import { groq } from 'next-sanity';


const skillsData = async () => {

  const data = await serverConfig.fetch(groq`*[_type == "skills"]
    `);

  return data;
};

export default skillsData;
