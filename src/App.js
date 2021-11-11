import { Container, AppBar, Grow, Grid } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import theme from "./themes";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Typography from '@mui/material/Typography'
import useStyles from './styles';



function App() {
  const classes = useStyles();
  return (
  <ThemeProvider theme={theme}>
    <Container>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography component="div" variant="h2">
          <Box sx={{  textAlign: 'right', m: 1 }}>
          Bernie McKnight
          </Box>
        </Typography>
        <Typography variant="h3">
          <Box sx={{  textAlign: 'right', m: 1 }}>
          website developer
          </Box></Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Router>
            <Routes>
              <Route exact path="/" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/projects" element={<Projects />} />
            </Routes>
          </Router>
        </Container>
      </Grow>
    </Container>
  </ThemeProvider>
  );
}

export default App;
