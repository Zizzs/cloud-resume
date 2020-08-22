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
      <div className="bg-mainSoftGray grid grid-cols-4 roboto-slab">
        <div className="col-span-3 p-12">
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
        <div className="sm:mr-4">
          <nav>
            <ul className="grid grid-row-5 sm:gap-4 text-center text-white text-md sm:text-4xl h-screen -ml-6 sm:ml-0">
              <Link
                className="hover:text-mainDarkBlue border-mainDarkBlue border-4 bg-mainGunmetal sm:h-20 p-1 mb-auto mt-auto"
                to="/"
              >
                <p className="sm:mt-2">Home</p>
              </Link>
              <Link
                className="hover:text-mainDarkBlue border-mainDarkBlue border-4 bg-mainGunmetal sm:h-20 p-1 mb-auto mt-auto"
                to="/Experience"
              >
                <p className="sm:mt-2">Experience</p>
              </Link>
              <Link
                className="hover:text-mainDarkBlue border-mainDarkBlue border-4 bg-mainGunmetal sm:h-20 p-1 mb-auto mt-auto"
                to="/Skills"
              >
                <p className="sm:mt-2">Skills</p>
              </Link>
              <Link
                className="hover:text-mainDarkBlue border-mainDarkBlue border-4 bg-mainGunmetal sm:h-20 p-1 mb-auto mt-auto"
                to="/Certifications"
              >
                <p className="sm:mt-2">Certifications</p>
              </Link>
              <Link
                className="hover:text-mainDarkBlue border-mainDarkBlue border-4 bg-mainGunmetal sm:h-20 p-1 mb-auto mt-auto"
                to="/Projects"
              >
                <p className="sm:mt-2">Projects</p>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </Router>
  );
}

export default App;
