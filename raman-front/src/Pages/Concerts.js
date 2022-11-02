import React, { useState, useEffect } from 'react';
import Concert from "../Components/Concert";
import Api from "../Utility/api"

function Concerts() {

  const [ConcertsList, setConcertsList] = useState([]);

  
  useEffect(() => {

    Api.getConcerts().then((data)=>{
      setConcertsList(data);
    })
  }, []);

  return (
    <div className="Concerts">
      <h2>CONCERTS</h2>
      {ConcertsList.map((concert)=>
        <Concert key={concert.Title} title={concert.Title} place={concert.Place} description={concert.Description} date={concert.Date} link={concert.Link}/>
      )}
    </div>
  );
}

export default Concerts;