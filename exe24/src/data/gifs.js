export const gifs = Array.from({ length: 30 }, (_, index) => ({
  id: index + 1,
  title: `GIF ${index + 1}`,
  url: `https://picsum.photos/300/300?random=${index}`
}));