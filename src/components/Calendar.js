import React from "react";
import "../style/Calendar.css";
import CalendarForm from "./CalendarForm";
import CalendarList from "./CalendarList";
import CalendarHeader from "./CalendarHeader";
import { postData, deleteData } from "./CalendarProvider";
import data from "../db/data.json";

class Calendar extends React.Component {
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

    postData(data).then((resp) => {
      console.log(resp);
    });
  };

  deleteFormData = (e) => {
    const targetTaskElementID = e.target.parentElement.getAttribute("data-id");

    deleteData(targetTaskElementID);
  };

  render() {
    const { data } = this.state;
    return (
      <section className="Calendar__main">
        <CalendarHeader />
        <CalendarForm
          postFormData={this.postFormData}
          ref={(el) => (this.refForm = el)}
        />
        <CalendarList data={data} deleteFormData={this.deleteFormData} />
      </section>
    );
  }
}

export default Calendar;
