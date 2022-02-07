import React from "react";
import { v4 as uuid } from "uuid";

class CalendarList extends React.Component {
  componentDidMount = () => {
    console.log("pode mna");
    console.log(this.props);
  };

  taskList = () =>
    this.props.data.meetings.map((i) => (
      <li key={uuid()} className="CalendarList__list-item list-item">
        <p className="list-item__firstName">Imię: {i.firstName} </p>
        <p className="list-item__lastName">Nazwisko: {i.lastName} </p>
        <p className="list-item__firstName">E-mail: {i.email} </p>
        <p className="list-item__firstName">Data: {i.date} </p>
        <p className="list-item__firstName">Godzina: {i.time} </p>
      </li>
    ));

  render() {
    return <ul>{this.taskList()}</ul>;
  }
}

export default CalendarList;
