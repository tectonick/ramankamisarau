import React, { useState, useEffect } from "react";
import Concert from "../Components/Concert";
import Article from "../Components/Article";
import Api from "../Utility/api";

function Home() {
  const [LatestArticle, setLatestArticle] = useState({});
  const [NearestConcert, setNearestConcert] = useState({});
  const [EmbedLink, setEmbedLink] = useState("");

  useEffect(() => {
    Api.getNearConcert().then((data) => {
      setNearestConcert(data);
    });
    Api.getLastArticle().then((data) => {
      setLatestArticle(data);
    });

    Api.getEmbedLink().then((data) => {
      setEmbedLink(data);
    });
  }, []);
  return (
    <div className="Home">
      <h1>Raman Kamisarau</h1>
      <h2 id="pianist">Concert pianist based in Switzerland</h2>
      {NearestConcert && (
        <Concert
          supertitle="UPCOMING PERFORMANCE"
          title={NearestConcert.Title}
          place={NearestConcert.Place}
          description={NearestConcert.Description}
          date={new Date(NearestConcert.Date).toLocaleString()}
          link={"/concerts"}
        />
      )}
      {LatestArticle && (
        <Article
          supertitle="LATEST NEWS"
          title={LatestArticle.Title}
          description={LatestArticle.Description}
          date={new Date(LatestArticle.Date).toLocaleString()}
          link={"/news"}
        />
      )}
      {EmbedLink?.length>0 && <iframe
        id="main-youtube-video"
        src={EmbedLink}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>}
    </div>
  );
}

export default Home;
