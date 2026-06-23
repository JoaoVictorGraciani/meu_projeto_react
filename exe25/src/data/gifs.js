export const gifs = Array.from(
  { length: 30 },
  (_, i) => ({
    id: i + 1,
    title: `GIF ${i + 1}`,
    url: `https://picsum.photos/300/300?random=${i}`
  })
);