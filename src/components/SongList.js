import React from "react";
import ContextMenu from "./ContextMenu";

const SongList = ({ songs, setSong }) => {
  return (
    <div>
      <div className="flex flex-col cursor-pointer">
        {songs &&
          songs.map((song) => {
            return (
              <ContextMenu>
                <div
                  key={song.id}
                  className="flex flex-col py-5"
                  onClick={(e) => setSong(song)}
                >
                  <div className="text-white font-bold text-xl">
                    {song.name}
                  </div>
                  <div className="text-white">{song.artist.username}</div>
                </div>
              </ContextMenu>
            );
          })}
      </div>
    </div>
  );
};

export default SongList;
