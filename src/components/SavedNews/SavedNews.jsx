import NewsCard from "../NewsCard/NewsCard";
import "./SavedNews.css";

function SavedNews({ userData, articles, savedArticles, handleToggleSave }) {

const allKeywords = () => {
    if(savedArticles.length > 2) {
      return `${savedArticles[0].keyword}, ${savedArticles[1].keyword}, and ${savedArticles.length - 2} ${savedArticles.length === 3 ? "other" : "others"}`;
    }
    return savedArticles.map(a => a.keyword).join(", ");

};

  return (
    <div className="savednews">
      <p className="savednews__title">Saved articles</p>
      <h2 className="savednews__update">{userData.username}, you have {savedArticles.length} saved {savedArticles.length === 1 ? "article" : "articles"}</h2>
      <p className="savednews__keywords">By keywords: {allKeywords()} </p>
      <div className="savednews__articles">{savedArticles.map((article, index) => {
        return <NewsCard key={index} article={article} handleToggleSave={handleToggleSave} isSaved={savedArticles.some((a) => a.url === article.url)} />
      })}</div>
    </div>
  )
}

export default SavedNews;