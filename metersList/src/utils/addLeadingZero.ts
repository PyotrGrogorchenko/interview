export const addLeadingZero = (num: string | number, size = 2) => {
  let res = String(num);

  while (res.length < size) {
    res = '0' + res;
  }
  return res;
};
