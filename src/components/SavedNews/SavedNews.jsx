import NewsCard from "../NewsCard/NewsCard";
import "./SavedNews.css";

function SavedNews({ userData, articles, savedArticles, handleToggleSave }) {
  const allKeywords = (savedArticles) => {
    if (!savedArticles.length) return "";
    const keywords = savedArticles.map((a) => a.keyword);
    const uniqueKeywords = [...new Set(keywords)];
    if (uniqueKeywords.length === 1) {
      return uniqueKeywords[0];
    }
    if (uniqueKeywords.length === 2) {
      return `${uniqueKeywords[0]}, ${uniqueKeywords[1]}`;
    }
    return `${uniqueKeywords[0]}, ${uniqueKeywords[1]}, and ${
      uniqueKeywords.length - 2
    } other${uniqueKeywords.length - 2 > 1 ? "s" : ""}`;
  };

  return (
    <>
      <div className="savednews">
        <p className="savednews__title">Saved articles</p>
        <h2 className="savednews__update">
          {userData.username}, you have {savedArticles.length} saved{" "}
          {savedArticles.length === 1 ? "article" : "articles"}
        </h2>
        <p className="savednews__keywords">
          By keywords:{" "}
          <span className="savednews__keywords-span">
            {allKeywords(savedArticles)}
          </span>
        </p>
      </div>
      <div className="savednews__main">
        <div className="savednews__articles">
          {savedArticles.map((article, index) => {
            return (
              <NewsCard
                key={index}
                article={article}
                handleToggleSave={handleToggleSave}
                isSaved={savedArticles.some((a) => a.url === article.url)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SavedNews;
