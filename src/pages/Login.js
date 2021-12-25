import React from "react";
import { FaTwitch } from "react-icons/fa";

const Login = () => {
  return (
    <div className="md:w-1/2 lg:w-1/4">
      <a
        className="py-2 px-3 bg-indigo-600 text-white text-sm font-bold rounded-md shadow focus:outline-none flex flex-row justify-center"
        href="http://localhost:4000/auth/twitch"
      >
        <FaTwitch className="mt-1 mr-2" />
        Login with Twitch
      </a>
    </div>
  );
};

export default Login;
