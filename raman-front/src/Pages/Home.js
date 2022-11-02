import React, { useState, useEffect } from 'react';
import Concert from "../Components/Concert";
import Article from "../Components/Article";
import Api from "../Utility/api";

function Home() {
    const [LatestArticle, setLatestArticle] = useState({});
    const [LatestConcert, setLatestConcert] = useState({});

    useEffect(() => {
        Api.getLastConcert().then((data)=>{
            setLatestConcert(data);
        })
        Api.getLastArticle().then((data)=>{
            setLatestArticle(data);
        })
    }, []);
  return (
    <div className="Home">
        <h1>Raman Kamisarau</h1> 
        <h2>Pianist</h2>
        {LatestConcert && <Concert title={LatestConcert.Title} place={LatestConcert.Place} description={LatestConcert.Description} date={LatestConcert.Date} link={"/concerts"}/>}
        {LatestArticle && <Article title={LatestArticle.Title} description={LatestArticle.Description} date={LatestArticle.Date} link={"/news"}/>}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/xFHpvXL9Cvg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
}

export default Home;
