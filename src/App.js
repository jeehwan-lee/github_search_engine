import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import User from "./pages/User/User";
import { Header } from "./components/header/Header";

function App() {
  return (
    <>
      <Header>
        <Header.Left>
          <Header.Logo />
          <Header.Title />
        </Header.Left>
      </Header>
      {/* <AppBar position="static">
        <Toolbar>
          <IconButton href="/">
            <GitHubIcon sx={{ color: "white", marginRight: "20px" }} />
          </IconButton>
          <Typography variant="h6" component="div">
            Github Search Engine
          </Typography>
        </Toolbar>
      </AppBar> */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/user/:username" element={<User />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
