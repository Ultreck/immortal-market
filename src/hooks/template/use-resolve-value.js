const useResolveValue = (values, fallback = '') => {
  const same = values.every((v) => v === values[0]);
  return same ? values[0] : fallback;
};

export default useResolveValue;
