const LibrarySong = ({ song }) => {
  return (
    <div className="library-song-container">
      <img src={song.cover} alt={song.album} />
      <div className="artist-title">
        <h3>{song.title}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
