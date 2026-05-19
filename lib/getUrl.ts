const getUrl = (path: string) => {
  const domain = process.env.SITE_DOMAIN || '';
  if (!domain) throw new Error('Invalid site domain!');
  return domain + '' + path;
};

export default getUrl;
