const LibrarySong = ({
  song,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
}) => {
  // handlers
  const setCurrentSongHandler = () => {
    setCurrentSong(song);
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          audioRef.current.play();
        });
      }
    }
  };

  return (
    <div className="library-song-container" onClick={setCurrentSongHandler}>
      <img src={song.cover} alt={song.album} />
      <div className="artist-title">
        <h3>{song.title}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
