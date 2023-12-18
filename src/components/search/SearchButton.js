import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const Container = styled.div`
  position: absolute;
  top: 18px;
  right: 11%;
  cursor: pointer;
`;

function SearchButton({ searchText }) {
  return (
    <Container onClick={() => console.log(searchText)}>
      <SearchIcon />
    </Container>
  );
}

export default SearchButton;
