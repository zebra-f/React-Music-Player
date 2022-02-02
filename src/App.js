import { useState, useRef } from "react";

// styles
import "./styles/app.scss";
// components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import songData from "./utils";

function App() {
  // ref
  const audioRef = useRef(null);

  // <AUDIO> state
  const [playbackInfo, setPlaybackInfo] = useState({
    currentTime: 0,
    durationTime: null,
  });
  // <AUDIO> handler
  // WARNING WARNING WARNING
  // for now
  // <audio
  // onTimeUpdate={playbackInfoUpdateHandler}>
  // </audio>
  // is causing every fucntion here to run constantly
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
  const [currentSong, setCurrentSong] = useState(songs[5]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        playbackInfo={playbackInfo}
        setPlaybackInfo={setPlaybackInfo}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
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
