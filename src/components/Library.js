import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setSongs,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  libraryVStatus,
}) => {
  return (
    <div
      className={`library-container ${libraryVStatus ? "active-library" : ""}`}
    >
      <h2 id="library-title">Library</h2>
      <div className="library-songs">
        {songs.map((song) => {
          return (
            <LibrarySong
              song={song}
              songs={songs}
              setSongs={setSongs}
              setCurrentSong={setCurrentSong}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              audioRef={audioRef}
              key={song.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Library;
