import React, { useState } from "react";
import styled from "styled-components";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;
function SearchContainer({ children }) {
  return <Container>{children}</Container>;
}

export const Search = Object.assign(SearchContainer, {
  Input: SearchInput,
  Button: SearchButton,
});
