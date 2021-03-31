import React from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Login from "./Components/Login";
import HomePage from './Components/HomePage'
import SignUp from './Components/Signup'
import "./App.css";

export default function App() {

return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">
            Home
          </Link>
          <Link to="/signup">
            Sign Up
          </Link>
          <Link to="/login">
            Login
          </Link>
        </nav>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path="/signup">
            <SignUp/>
          </Route>
        <Route path="/login">
          <Login/>
        </Route>
    </div>
    </Router>
	);
}