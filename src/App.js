import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Photography from "./pages/Photography";
import More from "./pages/More";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" className={({ isActive }) => isActive ? "active-link" : ""}>
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? "active-link" : ""}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/photography" className={({ isActive }) => isActive ? "active-link" : ""}>
              Photography
            </NavLink>
          </li>
          <li>
            <NavLink to="/more" className={({ isActive }) => isActive ? "active-link" : ""}>
              More
            </NavLink>
          </li>
        </ul>
      </nav>

        {/* Page Routing */}
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/more" element={<More />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;