import React from "react";
import Genre from "./Genre";
import { useHistory } from "react-router-dom";

const GenreList = ({ genres, setGenre }) => {
  const history = useHistory();

  return (
    <div className="font-bold text-white text-xl">
      <div className="mb-4">Genres:</div>
      <div className="flex">
        {genres.map((genre) => {
          return (
            <Genre
              key={genre.genre}
              genre={genre.genre}
              setGenre={(e) => {
                setGenre(genre.genre);
                history.push("/genre");
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GenreList;
