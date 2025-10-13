import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";
import logoutIcon from "../../assets/logouticon.svg";
import logoutIconBlack from "../../assets/logouticonblack.svg";
import menu from "../../assets/menu.svg";
import menuclose from "../../assets/menuclose.svg";
import menublack from "../../assets/menublack.svg";
import { useState } from "react";

function Navigation({
  handleSignInClick,
  isLoggedIn,
  userData,
  handleLogoutClick,
}) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClicking = () => {
    setIsClicked(!isClicked);
  };

  const handleSignInAndOut = () => {
    if (!isLoggedIn) {
      handleSignInClick();
      setIsClicked(true);
    }
    handleLogoutClick();
    setIsClicked(true);
  };

  const location = useLocation();
  const savedNewsPage = location.pathname === "/saved-news";

  return (
    <div className={savedNewsPage ? "navigation_savednews" : "navigation"}>
      <div
        className={
          isClicked
            ? "navigation__options-menu-dropdown-overlay"
            : "navigation__options-menu-dropdown-overlay-disappear"
        }
      >
        <div
          className={
            isClicked
              ? "navigation__options-menu-dropdown"
              : "navigation__options-menu-dropdown_disappear"
          }
        >
          <p
            className={
              savedNewsPage
                ? "navigation__dropdown-title_saved"
                : "navigation__dropdown-title"
            }
          >
            NewsExplorer
          </p>
          <div className="navigation__dropdown-underline"></div>
          <Link to="/reset" type="button" className="navigation__dropdown-home">
            Home
          </Link>
          <Link
            to="saved-news"
            type="button"
            className={
              savedNewsPage
                ? "navigation__dropdown-savednews_disappear"
                : isLoggedIn
                ? "navigation__dropdown-savednews"
                : "navigation__dropdown-savednews_disappear"
            }
          >
            Saved news
          </Link>
          <button
            type="button"
            onClick={handleSignInAndOut}
            className="navigation__dropdown-button"
          >
            {isLoggedIn ? "Log out" : "Sign in"}
          </button>
        </div>
      </div>
      <p className="navigation__title">NewsExplorer</p>
      <div
        className={
          isLoggedIn ? "navigation__options_logged" : "navigation__options"
        }
      >
        <Link
          to="/"
          type="button"
          className={
            savedNewsPage
              ? "navigation__options-home_savednews"
              : "navigation__options-home"
          }
        >
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
          className={
            savedNewsPage
              ? "navigation__options-saved_logged_savednews"
              : isLoggedIn
              ? "navigation__options-saved_logged"
              : "navigation__options-saved"
          }
        >
          Saved articles
        </Link>
        <button
          onClick={handleLogoutClick}
          type="button"
          className={
            savedNewsPage
              ? "navigation__options-username_logged_savednews"
              : isLoggedIn
              ? "navigation__options-username_logged"
              : "navigation__options-username"
          }
        >
          {userData.username}
          <img
            src={savedNewsPage ? logoutIconBlack : logoutIcon}
            alt="Picture of a logout icon"
            className="navigation__options-username-logout"
          />
        </button>
      </div>
      <button
        type="button"
        onClick={handleClicking}
        className="navigation__options-menu-button"
      >
        <img
          src={savedNewsPage ? menublack : isClicked ? menuclose : menu}
          alt={
            isClicked
              ? "Picture of a menu close button"
              : "Picture of a menu button"
          }
          className={
            savedNewsPage && isClicked
              ? "navigation__options-menu-image_saved"
              : isClicked
              ? "navigation__options-menu-image_clicked"
              : "navigation__options-menu-image"
          }
        />
      </button>
    </div>
  );
}

export default Navigation;
