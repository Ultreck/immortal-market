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

export const interpolateColor = (color1, color2, factor) => {
  const hex = (color) => {
    color = color.replace('#', '');
    if (color.length === 3) {
      color = color.split('').map(char => char + char).join('');
    }
    return color.match(/.{1,2}/g).map(hex => parseInt(hex, 16));
  };
  
  const rgb1 = hex(color1);
  const rgb2 = hex(color2);
  
  const result = rgb1.map((value, index) => 
    Math.round(value + (rgb2[index] - value) * factor)
  );
  
  return `#${result.map(value => value.toString(16).padStart(2, '0')).join('')}`;
};

export const TableThemes = {
  one: {
    id: 'one',
    tableClassNames: 'border-red-900',
    tableHeadClassNames: 'bg-green-500',
    tableHeadRowClassNames: 'bg-orange-500',
    tableBodyClassNames: 'bg-yellow-500',
    tableBodyRowClassNames: 'bg-white',
    tableHeadDataClassNames: 'text-white',
    tableBodyDataClassNames: 'text-black',
  },
  two: {
    id: 'two',
    tableClassNames: 'border-yellow-900',
    tableHeadClassNames: 'bg-gray-700',
    tableHeadRowClassNames: 'bg-gray-500',
    tableBodyClassNames: 'bg-red-500',
    tableBodyRowClassNames: 'bg-blue-400',
    tableHeadDataClassNames: 'text-white',
    tableBodyDataClassNames: 'text-black',
  },
  three: {
    id: 'three',
    tableClassNames: 'border-green-900',
    tableHeadClassNames: 'bg-yellow-500',
    tableHeadRowClassNames: 'bg-blue-400',
    tableBodyClassNames: 'bg-gray-500',
    tableBodyRowClassNames: 'bg-gray-600',
    tableHeadDataClassNames: 'text-white',
    tableBodyDataClassNames: 'text-white',
  },
  four: {
    id: 'four',
    tableClassNames: 'border-blue-900',
    tableHeadClassNames: 'bg-purple-500',
    tableHeadRowClassNames: 'bg-green-600',
    tableBodyClassNames: 'bg-white',
    tableBodyRowClassNames: 'odd:bg-gray-200 ',
    tableHeadDataClassNames: 'text-white',
    tableBodyDataClassNames: 'text-black',
  },
  five: {
    id: 'five',
    tableClassNames: 'border-indigo-900',
    tableHeadClassNames: 'bg-blue-500',
    tableHeadRowClassNames: 'bg-green-500',
    tableBodyClassNames: 'bg-yellow-500',
    tableBodyRowClassNames: 'bg-green-200',
    tableHeadDataClassNames: 'text-white',
    tableBodyDataClassNames: 'text-black',
  },
  six: {
    id: 'six',
    tableClassNames: 'border-purple-900',
    tableHeadClassNames: '',
    tableHeadRowClassNames: 'bg-orange-500',
    tableBodyClassNames: 'bg-white',
    tableBodyRowClassNames: 'even:bg-gray-200',
    tableHeadDataClassNames: 'text-white',
    tableBodyDataClassNames: 'text-black',
  },
  seven: {
    id: 'seven',
    tableClassNames: 'border-red-900',
    tableHeadClassNames: 'bg-purple-500',
    tableHeadRowClassNames: 'bg-amber-900',
    tableBodyClassNames: '',
    tableBodyRowClassNames: 'bg-amber-600',
    tableHeadDataClassNames: 'text-white',
    tableBodyDataClassNames: 'text-white',
  },
  eight: {
    id: 'eight',
    tableClassNames: 'border-red-900',
    tableHeadClassNames: 'bg-purple-500',
    tableHeadRowClassNames: 'bg-blue-600',
    tableBodyClassNames: '',
    tableBodyRowClassNames: 'bg-white',
    tableHeadDataClassNames: 'text-white',
    tableBodyDataClassNames: 'text-black',
  },
  nine: {
    id: 'nine',
    tableClassNames: 'border-red-900',
    tableHeadClassNames: '',
    tableHeadRowClassNames: 'bg-purple-500',
    tableBodyClassNames: '',
    tableBodyRowClassNames: 'bg-purple-200',
    tableHeadDataClassNames: 'text-black',
    tableBodyDataClassNames: 'text-black',
  },
  ten: {
    id: 'ten',
    tableClassNames: '!border-collapse',
    tableHeadClassNames: '',
    tableHeadRowClassNames: 'bg-zinc-900',
    tableBodyClassNames: '!border-collapse',
    tableBodyRowClassNames: 'bg-zinc-500',
    tableHeadDataClassNames: 'text-white',
    tableBodyDataClassNames: 'text-white',
  },
};

export const colors = [
  '#E66B5B',
  '#1D9085',
  '#264A5A',
  '#E8C22C',
  '#F6881F',
  '#2673D9',
  '#2BA385',
  '#E6A333',
  '#AB52D9',
  '#D93566',
];