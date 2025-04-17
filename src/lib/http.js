import axios from 'axios';
import { getCrossSubdomainCookie } from '@/lib/utils.js';

const main = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_MAIN,
});

const immortal = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_IMMORTAL,
});

const market = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_MARKET,
});
const markettest = axios.create({
  baseURL: "http://localhost:2000",
  // baseURL: "https://market-msjv.onrender.com",
  // headers: {
  //   "Content-Type": "application/json",
  //   "ngrok-skip-browser-warning": "true",
  //   "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZmVlYzE2NWE3NThlZDNiNmE5MzFmNyIsInJvbGUiOiJhZG1pbiIsImV4cCI6MTc0MjI1NzcwMX0.F8XYpufVn5JJTlBKRs1q5wShpaA_ZX_Dosyuv1N1o4c"
  // },

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

market.interceptors.request.use((config) => {
  const { intercept = true } = config;
  if (!intercept) return config;
  const token = getCrossSubdomainCookie('token');
  if (token) config.headers.authorization = `Bearer ${token}`;
  return config;
});
markettest.interceptors.request.use((config) => {
  const { intercept = true } = config;
  if (!intercept) return config;
  const token = getCrossSubdomainCookie('token');
  if (token) config.headers.authorization = `Bearer ${token}`;
  return config;
});

export default {
  main,
  immortal,
  market,
  markettest,
};
