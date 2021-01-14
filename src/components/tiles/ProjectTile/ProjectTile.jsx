import React from "react";
import { Link } from "@reach/router";

import BaseTile from "../BaseTile/BaseTile";

const IMAGE_WIDTH = 1200;

export default ({ project }) => {
  const { uid, images, title } = project;
  return (
    <Link to={`/projects/${uid}/`}>
      <BaseTile
        caption={title}
        image={`${getPromotedImageUrl(images)}&w=${IMAGE_WIDTH}`}
      />
    </Link>
  );
};

function getPromotedImageUrl(images) {
  const { url } =
    images.find((image) => image.tags.includes("promoted")) || images[0];
  return url;
}
