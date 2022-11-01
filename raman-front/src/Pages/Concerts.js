import React, { useState, useEffect } from 'react';
import Concert from "../Components/Concert";

function Concerts() {

  const [ConcertsList, setConcertsList] = useState([]);

  useEffect(() => {
    setConcertsList(
    [
      {
        title:"Festival Les Jardins Musicaux",
        place:"Rondchâtel, Switzerland",
        description:"Piano Sonatas No.2, Op.14; No.4, Op.29",
        date: "27th August, 2022",
        link: "https://google.com"
      },
      {title:"conc2", place:"asd", description:"desc2", date: "27th August, 2022", link: "https://facebook.com"}
  ])
  }, []);

  return (
    <div className="Concerts">
      <h2>CONCERTS</h2>
      {ConcertsList.map((concert)=>
        <Concert title={concert.title} place={concert.place} description={concert.description} date={concert.date} link={concert.link}/>
      )}
    </div>
  );
}

export default Concerts;