import {
  motion,
  useInView
} from "framer-motion";

import { useRef } from "react";

import { CharacterCard } from "./CharacterCard";

import { gridVariants } from "../animations/characterVariants";

export function CharacterGrid({
  characters,
  onFavorite
}) {

  const ref = useRef(null);

  const isInView = useInView(
    ref,
    {
      once: true
    }
  );

  return (
    <motion.div
      ref={ref}
      className="grid"
      variants={gridVariants}
      initial="hidden"
      animate={
        isInView
          ? "visible"
          : "hidden"
      }
    >
      {characters.map(character => (
        <CharacterCard
          key={character.id}
          character={character}
          onFavorite={onFavorite}
        />
      ))}
    </motion.div>
  );
}