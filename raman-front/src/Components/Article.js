import React from 'react';

function Article({title, description, date, link}) {
    return ( 
        <div className="article">
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{description}</p>
            {link && <a href={link}>Read more</a>}
        </div>
     );
}

export default Article;