import { useState } from "react";
import { SearchForm } from "./components/SearchForm";
import { searchMovies } from "./services/movieService";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (term) => {
    try {
      setLoading(true);

      const result = await searchMovies(term);

      setMovies(result);
    } catch (error) {
      console.error(error);
      alert("Erro ao buscar filmes.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>MovieFinder</h1>

      <SearchForm onSearchSubmit={handleSearch} />

      {loading && <p>Carregando...</p>}

      {!loading && movies.length === 0 && (
        <p>Nenhum filme encontrado.</p>
      )}

      {!loading &&
        movies.map((movie) => (
          <div
            key={movie.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginTop: "10px",
            }}
          >
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
          </div>
        ))}
    </div>
  );
}

export default App;