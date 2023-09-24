import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import HousesPage from "./pages/HousesPage";
import GamePage from "./pages/GamePage";
import theme from "./assets/theme audio.mp3";
import { useRef } from "react";
import StoryPage from "./pages/StoryPage";

function App() {
  const audioRef = useRef(null);

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <audio src={theme} loop ref={audioRef} />
        <button
          type="button"
          title="play"
          className="rounded"
          onClick={handleClick}
        >
          Start
        </button>
        <button
          type="button"
          title="pause"
          className="rounded"
          onClick={handlePause}
        >
          Pause
        </button>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/houses" element={<HousesPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/story" element={<StoryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
