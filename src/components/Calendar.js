import React from "react";
import CalendarForm from "./CalendarForm";
import CalendarList from "./CalendarList";
import data from "../db/data.json";

class Calendar extends React.Component {
  state = { data };

  componentDidMount() {
    console.log(this.state);
  }

  getFormData(firstName, lastName, email, date, time) {
    console.log("essa: " + firstName, lastName, email, date, time);

    return <h1>as</h1>;
  }

  render() {
    return (
      <section>
        <CalendarList />
        <CalendarForm
          formData={this.getFormData}
          ref={(el) => (this.refForm = el)}
        />
      </section>
    );
  }
}

export default Calendar;
