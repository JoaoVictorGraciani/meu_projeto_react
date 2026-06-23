import {
  motion,
  AnimatePresence
} from "framer-motion";

export function FavoriteCharacters({
  favorites,
  removeFavorite
}) {
  return (
    <div>

      <h2>
        Personagens Favoritos ❤️
      </h2>

      <div className="grid">

        <AnimatePresence>

          {favorites.map(character => (

            <motion.div
              key={character.id}
              layout

              initial={{
                opacity: 0,
                y: 50
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              exit={{
                opacity: 0,
                scale: 0.8
              }}

              whileHover={{
                scale: 1.05
              }}
            >
              <img
                src={character.image}
                alt={character.name}
              />

              <h3>
                {character.name}
              </h3>

              <button
                onClick={() =>
                  removeFavorite(
                    character.id
                  )
                }
              >
                Remover
              </button>

            </motion.div>

          ))}

        </AnimatePresence>

      </div>

    </div>
  );
}