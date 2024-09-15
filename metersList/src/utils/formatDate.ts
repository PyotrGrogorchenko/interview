import { addLeadingZero } from './addLeadingZero';

export const formatDate = (str?: string) => {
  if (!str) {
    return '';
  }
  const date = new Date(str);

  return `${date.getDay()}.${addLeadingZero(date.getMonth())}.${date.getFullYear()}`;
};
