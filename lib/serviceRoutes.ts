import serviceLinks from './serviceLinks';
const serviceRoutes = (path: string[]) => {
  const [serviceName, ...rest] = path;

  const basePath = serviceLinks[serviceName as keyof typeof serviceLinks];

  if (!basePath) throw new Error('Base path not found!');

  const url = `${basePath}/${rest.join('/')}`;

  return { url, serviceName };
};

export default serviceRoutes;
