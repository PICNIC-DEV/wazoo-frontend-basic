import axios from 'axios';

const createInstance = () => {
  const instance = axios.create({
    baseURL: '/api',
    headers: {
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      Expires: '0',
    },
  });
  instance.interceptors.request.use(
    async (config) => {
      console.log(config);
      config.headers = {
        'Content-Type': 'application/json',
      };
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

let Instance = createInstance('');

export { Instance };
