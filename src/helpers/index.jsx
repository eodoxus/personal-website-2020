export const isBrowser = () => {
  return typeof window !== "undefined";
};

export const base64Decode = (str) => {
  return isBrowser() ? atob(str) : (str) => str;
};
