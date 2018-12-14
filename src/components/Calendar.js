import React, { Component } from "react";
import Calendar from "react-calendar";
import { isSameDay } from "date-fns";
import styled, { keyframes } from "styled-components";
import Transition from "react-transition-group/Transition";

import ToDoList from "./ToDoList";
import BirthdaysList from "./Birthdays";

import "./Calendar.scss";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from: {
    opacity: 1;
    visibility: visible;
  }

  to: {
    opacity: 0;
    visibility: hidden;
  }
`;

const birthdays = [
  { person: "Charlie", date: "Fri Dec 14 2018 00:00:00" },
  { person: "Lauren", date: "Fri Dec 14 2018 00:00:00" },
  { person: "George", date: "Mon Dec 31 2018 00:00:00" },
  { person: "Jess", date: "Sunday Jan 27 2019 00:00:00" }
];

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const DetailWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
`;

const Detail = styled.div`
  width: calc(50% - 15px);
  background-color: ${p => p.color};
  animation: ${p => (p.isOpen ? fadeIn : fadeOut)} 2s linear;
`;

class CalendarContainer extends Component {
  state = {
    date: new Date(),
    birthdays: []
  };

  componentWillMount() {
    birthdays.find(birthday => {
      if (isSameDay(birthday.date, this.state.date)) {
        return this.setState(prevState => ({
          birthdays: [...prevState.birthdays, birthday.person]
        }));
      }
    });
  }

  onChange = date => {
    this.setState({ birthdays: [] });

    birthdays.find(birthday => {
      if (isSameDay(birthday.date, date)) {
        return this.setState(prevState => ({
          birthdays: [...prevState.birthdays, birthday.person]
        }));
      }
    });

    this.setState({ date });
  };

  render() {
    const { birthdays, date } = this.state;

    return (
      <div>
        <Container>
          <Calendar
            className={"calendar"}
            onChange={this.onChange}
            value={date}
          />
        </Container>

        <DetailWrapper>
          <Detail color="pink">
            <ToDoList date={date} />
          </Detail>
          {console.log(birthdays.length > 0)}
          <Detail color="green" isOpen={birthdays.length > 0}>
            <BirthdaysList date={date} birthdays={birthdays} />
          </Detail>
        </DetailWrapper>
      </div>
    );
  }
}

export default CalendarContainer;
