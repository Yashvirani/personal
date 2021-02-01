import './App.css';
import { BrowserRouter as Router ,Switch,Route,Link } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import SearchAppBar from "./components/Appbar/Appbar";
import About from './components/About/About';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Notfound from './components/Notfound/Notfound';


function App() {
  return (
    <Router>
      
      <div className="app">
        <Switch>
          <Route exact path={'/contact' || '/contact/'}>
              <SearchAppBar className="mobile_nav"/>
              {/* <Navbar /> */}
              <Contact />
          </Route>
          <Route exact path={'/projects' || '/projects/'}>
              <SearchAppBar className="mobile_nav"/>
              {/* <Navbar /> */}
              <Projects />
          </Route>
          <Route exact path={'/skills' || '/skills/'}>
              <SearchAppBar className="mobile_nav"/>
              {/* <Navbar /> */}
              <Skills />
          </Route>
          <Route exact path={'/about' || '/about/'}>
            <SearchAppBar className="mobile_nav"/>
            {/* <Navbar /> */}
            <About />
          </Route>
          <Route exact path="/">
            <SearchAppBar className="mobile_nav"/>
            {/* <Navbar /> */}
            <Home />
          </Route>
          <Route >
            <SearchAppBar className="mobile_nav"/>
            <Notfound />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
