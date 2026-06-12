export async function searchMovies(query) {
  const response = await fetch("https://ghibliapi.vercel.app/films");

  if (!response.ok) {
    throw new Error("Erro ao buscar filmes");
  }

  const movies = await response.json();

  // Busca dinâmica usando filter()
  return movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
}