import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MediaGrid from "./components/MediaGrid";
import "./App.css";

export default function App() {

  
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    const mockData = [
      {
        id: "1a",
        title: "Cyberpunk City",
        url: "https://via.placeholder.com/300x200",
      },
      {
        id: "2b",
        title: "Neon Car",
        url: "https://via.placeholder.com/300x200",
      },
      {
        id: "3c",
        title: "Retro Synthwave",
        url: "https://via.placeholder.com/300x200",
      },
      {
        id: "4d",
        title: "Futuristic UI",
        url: "https://via.placeholder.com/300x200",
      },
    ];

    const filtered = mockData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);
  };

  return (
    <div className="app-container">
      <h1>🎬 Media Explorer</h1>

      <SearchBar onSearch={handleSearch} />

      <MediaGrid results={results} />
    </div>
  );
}