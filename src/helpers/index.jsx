import { Date as ParseDate } from "prismic-reactjs";

export const isBrowser = () => typeof window !== "undefined";

export const base64Decode = (str) =>
  isBrowser() ? atob(str) : Buffer.from(str, "base64").toString("utf-8");

export const buildPageTitle = (title) => `Jason Gordon - ${title}`;

export function formatDate(dateStr) {
  if (!dateStr) {
    return "";
  }
  const date = ParseDate(dateStr);
  const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
  const month = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
  const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
  return `${month} ${day}, ${year}`;
}

export function getDateRange(startStr, endStr) {
  return formatDate(startStr) + (endStr ? ` - ${formatDate(endStr)}` : "");
}
