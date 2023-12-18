import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const Container = styled.div`
  position: absolute;
  top: 18px;
  right: 11%;
`;

function SearchButton() {
  return (
    <Container>
      <SearchIcon />
    </Container>
  );
}

export default SearchButton;
