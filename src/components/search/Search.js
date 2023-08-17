import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserSearchInput } from "../../store/search-slice";
import "./SearchBar.css"; // Make sure to create this CSS file

const SearchBar = ({ onSearch }) => {
  const [userInput, setUserInput] = useState("");
  const dispatch = useDispatch()

  const handleSearch = (event) => {
    const value = event.target.value;
    setUserInput(value);
  };
  const handleUserInput = () => {
    dispatch(setUserSearchInput(userInput))
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={userInput}
        onChange={handleSearch}
      />
      <button className="search-button" onClick={handleUserInput}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
