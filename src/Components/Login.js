import {React, useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup'
import loginSchema from '../validation/loginSchema'
import FormTheme from '../Themes/Theme'


// LOGIC //
const initialUser = {
	username: '',
	password: ''
};

const initialErrors = {
    username: '',
    password: ''
  };

const initialDisabled = true;

export default function Login() {

	const [user, setUser]= useState(initialUser);
	const [formErrors, setErrors] = useState(initialErrors);
	const [disabled, setDisabled] = useState(initialDisabled); // this is a boolean
	const history = useHistory();

// update values of user
	const change = (e) => {
		setUser({...user, [e.target.name]: e.target.value});
		validation(e.target.name, e.target.value)
	  }

// submit token
	const submit = e => {
		e.preventDefault();
		axios.post('https://tt-24-use-my-tech-stuff.herokuapp.com/api/users/login', user)
		.then(res => {
			console.log(res);
			localStorage.setItem('token', res.data.token);
			setUser(initialUser);
			console.log(localStorage.token);
			history.push('/');
		})
		.catch(error => {
			console.log(error);
		})
	};

// valdiation function
	const validation = (name, value) => {
        yup
          .reach(loginSchema, name) // search the schema for 'name'
          .validate(value) // validate the entry (formValidation)
          .then(() => {
            setErrors({
              ...formErrors,
              [name]: "",
            });
          })
          .catch((error) => {
            setErrors({
              ...formErrors,
              // validation error from schema
              [name]: error.errors,
            });
          });
		  setUser({
          ...user,
          [name]: value,
        });
      };

      useEffect(() => {
    loginSchema.isValid(user)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [user])

	return (
		<FormTheme>
		<h2>Login</h2>
		<div className='errors'>
                <div>{formErrors.username}</div>
                <div>{formErrors.password}</div>
        </div>
		<form onSubmit={submit}>
			<label>
				Username:
				<input
					type="text"
					name="username"
					value={user.username}
					onChange={change}
					validation={validation}
				/>
			</label>
			<label>
				Password:
				<input
					type="password"
					name="password"
					value={user.password}
					onChange={change}
					validation={validation}
				/>
			</label>
			<br/>
			<button disabled={disabled}>Login</button>
		</form>
		</FormTheme>
	);
}

// this is a test
