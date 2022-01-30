import { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faStop,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, setCurrentSong, isPlaying, setIsPlaying }) => {
  // ref
  const audioRef = useRef(null);

  // event handlers
  const playButtonHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const playbackInfoUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const durationTime = e.target.duration;

    setPlaybackInfo({
      currentTime: currentTime,
      durationTime: durationTime,
    });
  };

  // state
  const [playbackInfo, setPlaybackInfo] = useState({
    currentTime: 0,
    durationTime: null,
  });

  // other
  const formatTime = (time) => {
    return (
      "0" +
      Math.floor(time / 60) +
      ":" +
      ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  return (
    <div className="player-container">
      <div className="time-control">
        <p>{formatTime(playbackInfo.currentTime)}</p>
        <input type="range" />
        <p>{formatTime(playbackInfo.durationTime)}</p>
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
      <audio
        ref={audioRef}
        src={currentSong.audio}
        onLoadedMetadata={playbackInfoUpdateHandler}
        onTimeUpdate={playbackInfoUpdateHandler}
      ></audio>
    </div>
  );
};

export default Player;
