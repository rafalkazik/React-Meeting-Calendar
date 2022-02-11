import React from "react";
import "../style/CalendarList.css";

class CalendarList extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }

  deleteTask = (id) => {
    this.props.deleteFormData(id);
  };

  taskList = () =>
    this.props.data.meetings.map((i) => (
      <li
        key={i.id}
        data-id={i.id}
        className="CalendarList__list-item list-item"
      >
        <p className="list-item__meetingWith">Spotkanie z: </p>
        <p className="list-item__fullName">
          {i.firstName} {i.lastName}{" "}
        </p>
        <p className="list-item__email">{i.email} </p>
        <p className="list-item__date">
          Data: <span className="list-item__date-number">{i.date}</span>{" "}
        </p>
        <p className="list-item__time">
          Godzina: <span className="list-item__time-number">{i.time}</span>{" "}
        </p>
        <button
          onClick={() => this.deleteTask(i.id)}
          className="list-item__btn"
        >
          Zakończ
        </button>
      </li>
    ));

  render() {
    return (
      <section className="CalendarList__list-section list-section">
        <h2 className="list-section__heading">Lista spotkań:</h2>
        <ul className="list-section__list">{this.taskList()}</ul>
      </section>
    );
  }
}

export default CalendarList;
