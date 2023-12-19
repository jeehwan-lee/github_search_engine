import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

function HeaderLeft({ children }) {
  return <Container>{children}</Container>;
}

export default HeaderLeft;