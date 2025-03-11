import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getImageLink = (path, { timestamp = false, bucket: _bucket = '' } = {}) => {
  if (!path) return null;
  const bucket = _bucket || import.meta.env.VITE_S3_BUCKET_NAME;
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

export const kebabToWords = (str) => {
  let s = str.split('-');
  s = s.map((word) => word.charAt(0) + word.slice(1));
  s = s.join(' ');
  return capitalize(s);
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

export const isValidJsonArray = (jsonString) => {
  try {
    const parsedValue = JSON.parse(jsonString);
    return Array.isArray(parsedValue);
    // eslint-disable-next-line no-unused-vars
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
      color = color
        .split('')
        .map((char) => char + char)
        .join('');
    }
    return color.match(/.{1,2}/g).map((hex) => parseInt(hex, 16));
  };

  const rgb1 = hex(color1);
  const rgb2 = hex(color2);

  const result = rgb1.map((value, index) => Math.round(value + (rgb2[index] - value) * factor));

  return `#${result.map((value) => value.toString(16).padStart(2, '0')).join('')}`;
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

export const extractColorsFromGradient = (gradient) => {
  return gradient.match(/#(?:[0-9a-fA-F]{3}){1,2}\b|rgb(?:a)?\((?:\d{1,3},\s*){2,3}\d{1,3}\)/g) ?? [];
};

export const fontFamily = [
  { key: 'Roboto', label: 'Roboto' },
  { key: 'Playwrite BE VLG', label: 'Playwrite BE VLG' },
  { key: 'Kanit', label: 'Kanit' },
  { key: 'Lato', label: 'Lato' },
  { key: 'Open Sans', label: 'Open Sans' },
  { key: 'Poppins', label: 'Poppins' },
  { key: 'Montserrat', label: 'Montserrat' },
  { key: 'Oswald', label: 'Oswald' },
  { key: 'Raleway', label: 'Raleway' },
  { key: 'Inter', label: 'Inter' },
  { key: 'Noto Sans', label: 'Noto Sans' },
  { key: 'Playfair Display', label: 'Playfair Display' },
  { key: 'Rubik', label: 'Rubik' },
  { key: 'Nunito', label: 'Nunito' },
  { key: 'PT Sans', label: 'PT Sans' },
  { key: 'Work Sans', label: 'Work Sans' },
  { key: 'Libre Baskerville', label: 'Libre Baskerville' },
  { key: 'Manrope', label: 'Manrope' },
  { key: 'Source Sans 3', label: 'Source Sans 3' },
  { key: 'Hahmlet', label: 'Hahmlet' },
];

export const camelCaseToWords = (str) => {
  if (!str) return str;
  return str
    .replace(/([A-Z])/g, ' $1')
    .toLowerCase()
    .replace(/^./, (char) => char.toUpperCase())
    .trim();
};

export const formatChartValue = (value, element) => {
  if (!value) return null;
  let total;

  if (element.config.name === 'pictogram-shapes') {
    total = element.config.icon1count + element.config.icon2count + element.config.icon3count;
  } else {
    total = element.config.data.reduce((sum, item) => sum + item.value, 0);
  }

  switch (element.config.labelFormat) {
    case 'value':
      return value.toLocaleString();
    case 'percentage':
      return `${((value / total) * 100).toFixed(1)}%`;
    case 'both':
      return `${value.toLocaleString()} (${Math.round((value / total) * 100)}%)`;
    case 'currency':
      return `${element.config.selectedCurrency || 'N'} ${value.toLocaleString()}`;
    case 'wholeNumber':
      return Math.round(value).toLocaleString();
    case 'decimal':
      return value.toLocaleString();
    default:
      return value;
  }
};

export const options = [{ text: 'Option 1' }, { text: 'Option 2' }, { text: 'Option 3' }];

export const FORMFIELDTYPE = {
  shortText: {
    text: 'Question',
    type: 'shortText',
    required: false,
  },
  paragraph: {
    text: 'Paragraph',
    type: 'paragraph',
    required: false,
  },
  checkbox: {
    text: 'Checkbox',
    type: 'checkbox',
    required: false,
    options: options.map((val) => ({ ...val, id: crypto.randomUUID() })),
  },
  multipleChoice: {
    text: 'Radio',
    type: 'radio',
    required: false,
    options: options.map((val) => ({ ...val, id: crypto.randomUUID() })),
  },
  dropdown: {
    text: 'Dropdown',
    type: 'dropdown',
    required: false,
    options: options.map((val) => ({ ...val, id: crypto.randomUUID() })),
  },
};
export const FORMFIELD = [
  {
    text: 'Short Text',
    value: 'shortText',
  },
  {
    text: 'Paragraph',
    value: 'paragraph',
  },
  {
    text: 'Check box',
    value: 'checkbox',
  },
  {
    text: 'Radio',
    value: 'radio',
  },
  {
    text: 'Drop down',
    value: 'dropdown',
  },
];
