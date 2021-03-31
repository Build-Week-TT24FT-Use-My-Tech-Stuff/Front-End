import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Login from "./Components/Login";
import HomePage from './Components/HomePage'
import SignUp from './Components/Signup'
import "./App.css";
import axios from 'axios'
import formSchema from './validation/formSchema'
import * as yup from "yup";

// INITIALIZATIONS //


const initialForm = [];


export default function App() {

	// STATES //
const [form, setForm] = useState(initialForm);



//  AXIOS POST //
  // const postNewUser = (newUser) => {
  //   axios
  //     .post("http://localhost:3000/", newUser)
  //     .then((response) => {
  //       setSUformValues([response.data, ...suFormValues]);
  //       setSUformValues(initialSUvalues);
  //       setDisabled(true);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };


  // EVENT HANDLERS //
  

// const formSubmit = () => {
//     const newUser = {
//       username: suFormValues.username.trim(),
//       email: suFormValues.email.trim(),
//       password: suFormValues.password.trim(),
//       terms: suFormValues.termsOfService,
//     };
//     postNewUser(newUser);
//   };

 
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