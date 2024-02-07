const DateHelpers = {
  shiftDate(dateTime, ms) {
    return new Date(dateTime.getTime() + ms);
  },
  getTimeHHMM(dateTime) {
    return `${dateTime.getHours().toString().padStart(2, 0)}:${dateTime
      .getMinutes()
      .toString()
      .padStart(2, 0)}`;
  },
  getISOLocalDate(dateTime) {
    const offset = dateTime.getTimezoneOffset();
    const dateLocal = new Date(dateTime.getTime() - offset * 60 * 1000);

    return dateLocal.toISOString().substring(0, 10);
  },
};

export default DateHelpers;
