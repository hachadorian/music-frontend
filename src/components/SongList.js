import React from "react";

const SongList = ({ songs, setSong }) => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div>song name:</div>
        <div>song artist:</div>
      </div>
      <div className="flex flex-col cursor-pointer">
        {songs &&
          songs.map((song) => {
            return (
              <div
                key={song.id}
                className="grid grid-cols-2 my-5 bg-green-400"
                onClick={(e) => setSong(song)}
              >
                <div className="">{song.name}</div>
                <div className="">{song.artist.username}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SongList;
