import React, { useState } from 'react';


function Article({supertitle, title, description, date, link}) {
    const CollapseLengthThreshold = 800;

    // TODO Extract
    let isCollapsible = description ? (description.length > CollapseLengthThreshold) : false;
    const [Collapsed, setCollapsed] = useState(isCollapsible ? true : false);

    function toggleCollapsed(e){
        e.preventDefault();
        setCollapsed(!Collapsed);
    }

    return ( 
        <div className="article block">
            {supertitle && <h2 className='supertitle'>{supertitle}</h2>}
            <h2>{title}</h2>
            <p className='date'>{new Date(date).toDateString()}</p>
            <div className='separator'/>
            <div className={`html-content collapsible ${Collapsed ? 'collapsed collapsed-long': ''}`} dangerouslySetInnerHTML={{ __html: description }} />
            {isCollapsible && <a href="" className='collapse-button' onClick={(e) => toggleCollapsed(e)}><img src="/img/expand.svg" alt=""></img>{Collapsed ? 'Expand' : 'Collapse'}</a>}
            {link && <a href={link}><img src="/img/read.svg" alt=""></img>Read more</a>}
        </div>
     );
}

export default Article;