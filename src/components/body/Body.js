import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1000px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function BodyContainer({ children }) {
  return <Container>{children}</Container>;
}

export const Body = Object.assign(BodyContainer, {});
