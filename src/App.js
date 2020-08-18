import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Certifications from "./Components/Certifications";

function App() {
  return (
    <Router>
      <div className="w-screen h-screen bg-mainDark">
        <div>
          <p className="text-center text-mainLight text-6xl">Alex Williams</p>
        </div>
        <nav className="bg-mainOrange">
          <ul className="grid grid-cols-4 gap-4 text-center text-mainDark text-2xl">
            <li className="hover:text-mainMiddle">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-mainMiddle">
              <Link to="/Experience">Experience</Link>
            </li>
            <li className="hover:text-mainMiddle">
              <Link to="/Skills">Skills</Link>
            </li>
            <li className="hover:text-mainMiddle">
              <Link to="/Certifications">Certifications</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/Experience">
            <Experience />
          </Route>
          <Route path="/Skills">
            <Skills />
          </Route>
          <Route path="/Certifications">
            <Certifications />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
