import React, { Component } from "react";
import Calendar from "react-calendar";
import { isSameDay } from "date-fns";
import styled from "styled-components";
import Transition from "react-transition-group/Transition";

import ToDoList from "./ToDoList";
import BirthdaysList from "./Birthdays";
import "./Calendar.scss";
import { birthdays, toDos } from "../data/index";

const defaultStyle = {
  transition: `opacity 150ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 }
};

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
  border: 1px solid grey;
`;

class CalendarContainer extends Component {
  state = {
    date: new Date(),
    birthdays: [],
    toDoList: []
  };

  componentWillMount() {
    birthdays.find(birthday => {
      if (isSameDay(birthday.date, this.state.date)) {
        return this.setState(prevState => ({
          birthdays: [...prevState.birthdays, birthday]
        }));
      }

      return null;
    });

    toDos.find(toDo => {
      if (isSameDay(toDo.date, this.state.date)) {
        return this.setState(prevState => ({
          toDoList: [...prevState.toDoList, toDo]
        }));
      }

      return null;
    });
  }

  onChange = date => {
    // Reset state
    this.setState({ birthdays: [], toDoList: [] });

    birthdays.find(birthday => {
      if (isSameDay(birthday.date, date)) {
        return this.setState(prevState => ({
          birthdays: [...prevState.birthdays, birthday]
        }));
      }

      return null;
    });

    toDos.find(toDo => {
      if (isSameDay(toDo.date, date)) {
        return this.setState(prevState => ({
          toDoList: [...prevState.toDoList, toDo]
        }));
      }

      return null;
    });

    this.setState({ date });
  };

  render() {
    const { birthdays, date, toDoList } = this.state;

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
          <Transition in={toDoList.length > 0} timeout={0}>
            {state => (
              <Detail style={{ ...defaultStyle, ...transitionStyles[state] }}>
                <ToDoList date={date} tasks={toDoList} />
              </Detail>
            )}
          </Transition>

          <Transition in={birthdays.length > 0} timeout={0}>
            {state => (
              <Detail style={{ ...defaultStyle, ...transitionStyles[state] }}>
                <BirthdaysList date={date} birthdays={birthdays} />
              </Detail>
            )}
          </Transition>
        </DetailWrapper>
      </div>
    );
  }
}

export default CalendarContainer;
