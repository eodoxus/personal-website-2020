import React from "react";
import { RichText } from "prismic-reactjs";

export const isBrowser = () => typeof window !== "undefined";

export const base64Decode = (str) => (isBrowser() ? atob(str) : (str) => str);

export const buildPageTitle = (title) => `Jason Gordon - ${title}`;

export const renderSlices = (slices) =>
  slices.map((slice, idx) => {
    const { slice_type } = slice;
    switch (slice_type) {
      case "rich_text":
        return <RichText render={slice?.primary?.content} key={idx} />;
      default:
        return null;
    }
  });
