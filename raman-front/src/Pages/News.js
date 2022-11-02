import React, { useState, useEffect } from 'react';
import Article from "../Components/Article";
import Api from "../Utility/api";

function News() {
  const [Articles, setArticles] = useState([]);

  useEffect(() => {
    Api.getArticles().then((data)=>{
      setArticles(data);
    })
  }, []);

  return (
    <div className="News">
      <h2>NEWS</h2>
      {Articles.map((article)=>(
        <Article key={article.Title} title={article.Title} description={article.Description} date={article.Date}/>)
      )}
    </div>
  );
}

export default News;