import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import User from "./pages/User/User";
import { Header } from "./components/header/Header";
import { Body } from "./components/body/Body";

function App() {
  return (
    <>
      <Header>
        <Header.Left>
          <Header.Logo />
          <Header.Title />
        </Header.Left>
      </Header>
      <Body>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/user/:username" element={<User />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </Body>
    </>
  );
}

export default App;
