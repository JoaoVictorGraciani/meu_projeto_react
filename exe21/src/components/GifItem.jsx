// src/components/GifItem.jsx

export function GifItem({ gif }) {
    return (
      <div className="gif-card">
        <img
          src={gif.images.original.url}
          alt={gif.title}
          width="250"
        />
      </div>
    );
  }