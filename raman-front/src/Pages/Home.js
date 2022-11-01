import React, { useState, useEffect } from 'react';
import Concert from "../Components/Concert";
import Article from "../Components/Article";

function Home() {
    const [LatestArticle, setLatestArticle] = useState({});
    const [LatestConcert, setLatestConcert] = useState({});

    useEffect(() => {
        setLatestArticle(
            {
                title:"Città di Cantù 30th International Piano and Orchestra Competition",
                description:`Raman Kamisarau won the Città di Cantù 30th International Piano and Orchestra Competition, \
                Italy. In the category "Romantic Concerto" he performed Rachmaninoff's 2nd Concerto with great success.`,
                date:"07.05.2022"
            });
        setLatestConcert(
          {
            title:"Festival Les Jardins Musicaux",
            place:"Rondchâtel, Switzerland",
            description:"Piano Sonatas No.2, Op.14; No.4, Op.29",
            date: "27th August, 2022",
            link: "google.com"
          });
    }, []);
  return (
    <div className="Home">
        <h1>Raman Kamisarau</h1> 
        <h2>Pianist</h2>
        <Concert title={LatestConcert.title} place={LatestConcert.place} description={LatestConcert.description} date={LatestConcert.date} link={"/concerts"}/>
        <Article title={LatestArticle.title} description={LatestArticle.description} date={LatestArticle.date} link={"/news"}/>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/xFHpvXL9Cvg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
}

export default Home;
