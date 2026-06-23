import { motion } from "framer-motion";
import { itemVariants } from "../animations/characterVariants";

export function CharacterCard({
  character,
  onFavorite
}) {
  return (
    <motion.div
      className="card"
      variants={itemVariants}
      whileHover={{
        scale: 1.05
      }}
    >
      <img
        src={character.image}
        alt={character.name}
      />

      <h3>{character.name}</h3>

      <p>Status: {character.status}</p>

      <button
        onClick={() =>
          onFavorite(character)
        }
      >
        ❤️ Favoritar
      </button>
    </motion.div>
  );
}