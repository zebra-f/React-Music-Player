import { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faStop,
  faAngleLeft,
  faAngleRight,
  faPause,
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
      ...playbackInfo,
      currentTime: currentTime,
      durationTime: durationTime,
    });
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setPlaybackInfo({ ...playbackInfo, currentTime: e.target.value });
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
