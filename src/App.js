import React from "react";
import { Route, NavLink } from "react-router-dom";
import Login from "./components/Login";
import HomePage from './components/HomePage'
import SignUp from './components/SignUp'
import "./App.css";

function App() {
	return (
		<div className="App">
			<nav>
			<NavLink className ='NavLink' to ='/'>
				Home
			</NavLink>
			<NavLink className ='NavLink' to ='/login'>
			Login
			</NavLink>
			<NavLink className ='NavLink' to ='/signup'>
			Signup
			</NavLink>
			</nav>
			<Route exact path="/" component={HomePage} />
			<Route exact path='/login' component={Login} />
			<Route exact path='/signup' component={SignUp} />
		</div>
	);
}

export default App;