import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";

const Test = () => {
  const { user } = useContext(UserContext);
  return <div>{user.username} is logged in</div>;
};

export default Test;
