import React from "react";
import InputField from "../components/InputField";

const Search = ({ search, setSearch }) => {
  return (
    <div>
      <InputField
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
