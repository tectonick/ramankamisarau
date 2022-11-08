import React from 'react';

function Concert({supertitle, title, place, description, date, link}) {
    return ( 
        <div className="concert block">
            {supertitle && <h2 className='supertitle'>{supertitle}</h2>}
            <h2>{title}</h2>
            <p>{place}</p>
            <div className='html-content' dangerouslySetInnerHTML={{ __html: description }} />
            <p>{date}</p>
            <a href={link}>Read more</a>
        </div>
     );
}

export default Concert;