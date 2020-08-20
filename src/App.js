import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Certifications from "./Components/Certifications";
import Projects from "./Components/Projects";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <div className="flex w-full h-full bg-white grid grid-cols-4">
          <div className="col-span-3">
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
              <Route path="/Projects">
                <Projects />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
          <div className="flex w-full">
            <nav>
              <ul className="grid grid-row-5 gap-4 text-center text-white text-4xl mx-20 flex h-screen">
                <Link
                  className="hover:text-mainMaroon border-mainMaroon border-4 bg-mainBlack h-20 mb-auto mt-auto"
                  to="/"
                >
                  <p className="mt-2">Home</p>
                </Link>
                <Link
                  className="hover:text-mainMaroon border-mainMaroon border-4 bg-mainBlack h-20 mb-auto mt-auto"
                  to="/Experience"
                >
                  <p className="mt-2">Experience</p>
                </Link>
                <Link
                  className="hover:text-mainMaroon border-mainMaroon border-4 bg-mainBlack h-20 mb-auto mt-auto"
                  to="/Skills"
                >
                  <p className="mt-2">Skills</p>
                </Link>
                <Link
                  className="hover:text-mainMaroon border-mainMaroon border-4 bg-mainBlack h-20 mb-auto mt-auto"
                  to="/Certifications"
                >
                  <p className="mt-2">Certifications</p>
                </Link>
                <Link
                  className="hover:text-mainMaroon border-mainMaroon border-4 bg-mainBlack h-20 mb-auto mt-auto"
                  to="/Projects"
                >
                  <p className="mt-2">Projects</p>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
