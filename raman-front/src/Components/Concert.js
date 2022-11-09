import React from 'react';

function Concert({supertitle, title, place, description, date, link}) {
    const DateOptions = {
        timeStyle: "short",
        dateStyle: "medium"
    };

    return ( 
        <div className="concert block">
            {supertitle && <h2 className='supertitle'>{supertitle}</h2>}
            <h2>{title}</h2>
            <p className='date'>{new Date(date).toLocaleString("en-EN", DateOptions)}</p>
            <div className='separator'/>
            <p>{place}</p>
            <div className='html-content' dangerouslySetInnerHTML={{ __html: description }} />
            {link && <a href={link}>Read more</a>}
        </div>
     );
}

export default Concert;