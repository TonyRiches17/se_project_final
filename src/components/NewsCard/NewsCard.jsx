import { useLocation } from "react-router-dom";
import "./NewsCard.css";

function NewsCard({
  article,
  index,
  handleToggleSave,
  isSaved,
  keyword,
  savedArticles,
  isLoggedIn,
}) {
  const handleTravelToUrl = () => {
    window.open(article.url, "_blank");
  };

  const location = useLocation();
  const savedNewsPage = location.pathname === "/saved-news";

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <div className="newscard__container">
      <div onClick={handleTravelToUrl} key={index} className="newscard">
        <img
          src={article.urlToImage}
          alt={article.title}
          className="newscard__image"
        />
        <div
          className={
            savedNewsPage
              ? "newscard__keyword-container"
              : "newscard__keyword-container_disabled"
          }
        >
          {savedNewsPage && article.keyword && (
            <p className="newscard__keyword">{article.keyword}</p>
          )}
        </div>
        <div
          onClick={(evt) => evt.stopPropagation()}
          className="newscard__icon-and-tooltip"
        >
          <button
            onClick={() => handleToggleSave(article, keyword)}
            type="button"
            className={
              savedNewsPage
                ? "newscard__trashcan"
                : isSaved
                ? "newscard__bookmark_clicked"
                : "newscard__bookmark"
            }
          ></button>
          <span
            className={
              isLoggedIn && !savedNewsPage
                ? "newscard__tooltip_disabled"
                : "newscard__tooltip"
            }
          >
            {!isLoggedIn && !savedNewsPage
              ? "Sign in to save articles"
              : "Remove from saved"}
          </span>
        </div>
        <p className="newscard__date">
          {formatDate(article.publishedAt.split("T")[0])}
        </p>
        <h3 className="newscard__title">{article.title}</h3>
        <p className="newscard__description">{article.description}</p>
        <p className="newscard__source">{article.source.name.toUpperCase()}</p>
      </div>
    </div>
  );
}

export default NewsCard;
