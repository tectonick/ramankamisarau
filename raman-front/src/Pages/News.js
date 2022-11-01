import React, { useState, useEffect } from 'react';
import Article from "../Components/Article";

function News() {
  const [Articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles([
      {
        title:"Città di Cantù 30th International Piano and Orchestra Competition",
        description:`Raman Kamisarau won the Città di Cantù 30th International Piano and Orchestra Competition, \
        Italy. In the category "Romantic Concerto" he performed Rachmaninoff's 2nd Concerto with great success.`,
        date:"07.05.2022"
      }, {title:"news2", description:"desc2", date:"14.12.2023"}
  ])
  }, []);

  return (
    <div className="News">
      <h2>NEWS</h2>
      {Articles.map((article)=>(
        <Article title={article.title} description={article.description} date={article.date}/>)
      )}
    </div>
  );
}

export default News;