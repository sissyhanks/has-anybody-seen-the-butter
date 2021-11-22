import { Container, AppBar, Grow, Grid } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./themes";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from './components/Contact';
import Projects from './components/Projects';
import Bottom from "./components/Bottom";
import Typography from '@mui/material/Typography';



function App() {
  return (
  <ThemeProvider theme={theme}>
    <Container>
      <NavBar />
          <Grow in>
            <Container>
              <Router>
                <Routes>
                  <Route exact path="/" />
                  <Route exact path="/about" element=  {<About  />} />
                  <Route exact path="/contact" element={<Contact />} />
                  <Route exact path="/projects" element={<Projects />} />
                </Routes>
              </Router>
            </Container>
          </Grow>
          <Bottom />
        </Container>

  </ThemeProvider>
  );
}

export default App;
