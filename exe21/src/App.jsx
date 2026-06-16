import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { GifGrid } from "./components/GifGrid";

export default function App() {
  const [valorInput, setValorInput] = useState("");
  const [gifs, setGifs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (valorInput.trim().length <= 1) return;

    const novoGif = {
      id: Date.now(),
      title: valorInput,
      images: {
        original: {
          url: `https://via.placeholder.com/250?text=${valorInput}`,
        },
      },
    };

    setGifs([novoGif, ...gifs]);
    setValorInput("");
  };

  return (
    <main style={{ padding: "20px" }}>
      <h1>Gif App - Enterprise Architecture</h1>

      <Buscador
        valorInput={valorInput}
        onChange={(e) =>
          setValorInput(e.target.value)
        }
        onSubmit={handleSubmit}
      />

      <GifGrid gifs={gifs} />
    </main>
  );
}