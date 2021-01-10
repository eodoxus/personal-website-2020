import React from "react";

import ImageGallerySlice from "./ImageGallerySlice/ImageGallerySlice";
import RichTextSlice from "./RichTextSlice/RichTextSlice";
import TilesSlice from "./TilesSlice/TilesSlice";

const sliceMap = {
  image_gallery: ImageGallerySlice,
  rich_text: RichTextSlice,
  tiles: TilesSlice,
};

export default ({ slice }) => {
  const { slice_type } = slice;
  if (sliceMap[slice_type]) {
    const Component = sliceMap[slice_type];
    return <Component {...slice} />;
  }
  return null;
};
