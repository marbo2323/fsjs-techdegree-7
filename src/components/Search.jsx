import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import SearchIcon from "./SearchIcon";

const Search = ({setSearchText}) => {
  const searchText = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = searchText.current.value;
    setSearchText(query);
    e.currentTarget.reset();
    const path = `search/${query}`;
    navigate(path);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input type="search" name="search" placeholder="Search" ref={searchText} required />
      <button type="submit" className="search-button">
        <SearchIcon/>
      </button>
    </form>
  );
};

export default Search;