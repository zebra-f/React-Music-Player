import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setSongs,
  setCurrentSong,
  setIsPlaying,
  audioRef,
  isPlaying,
}) => {
  return (
    <div className="library-container">
      <h2 id="library-title">Library</h2>
      <div className="library-songs">
        {songs.map((song) => {
          console.log(2);
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
