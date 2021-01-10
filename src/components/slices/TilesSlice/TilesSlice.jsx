import React from "react";
import { Link } from "@reach/router";

import BaseTile from "../../tiles/BaseTile/BaseTile";
import TileList from "../../tiles/TileList/TileList";

export default ({ tiles }) => (
  <TileList>
    {tiles.map((tile, idx) => (
      <Link to={tile.url} key={idx}>
        <BaseTile {...tile} />
      </Link>
    ))}
  </TileList>
);
