import "./App.css";
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";

function App() {
  const linkStyle = {
    textDecoration: "none",
    color: 'white',
    margin: "60px",
    fontsize: "30px",
    fontWeight: "bold",
  };
  return (
    <div className="App">
      <div className="nav-Container">
        <nav>
          <Link style={linkStyle} to="/home">
            Home
          </Link>
          <Link style={linkStyle} to="/about">
            About
          </Link>
          <Link style={linkStyle} to="/contact">
            Contact
          </Link>
          <Link style={linkStyle} to="/login">
            Login
          </Link>
        </nav>
        </div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
    
    </div>
  );
}

export default App;
