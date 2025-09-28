import NewsCard from "../NewsCard/NewsCard";
import "./Main.css";
import notfoundpicture from "../../assets/notfoundpicture.svg";

function Main({
  articles,
  hasSearched,
  visibleCount,
  setVisibleCount,
  handleToggleSave,
  savedArticles,
  keyword
}) {
  const displayedArticles = articles.slice(0, visibleCount);
  const countIncrement = 3;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + countIncrement);
  };

  return (
    <div className={articles.length > 0 ? "main" : "main__notfound" }>
      <h2 className={articles.length > 0 ? "main__title" : "main__title_notfound" }>Search Results</h2>
      <div className="main__cards">
        {articles.length > 0 && hasSearched ? (
          displayedArticles.map((article, index) => (
            <NewsCard
              key={index}
              article={article}
              handleToggleSave={handleToggleSave}
              isSaved={savedArticles.some((a) => a.url === article.url)}
              keyword={keyword}
              savedArticles={savedArticles}
            />
          ))
        ) : (<div className="main__notfound">
        <img src={notfoundpicture} alt="Picture of not found logo" className="main__notfound-image" />
        <h3 className="main__notfound-title">Nothing found</h3>
        <p className="main__notfound-text">Sorry, but nothing matched your search terms.</p>
        </div>)
        }
      </div>
      <div className={!articles.length > 0 || visibleCount > 99 ? "main__button-container_disappear" : "main__button-container"}>
        <button onClick={handleShowMore} className="main__button">
          Show more
        </button>
      </div>
    </div>
  );
}

export default Main;
