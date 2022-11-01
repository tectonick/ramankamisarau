import React from 'react';

function Concert({title, place, description, date, link}) {
    return ( 
        <div className="concert">
            <h2>{title}</h2>
            <p>{place}</p>
            <p>{description}</p>
            <p>{date}</p>
            <a href={link}>Read more</a>
        </div>
     );
}

export default Concert;