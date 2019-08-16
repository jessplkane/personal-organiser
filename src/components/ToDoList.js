import React from "react";
import styled from "styled-components";

const ToDoWrapper = styled.div`
  min-height: 200px;
`;

const Task = styled.div`
  margin-bottom: 7.5px;
`;

const Title = styled.h2`
  font-weight: bold;
  margin: 0 0 15px;
`;

//TODO: Add fadeinout animation for each item on the todo list?
const ToDoList = ({ tasks }) => {
  return (
    <ToDoWrapper>
      <Title>To Do List</Title>
      {tasks.map((task, i) => (
        <Task key={i}>{task.task}</Task>
      ))}
    </ToDoWrapper>
  );
};

export default ToDoList;
