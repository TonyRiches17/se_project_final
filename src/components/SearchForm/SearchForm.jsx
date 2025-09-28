import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ handleSearch, lastSearchTerm, setLastSearchTerm }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (evt) => {
    setInputValue(evt.target.value);
    setLastSearchTerm(evt.target.value);
  }


  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    handleSearch(inputValue);
  }
  return (
    <>
      <form onSubmit={handleOnSubmit} className="searchform">
        <input
          placeholder="Enter topic"
          type="text"
          className="searchform__input"
          value={lastSearchTerm}
          onChange={handleInputChange}
        />
        <button type="submit" className="searchform__button">Search</button>
      </form>
    </>
  );
}

export default SearchForm;
