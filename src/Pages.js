import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';


function Pages() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default Pages;