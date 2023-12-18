import React from "react";
import styled from "styled-components";
import HeaderLeft from "./HeaderLeft";
import HeaderLogo from "./HeaderLogo";
import HeaderTitle from "./HeaderTitle";
import HeaderRight from "./HeaderRight";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
`;

function HeaderContainer({ children }) {
  return <Container>{children}</Container>;
}

export const Header = Object.assign(HeaderContainer, {
  Left: HeaderLeft,
  Right: HeaderRight,
  Logo: HeaderLogo,
  Title: HeaderTitle,
});
