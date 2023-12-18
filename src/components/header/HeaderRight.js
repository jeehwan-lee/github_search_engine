import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

function HeaderRight({ children }) {
  return <Container>{children}</Container>;
}

export default HeaderRight;
