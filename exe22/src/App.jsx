import { useBuscadorUsuarios } from "./hooks/useBuscadorUsuarios";
import "./App.css";

function App() {
  const {
    busca,
    setBusca,
    usuarios,
    isLoading,
    executarBusca,
  } = useBuscadorUsuarios();

  return (
    <main className="container">
      <h1>🛸 Buscador Rick and Morty</h1>

      <form onSubmit={executarBusca} className="formulario">
        <input
          type="text"
          placeholder="Digite Rick, Morty, Summer..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />

        <button type="submit">
          Buscar
        </button>
      </form>

      {isLoading ? (
        <h2>⏳ Procurando personagens...</h2>
      ) : (
        <div className="cards">
          {usuarios.map((personagem) => (
            <div className="card" key={personagem.id}>
              <img
                src={personagem.image}
                alt={personagem.name}
              />

              <h3>{personagem.name}</h3>

              <p>
                <strong>Espécie:</strong>{" "}
                {personagem.species}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {personagem.status}
              </p>

              <p>
                <strong>Origem:</strong>{" "}
                {personagem.origin.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default App;