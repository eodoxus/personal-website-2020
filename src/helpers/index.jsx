export const isBrowser = () => {
  return typeof window !== "undefined";
};

export const base64Decode = () => {
  return isBrowser() ? atob : (str) => str;
};
