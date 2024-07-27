import axios from 'axios';

const createInstance = () => {
  const instance = axios.create({
    baseURL: '/api',
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'ngrok-skip-browser-warning': '69420',
      'Access-Control-Allow-Credentials': true,
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
