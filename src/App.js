import { Container, AppBar, Grow, Grid } from "@mui/material";
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
    <Container>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="right">
          Bernie McKnight
        </Typography>
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
  );
}

export default App;
