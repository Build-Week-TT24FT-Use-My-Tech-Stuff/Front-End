import React from "react";
import { Route, NavLink } from "react-router-dom";
import Login from "./Components/Login";
import HomePage from './Components/HomePage'
import SignUp from './Components/SignUp'
import "./App.css";


const initialLoginValues = {
  // Text Inputs
  username: '',
  password: '', 
};

const initialSignUpValues = {
  username: '', //textbox
  email: '', //textbox
  password: '', //textbox
  role: false, // checkbox
  terms: false, // checkbox
};

const initialFormErrors = {
  name: '',  // being blank, it's an error
  password: '', // being blank, it's an 
}

const initialForm = []; // starting form is an EMPTY ARRAY, each form is an OBJECT
const initialDisabled = true;

export default function App() {
  // STATES //
const [login, setLogin] = useState(initialLoginValues);



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