import { useEffect, useState } from "react";
import { getCharacters } from "../services/api";

export function useCharacters() {
  const [characters, setCharacters] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadCharacters() {
      try {
        const data =
          await getCharacters();

        setCharacters(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadCharacters();
  }, []);

  return {
    characters,
    loading,
  };
}