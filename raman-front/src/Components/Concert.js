import React, { useState } from "react";
import { atcb_action } from "add-to-calendar-button";
import "add-to-calendar-button/assets/css/atcb.css";
import Config from "../Config/config";
import DateHelpers from "../Utility/date";

function Concert({ supertitle, title, place, description, date, link }) {
  const DateOptions = {
    timeStyle: "short",
    dateStyle: "medium",
  };
  const CollapseLengthThreshold = 300;

  let startDateTime = new Date(date);
  let endDateTime = DateHelpers.shiftDate(
    startDateTime,
    Config.Calendar.ConcertDuration
  );

  // TODO Extract
  let isCollapsible = description
    ? description.length > CollapseLengthThreshold
    : false;
  const [Collapsed, setCollapsed] = useState(isCollapsible ? true : false);

  function toggleCollapsed(e) {
    e.preventDefault();
    setCollapsed(!Collapsed);
  }

  function add2calendar(e) {
    e.preventDefault();

    atcb_action({
      name: title,
      startDate: DateHelpers.getISOLocalDate(startDateTime),
      startTime: DateHelpers.getTimeHHMM(startDateTime),
      endDate: DateHelpers.getISOLocalDate(endDateTime),
      endTime: DateHelpers.getTimeHHMM(endDateTime),
      description: description.substring(0, 500),
      options: [
        "Apple",
        "Google",
        "iCal",
        "Microsoft365",
        "Outlook.com",
        "Yahoo",
      ],
      location: place,
      timeZone: "Europe/Berlin",
      iCalFileName: "RamanKamisarau-Concert",
    });
  }

  return (
    <div className="concert block">
      {supertitle && <h2 className="supertitle">{supertitle}</h2>}
      <h2>{title}</h2>
      <p className="date">
        {startDateTime.toLocaleString("en-EN", DateOptions)}
      </p>
      <div className="separator" />
      <p>{place}</p>
      <div
        className={`html-content collapsible ${Collapsed ? "collapsed" : ""}`}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      {isCollapsible && (
        <a
          href=""
          className="collapse-button"
          onClick={(e) => toggleCollapsed(e)}
        >
          <img src="/img/expand.svg" alt=""></img>
          {Collapsed ? "Expand" : "Collapse"}
        </a>
      )}
      {link && (
        <a href={link}>
          <img src="/img/read.svg" alt=""></img>Read more
        </a>
      )}
      {
        <a onClick={(e) => add2calendar(e)} href="">
          <img src="/img/calendar.svg" alt=""></img>Add to calendar
        </a>
      }
    </div>
  );
}

export default Concert;
