// src/components/GifGrid.jsx

import { GifItem } from "./GifItem";

export function GifGrid({ gifs = [] }) {
  return (
    <div className="gif-grid">
      {gifs.map((gif) => (
        <GifItem
          key={gif.id}
          gif={gif}
        />
      ))}
    </div>
  );
}