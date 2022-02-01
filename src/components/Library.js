import LibrarySong from "./LibrarySong";

const Library = ({ songs }) => {
  return (
    <div className="library-container">
      <h2 id="library-title">Library</h2>
      <div className="library-songs">
        {songs.map((song) => {
          return <LibrarySong song={song} />;
        })}
      </div>
    </div>
  );
};

export default Library;
