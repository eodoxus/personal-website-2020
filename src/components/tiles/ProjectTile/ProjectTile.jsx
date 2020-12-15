import React from "react";
import { Link } from "@reach/router";

import BaseTile from "../BaseTile/BaseTile";

export default ({ project }) => {
  const { id, images, title } = project;
  let image = images.find((image) => image.tags.includes("promoted"));
  if (!image) {
    image = images[0];
  }
  const { url } = image;
  let transformedImageUrl = `${url}&w=1200`;
  return (
    <Link to={`/projects/${id}/`}>
      <BaseTile title={title} image={transformedImageUrl} />
    </Link>
  );
};
