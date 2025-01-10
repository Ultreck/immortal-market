import axios from 'axios';
import { getCrossSubdomainCookie } from '@/lib/utils.js';

const main = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_MAIN,
});

const immortal = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_IMMORTAL,
});

main.interceptors.request.use((config) => {
  const { intercept = true } = config;
  if (!intercept) return config;
  const token = getCrossSubdomainCookie('token');
  if (token) config.headers.authorization = `Bearer ${token}`;
  return config;
});

immortal.interceptors.request.use((config) => {
  const { intercept = true } = config;
  if (!intercept) return config;
  const token = getCrossSubdomainCookie('token');
  if (token) config.headers.authorization = `Bearer ${token}`;
  return config;
});

export default {
  main,
  immortal,
};
