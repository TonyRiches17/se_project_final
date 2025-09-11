import "./SearchForm.css";

function SearchForm( {handleSearch }) {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    handleSearch("shoes");
  }
  return (
    <>
      <form onSubmit={handleOnSubmit} className="searchform">
        <input
          placeholder="Enter topic"
          type="text"
          className="searchform__input"
        />
        <button type="submit" className="searchform__button">Search</button>
      </form>
    </>
  );
}

export default SearchForm;
