import "./NewsCard.css";

function NewsCard({ article, index }) {

  return(
    <div className="newscard__container">
      <div key={index} className="newscard">
            <img src={article.urlToImage} alt={article.title} className="newscard__image" />
            <p className="newscard__date">{article.publishedAt.split("T")[0]}</p>
            <h3 className="newscard__title">{article.title}</h3>
            <p className="newscard__description">{article.description}</p>
            <p className="newscard__source">{article.source.name}</p>
          </div>
    </div>
  )
}

export default NewsCard;