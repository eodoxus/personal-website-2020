import React from "react";

import BaseTile from "../../tiles/BaseTile/BaseTile";
import TileList from "../../tiles/TileList/TileList";

export default ({ tiles }) => (
  <TileList>
    {tiles.map((tile, idx) => (
      <a href={tile.url} key={idx}>
        <BaseTile {...tile} />
      </a>
    ))}
  </TileList>
);
