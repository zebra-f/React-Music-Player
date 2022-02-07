import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = ({ libraryVStatus, setLibraryVStatus }) => {
  return (
    <div
      className={`nav-container ${libraryVStatus ? "nav-active-library" : ""}`}
    >
      <h1>R-Music</h1>
      <button
        onClick={() => {
          setLibraryVStatus(!libraryVStatus);
        }}
      >
        Library <FontAwesomeIcon icon={faCompactDisc} size="2x" />
      </button>
    </div>
  );
};

export default Nav;
