import React, { useState, useEffect } from "react";
import Api from "../Utility/api";
import ConcertItems from "../Components/ConcertItems";
import PaginatedItems from "../Components/PaginatedItems";

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
      console.table(ConcertsList);
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
      {ConcertsList.length>0 ? <PaginatedItems Type={ConcertItems} items={ConcertsList}/> : <p>Nothing for now. Stay tuned for updates.</p>}
    </div>
  );
}

export default Concerts;
