import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import Main from "../Main/Main";
import Navigation from "../Navigation/Navigation";
import SavedNews from "../SavedNews/SavedNews";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import About from "../About/About";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SuccessSignupModal from "../SuccessSignupModal/SuccessSignupModal";
import { searchNews } from "../../utils/NewsApi";
import { checkToken, signUp, signIn } from "../../utils/auth";
import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [savedArticles, setSavedArticles] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [lastSearchTerm, setLastSearchTerm] = useState("");

  const handleSignInClick = () => {
    setActiveModal("sign-in");
  };

  const handleSignUpClick = () => {
    setActiveModal("sign-up");
  };

  const openSuccessModal = () => {
    setActiveModal("success");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleSearch = (query) => {
    setKeyword(query);
    setIsLoading(true);
    setSearchError("");
    setArticles([]);
    searchNews(query)
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((error) => {
        setSearchError(
          "Sorry, something went wrong during the request. Please try again later",
          error
        );
      })
      .finally(() => {
        setIsLoading(false);
        setHasSearched(true);
      });
  };

  const handleSignUpSubmit = async ({ email, password, username }) => {
    try {
      await signUp(email, password, username);
      setUserData({ email, password, username });
      closeActiveModal();
      openSuccessModal();
    } catch (err) {
      console.error("Sign up failed:", err);
    }
  };

  const handleSignInSubmit = async ({ email, password }) => {
    try {
      const { token, user } = await signIn(email, password);
      setUserData(user);
      setIsLoggedIn(true);
      localStorage.setItem("token", token);
    } catch (err) {
      console.error("Sign in failed:", err);
    }
  };

  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    setUserData({});
    navigate("/");
  };

  const handleToggleSave = (article, keyword) => {
    if(isLoggedIn) {
    setSavedArticles((prev) =>
      prev.some((a) => a.url === article.url)
        ? prev.filter((a) => a.url !== article.url)
        : [...prev, {...article, keyword: keyword}]
    );
    setKeyword(keyword);
  }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      checkToken(token)
        .then((user) => {
          setUserData(user);
          setIsLoggedIn(true);
        })
        .catch(() => {
          localStorage.removeItem("token");
          localStorage.removeItem("currentUser");
        });
    }
  }, []);

  useEffect(() => {
    if (!userData.email) return;
    localStorage.setItem(
      `savedArticles_${userData.email}`,
      JSON.stringify(savedArticles)
    );
  }, [savedArticles, userData.email]);

  useEffect(() => {
    if (!userData.email) return;
    const stored = localStorage.getItem(`savedArticles_${userData.email}`);
    setSavedArticles(stored ? JSON.parse(stored) : []);
  }, [userData.email]);

  return (
    <>
      <Routes>
        <Route
  path="/"
  element={
    <>
      <Header
        handleSignInClick={handleSignInClick}
        handleSearch={handleSearch}
        isLoggedIn={isLoggedIn}
        userData={userData}
        handleLogoutClick={handleLogoutClick}
        setLastSearchTerm={setLastSearchTerm}
        lastSearchTerm={lastSearchTerm}
      />
      {isLoading && <Preloader />}
      {hasSearched && !isLoading && (
        <Main
          articles={articles}
          hasSearched={hasSearched}
          visibleCount={visibleCount}
          setVisibleCount={setVisibleCount}
          handleToggleSave={handleToggleSave}
          savedArticles={savedArticles}
          keyword={keyword}
        />
      )}
      <About />
    </>
  }
/>
        <Route
          path="/saved-news"
          element={
            <ProtectedRoute
              handleSignUpClick={handleSignUpClick}
              isLoggedIn={isLoggedIn}
            >
              <Navigation
                handleSignInClick={handleSignInClick}
                isLoggedIn={isLoggedIn}
                userData={userData}
                handleLogoutClick={handleLogoutClick}
              />
              <SavedNews
                userData={userData}
                articles={articles}
                savedArticles={savedArticles}
                handleToggleSave={handleToggleSave}
              />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <LoginModal
        handleSignUpClick={handleSignUpClick}
        closeActiveModal={closeActiveModal}
        activeModal={activeModal === "sign-in"}
        handleSignInSubmit={handleSignInSubmit}
      />
      <RegisterModal
        handleSignInClick={handleSignInClick}
        closeActiveModal={closeActiveModal}
        activeModal={activeModal === "sign-up"}
        handleSignUpSubmit={handleSignUpSubmit}
      />
      <SuccessSignupModal
        handleSignInClick={handleSignInClick}
        closeActiveModal={closeActiveModal}
        activeModal={activeModal === "success"}
      />
    </>
  );
}

export default App;
