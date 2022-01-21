import React from "react";

const Genre = ({ genre, setGenre }) => {
  const backGroundStyle = {
    backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
  };

  return (
    <div
      style={backGroundStyle}
      className="h-36 cursor-pointer w-36 rounded-lg flex items-center justify-center mr-6 drop-shadow-xl"
      onClick={setGenre}
    >
      <div>{genre}</div>
    </div>
  );
};

export default Genre;
