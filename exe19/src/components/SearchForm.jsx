import { useState } from "react";

export function SearchForm({ onSearchSubmit }) {
  const [term, setTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const sanitizedTerm = term.trim();

    if (!sanitizedTerm) return;

    onSearchSubmit(sanitizedTerm);

    setTerm("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Digite o nome do filme..."
      />

      <button type="submit">
        Buscar
      </button>
    </form>
  );
}