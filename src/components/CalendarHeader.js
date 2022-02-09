import React from "react";

class CalendarHeader extends React.Component {
  componentDidMount() {
    console.log("header");
  }

  render() {
    return (
      <header className="CalendarHeader__header header">
        <h1 className="header__text">Calendar</h1>
      </header>
    );
  }
}

export default CalendarHeader;
