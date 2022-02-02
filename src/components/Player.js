import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  isPlaying,
  setIsPlaying,
  audioRef,
  playbackInfo,
  setPlaybackInfo,
}) => {
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

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setPlaybackInfo({ ...playbackInfo, currentTime: e.target.value });
  };

  // other
  const formatTime = (time) => {
    return (
      ("0" + Math.floor(time / 60)).slice(-2) +
      ":" +
      ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  return (
    <div className="player-container">
      <div className="time-control">
        <p>{formatTime(playbackInfo.currentTime)}</p>
        <input
          min={0}
          max={playbackInfo.durationTime}
          value={playbackInfo.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <p>{formatTime(playbackInfo.durationTime)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="left-icon" icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon
          className="play-icon"
          onClick={playButtonHandler}
          icon={isPlaying ? faPause : faPlay}
          size="2x"
        />
        <FontAwesomeIcon className="right-icon" icon={faAngleRight} size="2x" />
      </div>
    </div>
  );
};

export default Player;
