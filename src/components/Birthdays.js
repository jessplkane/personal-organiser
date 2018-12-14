import React from "react";
import styled from "styled-components";

const Birthdays = styled.div`
  min-height: 200px;
  padding: 30px;
`;

const Title = styled.h2`
  font-weight: bold;
`;

const BirthdaysList = ({ birthdays }) => {
  return (
    <Birthdays>
      <Title>Birthdays</Title>
      {birthdays.map((birthday, i) => (
        <div key={i}>{birthday}</div>
      ))}
    </Birthdays>
  );
};

export default BirthdaysList;
