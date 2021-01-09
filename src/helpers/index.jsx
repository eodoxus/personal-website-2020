export const isBrowser = () => typeof window !== "undefined";

export const base64Decode = (str) =>
  isBrowser() ? atob(str) : Buffer.from(str, "base64").toString("utf-8");

export const buildPageTitle = (title) => `Jason Gordon - ${title}`;
