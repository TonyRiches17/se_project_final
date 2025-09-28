import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import logouticon from "../../assets/logouticon.svg";
import logouticonblack from "../../assets/logouticonblack.svg";

function Navigation({ handleSignInClick, isLoggedIn, userData, handleLogoutClick }) {
  const location = useLocation();
  const savedNewsPage = location.pathname === "/saved-news";

  return (
    <div className={savedNewsPage ? "navigation_savednews" : "navigation"}>
      <p className="navigation__title">NewsExplorer</p>
      <div className="navigation__options">
        <Link to="/" type="button" className={savedNewsPage ? "navigation__options-home_savednews" : "navigation__options-home"}>
          Home
        </Link>
        <button
          onClick={handleSignInClick}
          type="button"
          className={
            isLoggedIn
              ? "navigation__options-signin_logged"
              : "navigation__options-signin"
          }
        >
          Sign in
        </button>
        <Link
        to="/saved-news"
          className={savedNewsPage ? "navigation__options-saved_logged_savednews" : isLoggedIn ? "navigation__options-saved_logged" : "navigation__options-saved"}
        >
          Saved articles
        </Link>
        <button
          onClick={handleLogoutClick}
          // className={
          //   isLoggedIn
          //     ? "navigation__options-username_logged"
          //     : "navigation__options-username"
          // }
          className={savedNewsPage ? "navigation__options-username_logged_savednews" : isLoggedIn ? "navigation__options-username_logged" : "navigation__options-username"}
        >
          {userData.username}
          <img src={savedNewsPage ? logouticonblack : logouticon} alt="Picture of a logout icon" className="navigation__options-username-logout" />
        </button>
      </div>
    </div>
  );
}

export default Navigation;
