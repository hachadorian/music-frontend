import React, { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import Loader from "../components/Loader";
import { useQuery } from "@apollo/client";
import { GETALLSONGS_QUERY } from "../graphql/queries/getAllSongs";
import SongList from "../components/SongList";
import Player from "../components/Player";
import { HashLink as Link } from "react-router-hash-link";
import { Route } from "react-router-dom";
import Upload from "./Upload";
import { GETALLGENRES_QUERY } from "../graphql/queries/getAllGenres";
import GenreList from "../components/GenreList";

const Home = () => {
  const user = useContext(UserContext);
  const songs = useQuery(GETALLSONGS_QUERY);
  const genres = useQuery(GETALLGENRES_QUERY);
  const [song, setSong] = useState("");

  if (!user || songs.loading || genres.loading) return <Loader />;
  return (
    <div className="h-screen grid grid-cols-5 grid-rows-6">
      <div className="col-span-1 row-span-5 bg-zinc-900 text-white text-xl font-bold">
        <div className="py-1 px-4">
          <Link to="/home">Home</Link>
        </div>
        <div className="py-1 px-4">
          <Link to="/upload">Upload</Link>
        </div>
        <div className="py-1 px-4">
          <Link to="/upload">Search</Link>
        </div>
      </div>
      <div className="overflow-auto col-span-4 row-span-5 bg-zinc-800">
        <Route exact path="/home">
          <div className="grid "></div>
          <GenreList genres={genres.data.getAllGenres} />
        </Route>
        <Route exact path="/upload">
          <div className="flex justify-center">
            <Upload />
          </div>
        </Route>
      </div>
      <div className="col-span-5 bg-zinc-900 drop-shadow-md">
        <Player song={song} />
      </div>
    </div>
  );
};

export default Home;
