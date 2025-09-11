import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import { searchNews } from "../../utils/NewsApi";


import './App.css'

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);


const handleSearch = (query) => {
  setIsLoading(true);
  setSearchError("");
  setArticles([]);
  searchNews(query)
  .then((data) => {
    console.log(data.articles);
  })
  .catch(error => {
    setSearchError("Sorry, something went wrong during the request. Please try again later", error);
  })
  .finally(() =>{
    setIsLoading(false);
    setHasSearched(true);
  });
};

  return (
    <>
<Header handleSearch={handleSearch} />
<Routes>
  <Route path="/saved-news" element={<Main />} />
</Routes>
<About />
<Footer />
    </>
  )
}

export default App
