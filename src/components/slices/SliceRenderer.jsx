import React from "react";

import ImageGallerySlice from "./ImageGallerySlice/ImageGallerySlice";
import RichTextSlice from "./RichTextSlice/RichTextSlice";

const sliceMap = {
  image_gallery: ImageGallerySlice,
  rich_text: RichTextSlice,
};

export default ({ slice }) => {
  const { slice_type } = slice;
  if (sliceMap[slice_type]) {
    const Component = sliceMap[slice_type];
    return <Component {...slice} />;
  }
  return null;
};
