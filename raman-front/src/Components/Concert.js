import React from 'react';
import { atcb_action } from 'add-to-calendar-button';
import 'add-to-calendar-button/assets/css/atcb.css';

function Concert({supertitle, title, place, description, date, link}) {
    const DateOptions = {
        timeStyle: "short",
        dateStyle: "medium"
    };
    const CalendarConcertDuration = 2*60*60*1000;

    let startDateTime = new Date(date);
    let endDateTime = new Date(startDateTime.getTime() + CalendarConcertDuration);

    function add2calendar(e){
        e.preventDefault();

        atcb_action({
            name: title,
            startDate: startDateTime.toISOString().substring(0,10),
            startTime: `${startDateTime.getHours()}:${startDateTime.getMinutes()}`,
            endDate: endDateTime.toISOString().substring(0,10),
            endTime: `${endDateTime.getHours()}:${endDateTime.getMinutes()}`,
            description: description.substring(0,500),
            options: ['Apple', 'Google', 'iCal', 'Microsoft365', 'Outlook.com', 'Yahoo'],
            location:place,
            timeZone: "Europe/Berlin",
            iCalFileName: "RamanKamisarau-Concert",
          });
    }

    return ( 
        <div className="concert block">
            {supertitle && <h2 className='supertitle'>{supertitle}</h2>}
            <h2>{title}</h2>
            <p className='date'>{startDateTime.toLocaleString("en-EN", DateOptions)}</p>
            <div className='separator'/>
            <p>{place}</p>
            <div className='html-content' dangerouslySetInnerHTML={{ __html: description }} />
            {link && <a href={link}><img src="/img/read.svg" alt=""></img>Read more</a>} {<a onClick={(e)=>add2calendar(e)} href=""><img src="/img/calendar.svg" alt=""></img>Add to calendar</a>}
        </div>
     );
}

export default Concert;