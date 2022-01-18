import React, { useContext } from "react";
import UserContext from "../utils/UserContext";
import Loader from "../components/Loader";

const Home = () => {
  const user = useContext(UserContext);

  if (!user) return <Loader />;
  return <div>{user.username}</div>;
};

export default Home;
