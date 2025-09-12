import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header({ handleSearch, handleSignInClick }) {
  return (
    <div className="header">
      <div className="header__background">
        <Navigation handleSignInClick={handleSignInClick} />
        <div className="header__container">
          <div className="header__words">
            <h1 className="header__title">
              What&apos;s going on in the world?
            </h1>
            <p className="header__text">
              Find the latest news on any topic and save them in your personal
              account.
            </p>
          </div>
          <div className="header__search-bar">
          <SearchForm handleSearch={handleSearch} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
