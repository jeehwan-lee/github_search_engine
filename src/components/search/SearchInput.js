import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 80%;
  height: 50px;
  outline: none;
  font-size: 16px;
  padding-left: 10px;
`;

function SearchInput({ searchText, setSearchText }) {
  return (
    <Input
      placeholder="Github User를 입력하세요"
      value={searchText}
      onChange={(e) => {
        setSearchText(e.target.value);
      }}
    />
  );
}

export default SearchInput;
