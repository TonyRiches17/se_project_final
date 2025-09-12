import NewsCard from "../NewsCard/NewsCard";
import "./Main.css";

function Main({ articles, visibleCount, setVisibleCount }) {

  const displayedArticles = articles.slice(0, visibleCount);
  const countIncrement = 3;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + countIncrement);
  };

  return (
    <div className="main">
      <h2 className="main__title">Search Results</h2>
      <div className="main__cards">
        {articles.length > 0 ? (
          displayedArticles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))
        ) : (
          <p>No articles found</p>
        )}
      </div>
      <div className="main__button-container">
        <button onClick={handleShowMore} className="main__button">
          Show more
        </button>
      </div>
    </div>
  );
}

export default Main;
