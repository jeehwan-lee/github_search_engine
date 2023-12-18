import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
`;

function HeaderLogo() {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <Container onClick={handleClick}>
      <GitHubIcon />
    </Container>
  );
}

export default HeaderLogo;
