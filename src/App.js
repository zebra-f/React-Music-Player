import { useState } from "react";

// styles
import "./styles/app.scss";
// components
import Player from "./components/Player";
import Song from "./components/Song";
import songData from "./utils";

function App() {
  const [songs, setSongs] = useState(songData());
  const [currentSong, setCurrentSong] = useState(songs[5]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
