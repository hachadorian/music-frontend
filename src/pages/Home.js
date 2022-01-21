import React, { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import Loader from "../components/Loader";
import { useQuery } from "@apollo/client";
import { GETALLSONGS_QUERY } from "../graphql/queries/getAllSongs";
import Player from "../components/Player";
import { HashLink as Link } from "react-router-hash-link";
import { Route } from "react-router-dom";
import Upload from "./Upload";
import { GETALLGENRES_QUERY } from "../graphql/queries/getAllGenres";
import GenreList from "../components/GenreList";
import Search from "./Search";
import SongList from "../components/SongList";
import Genre from "./Genre";
import CreatePlaylist from "./CreatePlaylist";

const Home = () => {
  const user = useContext(UserContext);
  const songs = useQuery(GETALLSONGS_QUERY);
  const genres = useQuery(GETALLGENRES_QUERY);
  const [song, setSong] = useState("");
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");

  const filteredSongs =
    search === ""
      ? songs.data
      : songs.data.getAllSongs.filter((song) =>
          song.name.toLowerCase().includes(search.toLowerCase())
        );

  if (!user || songs.loading || genres.loading) return <Loader />;
  return (
    <div className="h-screen grid grid-cols-5 grid-rows-6">
      <div className="col-span-1 row-span-5 bg-zinc-900 text-white text-lg font-bold px-8 pt-6">
        <div className="py-1">
          <Link to="/home">Home</Link>
        </div>
        <div className="py-1">
          <Link to="/search">Search</Link>
        </div>
        <div className="pt-1 pb-4 border-b">
          <Link to="/upload">Upload</Link>
        </div>
        <div className="py-1">
          <Link to="/create-playlist">Create Playlist</Link>
        </div>
        <div className="pt-1 pb-4 border-b">
          <Link to="/upload">Liked Songs</Link>
        </div>
      </div>
      <div className="overflow-auto col-span-4 row-span-5 bg-zinc-800 pt-6 pl-12">
        <Route exact path="/home">
          <div className="grid"></div>
          <GenreList genres={genres.data.getAllGenres} setGenre={setGenre} />
        </Route>
        <Route exact path="/upload">
          <div className="flex justify-center items-center">
            <Upload />
          </div>
        </Route>
        <Route exact path="/search">
          <div className="flex justify-center flex-col px-12">
            <Search search={search} setSearch={setSearch} />
            {search !== "" && (
              <div>
                <SongList
                  songs={filteredSongs}
                  setSong={setSong}
                  search={search}
                />
              </div>
            )}
          </div>
        </Route>
        <Route exact path="/genre">
          <div className="flex justify-center flex-col px-12">
            <Genre songs={songs.data} genre={genre} setSong={setSong} />
          </div>
        </Route>
        <Route exact path="/create-playlist">
          <CreatePlaylist />
        </Route>
      </div>
      <div className="col-span-5 bg-zinc-900 border-t">
        <Player song={song} />
      </div>
    </div>
  );
};

export default Home;
