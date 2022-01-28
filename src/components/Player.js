import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faStop,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = () => {
  return (
    <div className="player-container">
      <div className="time-control">
        <p>00:21</p>
        <input type="range" />
        <p>04:32</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="left-icon" icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon className="play-icon" icon={faPlay} size="2x" />
        <FontAwesomeIcon className="stop-icon" icon={faStop} size="2x" />
        <FontAwesomeIcon className="right-icon" icon={faAngleRight} size="2x" />
      </div>
    </div>
  );
};

export default Player;
