const csrfKey = () => {
  const key = process.env.CSRF_KEY || '';
  if (!key) throw new Error('Invalid csrf key');
  return key;
};

export default csrfKey;
