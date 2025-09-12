import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ handleSearch }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (evt) => {
    setInputValue(evt.target.value);
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
          onChange={handleInputChange}
        />
        <button type="submit" className="searchform__button">Search</button>
      </form>
    </>
  );
}

export default SearchForm;
