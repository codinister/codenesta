import serverConfig from '@/state/sanity/server.config';
import { groq } from 'next-sanity';

const homeData = async () => {
  const data = await serverConfig.fetch(groq`*[_type == "home"]{
      desc,
      fullname,
      'image' : image.asset->url,
      'social': social[]{
          title, 
          url
      }, 
      'stat': stat[]{
      sub_title,
      title,
      total
      },
      title
    }
    `);

  return data;
};

export default homeData;
