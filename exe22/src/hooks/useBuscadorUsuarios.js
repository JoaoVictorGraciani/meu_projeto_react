import { useState } from "react";

const fetchUsuarios = async (nome) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${nome}`
  );

  if (!response.ok) {
    throw new Error("Personagem não encontrado");
  }

  const data = await response.json();

  return data.results;
};

export function useBuscadorUsuarios() {
  const [busca, setBusca] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const executarBusca = async (e) => {
    e.preventDefault();

    if (!busca.trim()) return;

    setIsLoading(true);

    try {
      const resultados = await fetchUsuarios(busca);
      setUsuarios(resultados);
    } catch (error) {
      console.error("Erro:", error);
      setUsuarios([]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    busca,
    setBusca,
    usuarios,
    isLoading,
    executarBusca,
  };
}