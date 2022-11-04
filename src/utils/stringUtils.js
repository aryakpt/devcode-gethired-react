const trimmedString = (string, length = 30) => {
  if (string.length > length) return string.substring(0, length) + '...';
  return string;
};

export { trimmedString };
