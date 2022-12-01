import React from "react";
import Article from "./Article";

function ArticleItems({ items }) {
  return (
    <>
      {items.map((article) => (
        <Article
          key={article.id}
          title={article.Title}
          description={article.Description}
          date={new Date(article.Date).toLocaleString()}
        />
      ))}
    </>
  );
}

export default ArticleItems;
