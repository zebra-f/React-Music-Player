import { useState, useRef } from "react";

// styles
import "./styles/app.scss";
// components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
import songData from "./musicData";

function App() {
  // ref
  const audioRef = useRef(null);

  // <AUDIO> state
  const [playbackInfo, setPlaybackInfo] = useState({
    currentTime: 0,
    durationTime: null,
  });
  // <AUDIO> handler
  const playbackInfoUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const durationTime = e.target.duration;

    setPlaybackInfo({
      ...playbackInfo,
      currentTime: currentTime,
      durationTime: durationTime,
    });
  };
  const [songs, setSongs] = useState(songData());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  // library visibility status
  const [libraryVStatus, setLibraryVStatus] = useState(false);

  return (
    <div className="App">
      <Nav
        libraryVStatus={libraryVStatus}
        setLibraryVStatus={setLibraryVStatus}
      />
      <Song currentSong={currentSong} />
      <Player
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        playbackInfo={playbackInfo}
        setPlaybackInfo={setPlaybackInfo}
      />
      <Library
        audioRef={audioRef}
        libraryVStatus={libraryVStatus}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />

      {/* _ */}
      <audio
        ref={audioRef}
        src={currentSong.audio}
        onLoadedMetadata={playbackInfoUpdateHandler}
        onTimeUpdate={playbackInfoUpdateHandler}
      ></audio>
    </div>
  );
}

export default App;
