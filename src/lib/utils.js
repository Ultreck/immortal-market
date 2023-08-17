export const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const formatCurrency = (value, currency = 'ngn') => {
  if (isNaN(value)) return value;
  if (currency.toLowerCase() === 'ngn') {
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(+value)
  }
  if (currency.toLowerCase() === 'usd') {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(+value)
  }
  return value;
};

export const getModeArray = array => {
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
