import React from "react";
import styled from "styled-components";
import { differenceInYears } from "date-fns";

const Birthdays = styled.div`
  min-height: 200px;
  padding: 30px;
`;

const Birthday = styled.div`
  margin-bottom: 7.5px;
`;

const Title = styled.h2`
  font-weight: bold;
  margin: 0 0 15px;
`;

const BirthdaysList = ({ birthdays }) => {
  const ageInYears = ({ dob }) => differenceInYears(Date.now(), dob);
  return (
    <Birthdays>
      <Title>Birthdays</Title>
      {birthdays.map((birthday, i) => (
        <Birthday key={i}>
          {birthday.person} is {ageInYears(birthday)} today
        </Birthday>
      ))}
    </Birthdays>
  );
};

export default BirthdaysList;
