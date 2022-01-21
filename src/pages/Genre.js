import React from "react";
import SongList from "../components/SongList";

const Genre = ({ songs, genre, setSong }) => {
  const filteredSongs = songs.getAllSongs.filter(
    (song) => song.genre === genre
  );

  return (
    <div className="flex flex-col py-4">
      <div className="text-white font-bold text-3xl">{genre}:</div>
      <SongList songs={filteredSongs} setSong={setSong} />
    </div>
  );
};

export default Genre;
