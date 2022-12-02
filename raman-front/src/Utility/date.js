const DateHelpers = {
    shiftDate(dateTime, ms){
        return new Date(dateTime.getTime() + ms);
    }
    ,
    getTimeHHMM(dateTime){
        return `${dateTime.getHours().toString().padStart(2,0)}:${dateTime.getMinutes().toString().padStart(2,0)}`;
    }
    ,
    getISODate(dateTime){
        return dateTime.toISOString().substring(0,10);
    }
}

export default DateHelpers;