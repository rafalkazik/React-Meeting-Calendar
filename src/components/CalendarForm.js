import React from "react";
import { validEmail, validDate, validTime } from "./FormValidation";
import "../style/CalendarForm.css";

class CalendarForm extends React.Component {
  state = {
    errors: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const [firstName, lastName, email, date, time] = [
      this.inputFirstName.value,
      this.inputLastName.value,
      this.inputEmail.value,
      this.inputDate.value,
      this.inputTime.value,
    ];

    const nameError = "Imię musi posiadać minimum dwa znaki";
    if (firstName.length < 2) {
      if (!this.state.errors.includes(nameError)) {
        this.setState((state) => {
          return {
            errors: [...state.errors, nameError],
          };
        });
      }
    } else if (firstName.length >= 2) {
      this.setState((state) => {
        return {
          errors: state.errors.filter((err) => err !== nameError),
        };
      });
    }

    // LAST NAME VALIDATION
    const lastNameError = "Nazwisko musi posiadać minimum dwa znaki";
    if (lastName.length < 2) {
      if (!this.state.errors.includes(lastNameError)) {
        this.setState((state) => {
          return {
            errors: [...state.errors, lastNameError],
          };
        });
      }
    } else if (lastName.length >= 2) {
      this.setState((state) => {
        return {
          errors: state.errors.filter((err) => err !== lastNameError),
        };
      });
    }

    // EMAIL VALIDATION
    const emailError = "Email musi mieć formę: example@mail.com";
    if (!validEmail.test(email)) {
      if (!this.state.errors.includes(emailError)) {
        this.setState((state) => {
          return {
            errors: [...state.errors, emailError],
          };
        });
      }
    } else if (validEmail.test(email)) {
      this.setState((state) => {
        return {
          errors: state.errors.filter((err) => err !== emailError),
        };
      });
    }

    // DATE VALIDATION
    const dateError = "Data musi być zapisana w formacie: RRRR-MM-DD";
    if (!validDate.test(date)) {
      if (!this.state.errors.includes(dateError)) {
        this.setState((state) => {
          return {
            errors: [...state.errors, dateError],
          };
        });
      }
    } else if (validDate.test(date)) {
      this.setState((state) => {
        return {
          errors: state.errors.filter((err) => err !== dateError),
        };
      });
    }

    // TIME VALIDATION
    const timeError = "Godzina musi zostać zapisana w formacie: GG:MM";
    if (!validTime.test(time)) {
      if (!this.state.errors.includes(timeError)) {
        this.setState((state) => {
          return {
            errors: [...state.errors, timeError],
          };
        });
      }
    } else if (validTime.test(time)) {
      this.setState((state) => {
        return {
          errors: state.errors.filter((err) => err !== timeError),
        };
      });
    }

    // IF VALIDATED => SUBMIT:
    if (
      firstName.length >= 2 &&
      lastName.length >= 2 &&
      validEmail.test(email) &&
      validDate.test(date) &&
      validTime.test(time)
    ) {
      this.props.postFormData(firstName, lastName, email, date, time);
    }
  };
  render() {
    const errorsList = this.state.errors.map((err, index) => {
      return (
        <li key={index} className="CalendarForm__list-item">
          {err}
        </li>
      );
    });

    return (
      <section className="CalendarForm">
        <ul className="CalendarForm__list">{errorsList}</ul>
        <form
          onSubmit={(e) => this.handleSubmit(e)}
          ref={(node) => (this.form = node)}
          className="CalendarForm__form"
        >
          <input
            type="text"
            className="CalendarForm__input--firstName CalendarForm__input"
            ref={(node) => (this.inputFirstName = node)}
            placeholder="Imię"
          />
          <input
            type="text"
            className="CalendarForm__input--lastName CalendarForm__input"
            ref={(node) => (this.inputLastName = node)}
            placeholder="Nazwisko"
          />
          <input
            type="text"
            className="CalendarForm__input--email CalendarForm__input"
            ref={(node) => (this.inputEmail = node)}
            placeholder="twój@email.com"
          />
          <input
            type="text"
            className="CalendarForm__input--date CalendarForm__input"
            ref={(node) => (this.inputDate = node)}
            placeholder="Data [RRRR-MM-DD]"
          />
          <input
            type="text"
            className="CalendarForm__input--time CalendarForm__input"
            ref={(node) => (this.inputTime = node)}
            placeholder="Godzina [GG:MM]"
          />
          <input
            type="submit"
            className="CalendarForm__input--submit"
            value="Dodaj"
          />
        </form>
      </section>
    );
  }
}

export default CalendarForm;
