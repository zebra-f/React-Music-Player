const Song = ({ currentSong }) => {
  return (
    <div className="song-container">
      <img src={currentSong.cover} alt={currentSong.album} />
      <h2>{currentSong.artist}</h2>
      <h3>{currentSong.title}</h3>
    </div>
  );
};

export default Song;
