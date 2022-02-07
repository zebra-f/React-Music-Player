const LibrarySong = ({
  song,
  songs,
  setSongs,
  setCurrentSong,
  isPlaying,
  audioRef,
}) => {
  // handlers
  const setCurrentSongHandler = () => {
    setCurrentSong(song);
    const newSongs = songs.map((s) => {
      if (song.id === s.id) {
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
  };

  return (
    <div
      className={`library-song-container ${song.active ? "selected" : ""}`}
      onClick={setCurrentSongHandler}
    >
      <img src={song.cover} alt={song.album} />
      <div className="artist-title">
        <h3>{song.title}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
