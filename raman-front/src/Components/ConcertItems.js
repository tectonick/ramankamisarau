import React from "react";
import Concert from "./Concert";

function ConcertItems({ items }) {
  return (
    <>
      {items.map((concert) => (
        <Concert
          key={concert.id}
          title={concert.Title}
          place={concert.Place}
          description={concert.Description}
          date={new Date(concert.Date)}
          link={concert.Link}
        />
      ))}
    </>
  );
}

export default ConcertItems;
