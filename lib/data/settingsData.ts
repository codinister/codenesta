import serverConfig from '@/state/sanity/server.config';
import { groq } from 'next-sanity';



const settingsData = async () => {
  const data = await serverConfig.fetch(groq`*[_type == "settings"]{
      email,
      location,
      'logo' : logo.asset->url, 
      phone1,
      title,
      whatsapp
    }
    `);

  return data;
};

export default settingsData;
