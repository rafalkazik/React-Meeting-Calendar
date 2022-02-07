import React from "react";
import { validEmail, validDate, validTime } from "./FormValidation";

class CalendarForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const [firstName, lastName, email, date, time] = [
      this.inputFirstName.value,
      this.inputLastName.value,
      this.inputEmail.value,
      this.inputDate.value,
      this.inputTime.value,
    ];

    if (firstName.length < 2) {
      e.preventDefault();
      alert("Imię musi posiadać minimum dwa znaki");
    } else if (lastName.length < 2) {
      e.preventDefault();
      alert("Nazwisko musi posiadać minimum dwa znaki");
    } else if (!validEmail.test(email)) {
      e.preventDefault();
      alert("Email musi posiadać minimum dwa znaki");
    } else if (!validDate.test(date)) {
      e.preventDefault();
      alert("Błąd daty!");
    } else if (!validTime.test(time)) {
      e.preventDefault();
      alert("Błąd godziny!");
    } else {
      this.props.postFormData(firstName, lastName, email, date, time);

      this.form.reset();
    }
  };
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        ref={(node) => (this.form = node)}
        className="CalendarList__form"
      >
        <input
          type="text"
          className="CalendarList__input--firstName"
          ref={(node) => (this.inputFirstName = node)}
          placeholder="Imię"
        />
        <input
          type="text"
          className="CalendarList__input--lastName"
          ref={(node) => (this.inputLastName = node)}
          placeholder="Nazwisko"
        />
        <input
          type="text"
          className="CalendarList__input--email"
          ref={(node) => (this.inputEmail = node)}
          placeholder="twój@email.com"
        />
        <input
          type="text"
          className="CalendarList__input--date"
          ref={(node) => (this.inputDate = node)}
          placeholder="RRRR-MM-DD"
        />
        <input
          type="text"
          className="CalendarList__input--time"
          ref={(node) => (this.inputTime = node)}
          placeholder="GG:MM"
        />
        <input
          type="submit"
          className="CalendarList__input--submit"
          value="Dodaj"
        />
      </form>
    );
  }
}

export default CalendarForm;
