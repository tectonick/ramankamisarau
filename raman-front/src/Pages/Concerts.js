import React, { useState, useEffect } from "react";
import Concert from "../Components/Concert";
import Api from "../Utility/api";

function Concerts() {
  const [ConcertsList, setConcertsList] = useState([]);

  const getConcerts = (past = false) => {
    Api.getConcerts().then((data) => {
      let todayDate = Date.now();
      let selectedConcerts = data.filter((concert) =>
        past
          ? Date.parse(concert.Date) < todayDate
          : Date.parse(concert.Date) >= todayDate
      );
      selectedConcerts.sort((a,b) => Date.parse(a.Date) - Date.parse(b.Date))
      setConcertsList(selectedConcerts);
    });
  };

  useEffect(() => {
    getConcerts();
  }, []);

  return (
    <div className="Concerts">
      <h2>CONCERTS</h2>
      <div className="time-links">
        <button className="link-button" onClick={() => getConcerts()}>
          Current
        </button>
        &nbsp;|&nbsp;
        <button className="link-button" onClick={() => getConcerts(true)}>
          Archive
        </button>
      </div>
      {ConcertsList.map((concert) => (
        <Concert
          key={concert.Title}
          title={concert.Title}
          place={concert.Place}
          description={concert.Description}
          date={new Date(concert.Date).toLocaleString()}
          link={concert.Link}
        />
      ))}
    </div>
  );
}

export default Concerts;
