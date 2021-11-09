import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
