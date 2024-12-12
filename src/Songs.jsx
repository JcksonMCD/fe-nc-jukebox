import React from "react";

const Song = ({ songs, currentlyPlaying }) => {
  return (
    <ol className="song-list">
      {songs.map((song, index) => (
        <li
          className={`song-item ${
            index === currentlyPlaying ? "playing" : ""
          }`}
          key={song.id}
        >
          <h2>{song.title}</h2>
          <p>{song.artist}</p>
          <img
            className="song-image"
            src={song.albumCover}
            alt={`${song.title} cover`}
          />
          {index === currentlyPlaying && <p className="song-current">Now Playing</p>}
        </li>
      ))}
    </ol>
  );
};

export default Song;
