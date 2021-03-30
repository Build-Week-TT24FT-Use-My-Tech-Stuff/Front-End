import React, {useState, useEffect} from 'react';
// import { Route, NavLink } from "react-router-dom";
// import Login from "./Components/Login";
// import HomePage from './Components/HomePage'
import SignUp from './Components/SignUp';
import "./App.css";
import axios from 'axios';
import formSchema from './validation/formSchema';
import * as yup from "yup";

// INITIALIZATIONS //
const initialSUvalues = {


	username: '', //textbox
	email: '', //textbox
	password: '', //textbox
	role: false, // checkbox
	terms: false, // checkbox
};

const initialSUformErrors = {

	username: '',
	email: '',
	password: '',
	role: '',
	terms: false,
  };

const initialDisabled = true;

const initialForm = [];


export default function App() {

	// STATES //
const [form, setForm] = useState(initialForm);
const [suFormValues, setSUformValues] = useState(initialSUvalues); // this is an object
const [formSUerrors, setSUerrors] = useState(initialSUformErrors); // this is an object
const [disabled, setDisabled] = useState(initialDisabled); // this is a boolean


//  AXIOS POST //
  const postNewUser = (newUser) => {
    axios
      .post("http://localhost:3000/", newUser)
      .then((response) => {
        setSUformValues([response.data, ...suFormValues]);
        setSUformValues(initialSUvalues);
        setDisabled(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  // EVENT HANDLERS //
  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name) // search the schema for 'name'
      .validate(value) // validate the entry (formValidation)
      .then(() => {
        setSUerrors({
          ...formSUerrors,
          [name]: "",
        });
      })
      .catch((error) => {
        setSUerrors({
          ...formSUerrors,
          // validation error from schema
          [name]: error.errors,
        });
      });
    setSUformValues({
      ...suFormValues,
      [name]: value,
    });
  };

const formSubmit = () => {
    const newUser = {
      username: suFormValues.name.trim(),
      email: suFormValues.email.trim(),
      password: suFormValues.password.trim(),
    //   terms: suFormValues.terms,
    };
    postNewUser(newUser);
  };

  useEffect(() => {
    formSchema.isValid(suFormValues)
      .then(valid => {
        setDisabled(!valid)
      }) 
  }, [suFormValues])

return (
    <div className="App">
        <SignUp values={suFormValues} submit={formSubmit} change={inputChange} disabled={disabled} errors={formSUerrors} />
        {form.map((user, idx) => {
          return (
            <div key={idx}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            </div>
          )
        })}
    </div>
	);
}