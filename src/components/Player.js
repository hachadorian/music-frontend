import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "../styles/styles.css";

const Player = ({ song }) => {
  return (
    <div className="h-full grid grid-cols-5">
      <div className="flex items-center pl-10">
        {song && (
          <div>
            <div className="text-white font-bold text-2xl">{song.name}</div>
            <div className="text-white text-lg">{song.artist.username}</div>
          </div>
        )}
      </div>
      <div className="col-span-4 flex items-center justify-center bg-zinc-900">
        <AudioPlayer src={song ? song.url : ""} customAdditionalControls={[]} />
      </div>
    </div>
  );
};

export default Player;
