import React from "react";
import styled from "styled-components";

const StyledPage = styled.div`
  margin: 30px;
`;

const Page = ({ children }) => {
  return <StyledPage>{children}</StyledPage>;
};

export default Page;
