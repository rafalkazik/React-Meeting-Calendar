import React from "react";
import "../style/CalendarHeader.css";

class CalendarHeader extends React.Component {
  componentDidMount() {
    console.log("header");
  }

  render() {
    return (
      <header className="CalendarHeader__header header">
        <h1 className="header__title">
          Call<span className="header__title--span">and</span>air
        </h1>
        <h2 className="header__subtitle">Calendar for you</h2>
      </header>
    );
  }
}

export default CalendarHeader;
