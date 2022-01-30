import { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faStop,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, setCurrentSong, isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null);

  const playButtonHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="player-container">
      <div className="time-control">
        <p>00:21</p>
        <input type="range" />
        <p>04:32</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="left-icon" icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon
          className="play-icon"
          onClick={playButtonHandler}
          icon={faPlay}
          size="2x"
        />
        <FontAwesomeIcon className="stop-icon" icon={faStop} size="2x" />
        <FontAwesomeIcon className="right-icon" icon={faAngleRight} size="2x" />
      </div>
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
};

export default Player;
