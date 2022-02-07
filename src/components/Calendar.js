import React from "react";
import CalendarForm from "./CalendarForm";
import CalendarList from "./CalendarList";
import data from "../db/data.json";

class Calendar extends React.Component {
  constructor() {
    super();
    this.url = `http://localhost:3005/meetings/`;
  }

  state = { data };

  componentDidMount() {
    console.log(`componentDidMount() Calendar`);
  }

  postFormData = (firstName, lastName, email, date, time) => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      date: date,
      time: time,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    };

    fetch(this.url, options)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }

        throw new Error("Network error!");
      })
      .then((resp) => {
        console.log(resp);
      });
  };

  render() {
    const { data } = this.state;
    return (
      <section className="Calendar__main">
        <CalendarForm
          postFormData={this.postFormData}
          ref={(el) => (this.refForm = el)}
        />
        <CalendarList data={data} />
      </section>
    );
  }
}

export default Calendar;
