import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 10px;
  font-size: 20px;
  font-weight: 700;

  @media (max-width: 400px) {
    display: none;
  }
`;

function HeaderTitle() {
  return <Container>Github Search Engine</Container>;
}

export default HeaderTitle;
