import { GifGrid } from "./components/GifGrid";
import { gifs } from "./data/gifs";

function App() {
  return (
    <div>
      <h1>Galeria Animada de GIFs</h1>

      <GifGrid gifs={gifs} />
    </div>
  );
}

export default App;