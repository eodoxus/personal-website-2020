import React from "react";

export const isBrowser = () => typeof window !== "undefined";

export const base64Decode = (str) => (isBrowser() ? atob(str) : (str) => str);

export const buildPageTitle = (title) => `Jason Gordon - ${title}`;
