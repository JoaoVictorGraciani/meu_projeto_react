import { useState } from "react";

import { useCharacters }
from "./hooks/useCharacters";

import { CharacterGrid }
from "./components/CharacterGrid";

import { FavoriteCharacters }
from "./components/FavoriteCharacters";

function App() {

  const {
    characters,
    loading
  } = useCharacters();

  const [favorites,
    setFavorites] = useState([]);

  function addFavorite(
    character
  ) {
    setFavorites(prev => {

      const exists =
        prev.some(
          fav =>
            fav.id ===
            character.id
        );

      if (exists)
        return prev;

      return [
        ...prev,
        character
      ];
    });
  }

  function removeFavorite(id) {
    setFavorites(prev =>
      prev.filter(
        fav =>
          fav.id !== id
      )
    );
  }

  if (loading)
    return <h2>Carregando...</h2>;

  return (
    <div>

      <h1>
        Rick and Morty Explorer
      </h1>

      <CharacterGrid
        characters={characters}
        onFavorite={addFavorite}
      />

      <hr />

      <FavoriteCharacters
        favorites={favorites}
        removeFavorite={
          removeFavorite
        }
      />

    </div>
  );
}

export default App;