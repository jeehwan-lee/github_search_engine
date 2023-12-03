import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

function App() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton href="/">
          <GitHubIcon sx={{ color: "white", marginRight: "20px" }} />
        </IconButton>
        <Typography variant="h6" component="div">
          Github Search Engine
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default App;
