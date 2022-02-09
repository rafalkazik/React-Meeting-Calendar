import React from "react";

class CalendarList extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }

  deleteTask = (e) => {
    this.props.deleteFormData(e);
  };

  taskList = () =>
    this.props.data.meetings.map((i) => (
      <li
        key={i.id}
        data-id={i.id}
        className="CalendarList__list-item list-item"
      >
        <p className="list-item__firstName">Imię: {i.firstName} </p>
        <p className="list-item__lastName">Nazwisko: {i.lastName} </p>
        <p className="list-item__firstName">E-mail: {i.email} </p>
        <p className="list-item__firstName">Data: {i.date} </p>
        <p className="list-item__firstName">Godzina: {i.time} </p>
        <button onClick={this.deleteTask}>Zakończ</button>
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
