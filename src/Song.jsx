import React from "react";

const Song = ({ title, artist, albumCover }) => {
    return (
      <li className="song-item">
        <h2>{title}</h2>
        <p>{artist}</p>
        <img className="song-img" src={albumCover} alt={`${title} cover`} />
      </li>
    );
  };
  
  export default Song;
  