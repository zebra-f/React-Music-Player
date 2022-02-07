import { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  playbackInfo,
  setPlaybackInfo,
}) => {
  // use effect
  useEffect(() => {
    const newSongs = songs.map((s) => {
      if (currentSong.id === s.id) {
        return { ...s, active: true };
      } else {
        return { ...s, active: false };
      }
    });
    setSongs(newSongs);

    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          audioRef.current.play();
        });
      }
    }
  }, [currentSong]);

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

  const skipHandler = (direction) => {
    // const dsds = (element) => element.id === currentSong.id;
    const idx = songs.findIndex((element) => element.id === currentSong.id);

    if (direction === "left") {
      if (idx - 1 === -1) {
        setCurrentSong(songs[songs.length - 1]);
      } else {
        setCurrentSong(songs[(idx - 1) % songs.length]);
      }
    }
    if (direction === "right") {
      setCurrentSong(songs[(idx + 1) % songs.length]);
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
        <FontAwesomeIcon
          className="left-icon"
          onClick={() => skipHandler("left")}
          icon={faAngleLeft}
          size="2x"
        />
        <FontAwesomeIcon
          className="play-icon"
          onClick={playButtonHandler}
          icon={isPlaying ? faPause : faPlay}
          size="2x"
        />
        <FontAwesomeIcon
          className="right-icon"
          onClick={() => skipHandler("right")}
          icon={faAngleRight}
          size="2x"
        />
      </div>
    </div>
  );
};

export default Player;
