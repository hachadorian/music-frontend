import React from "react";
import Genre from "./Genre";

const GenreList = ({ genres }) => {
  return (
    <div className="font-bold text-white text-xl">
      <div className="mb-4">Genres:</div>
      <div className="flex">
        {genres.map((genre) => {
          return <Genre key={genre.genre} genre={genre.genre} />;
        })}
      </div>
    </div>
  );
};

export default GenreList;
