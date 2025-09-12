import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import { searchNews } from "../../utils/NewsApi";
import "./App.css";
import RegisterModal from "../RegisterModal/RegisterModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  const handleSignInClick = () => {
    setActiveModal("sign-in");
  };

  const handleSignUpClick = () => {
    setActiveModal("sign-up");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleSearch = (query) => {
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

  return (
    <>
      <Header handleSignInClick={handleSignInClick} handleSearch={handleSearch} />
      {!isLoading ? "" : <Preloader />}
      {!hasSearched ? (
        ""
      ) : (
        <Main
          articles={articles}
          visibleCount={visibleCount}
          setVisibleCount={setVisibleCount}
        />
      )}
      <Routes>
        <Route path="/saved-news" element={<Main />} />
      </Routes>
      <About />
      <Footer />
      <LoginModal
        handleSignUpClick={handleSignUpClick}
        closeActiveModal={closeActiveModal}
        activeModal={activeModal === "sign-in"}
      />
      <RegisterModal
      handleSignInClick={handleSignInClick}
      closeActiveModal={closeActiveModal}
      activeModal={activeModal === "sign-up"}
      />
    </>
  );
}

export default App;
