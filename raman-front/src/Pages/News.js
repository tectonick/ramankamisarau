import React, { useState, useEffect } from 'react';
import ArticleItems from "../Components/ArticleItems";
import Api from "../Utility/api";
import PaginatedItems from "../Components/PaginatedItems";


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
      {Articles.length > 0 ? <PaginatedItems Type={ArticleItems} items={Articles}/>: <p>Nothing for now. Stay tuned for updates.</p>}
    </div>
  );
}

export default News;