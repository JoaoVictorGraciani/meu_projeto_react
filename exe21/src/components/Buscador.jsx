// src/components/Buscador.jsx

export function Buscador({
  valorInput,
  onChange,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={valorInput}
        onChange={onChange}
        placeholder="Buscar GIFs..."
      />

      <button type="submit">
        Buscar
      </button>
    </form>
  );
}