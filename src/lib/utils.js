import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getImageLink = (path, timestamp = false) => {
  if (!path) return null;
  const bucket = import.meta.env.VITE_S3_BUCKET_NAME;
  return `https://${bucket}.s3.amazonaws.com/${path}${timestamp ? `?timestamp=${Date.now()}` : ''}`;
};

export const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const formatCurrency = (value, currency = 'ngn') => {
  if (isNaN(value)) return value;
  if (currency.toLowerCase() === 'ngn') {
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(+value);
  }
  if (currency.toLowerCase() === 'usd') {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(+value);
  }
  return value;
};

export const getModeArray = (array) => {
  if (array.length === 0) return null;
  let modeMap = {};
  let maxCount = 1;
  let modes = [];
  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    if (modeMap[el] == null) modeMap[el] = 1;
    else modeMap[el]++;
    if (modeMap[el] > maxCount) {
      modes = [el];
      maxCount = modeMap[el];
    } else if (modeMap[el] === maxCount) {
      modes.push(el);
      maxCount = modeMap[el];
    }
  }
  return modes;
};

export const capitalize = (word) => {
  if (!word) return word;
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const setCrossSubdomainCookie = (name, value, days = 1) => {
  const expires = days ? `; expires=${new Date(new Date().getTime() + days * 24 * 60 * 60 * 1000).toUTCString()}` : '';
  const secure = location.protocol === 'https:' ? '; Secure' : '';
  const sameSite = secure ? '; SameSite=None' : '';
  const domain = window.location.hostname.includes('statisense.co') ? '; domain=.statisense.co' : '';
  document.cookie = `${name}=${value}${expires}; path=/${sameSite}${secure}${domain}`;
};

export const getCrossSubdomainCookie = (name) => {
  const nameEQ = name + '=';
  const cookies = document.cookie.split(';').map((cookie) => cookie.trim());
  const foundCookie = cookies.find((cookie) => cookie.startsWith(nameEQ));
  return foundCookie ? foundCookie.substring(nameEQ.length, foundCookie.length) : null;
};

export const clearCookie = (name) => {
  const domain = window.location.hostname.includes('statisense.co') ? '; domain=.statisense.co' : '';
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${domain}`;
};

export const imageFileToBase64 = (file) => {
  if (!file) return;
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
};

export const getPercentagesMax = (numbers) => {
  if (numbers.length === 0) return [];
  const maxNumber = Math.max(...numbers);
  return numbers.map((number) => Math.ceil((number / maxNumber) * 100));
};

export const getRandomNumber = (n) => Math.floor(Math.random() * n);

export const getPercentages = (numbers) => {
  const total = numbers.reduce((acc, num) => acc + num, 0);
  return numbers.map((num) => Math.ceil((num / total) * 100));
};

export const mergeRefs = (...refs) => {
  return (value) => {
    refs.forEach((ref) => {
      if (ref) {
        typeof ref === 'function' ? ref(value) : (ref.current = value);
      }
    });
  };
};

export const getKeysFromJson = (jsonString) => {
  try {
    const parsedValue = JSON.parse(jsonString);
    return Array.isArray(parsedValue) ? Object.keys(parsedValue[0]) : [];
  } catch (error) {
    return [];
  }
};

export const isValidJsonArray = (jsonString) => {
  try {
    const parsedValue = JSON.parse(jsonString);
    return Array.isArray(parsedValue);
  } catch (e) {
    return false;
  }
};

export const roundToNearestTen = (num) => Math.round(num / 10) * 10;

export const objectToFormData = (obj, formData = new FormData(), namespace = '') => {
  Object.keys(obj).forEach((key) => {
    const formKey = namespace ? `${namespace}[${key}]` : key;
    const value = obj[key];

    if (value instanceof File) {
      formData.append(formKey, value);
    } else if (Array.isArray(value)) {
      value.forEach((item, index) => {
        objectToFormData({ [`${formKey}[${index}]`]: item }, formData);
      });
    } else if (typeof value === 'object' && value !== null) {
      formData.append(formKey, JSON.stringify(value));
    } else {
      formData.append(formKey, value);
    }
  });
  return formData;
};
