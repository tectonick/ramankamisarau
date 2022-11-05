import React from 'react';

function Article({supertitle, title, description, date, link}) {
    return ( 
        <div className="article block">
            {supertitle && <h2 className='supertitle'>{supertitle}</h2>}
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{description}</p>
            {link && <a href={link}>Read more</a>}
        </div>
     );
}

export default Article;