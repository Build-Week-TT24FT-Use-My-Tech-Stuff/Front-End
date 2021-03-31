import {React, useEffect} from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const initialUser = {
	username: '',
	password: '',
};

const initialLoginErrors = {
	username: '',
	password: '',
  };

export default function Login() {

	const [initialLoginErrors, setLoginErrors] = useState(initialLoginErrors);
	const [user, setUser]= useState(initialUser);
	const history = useHistory();


	const change = (e) => {
		setUser({...user, [e.target.name]: e.target.value});
	  }

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

	useEffect(() => {
		loginSchema.isValid(initialUser)
		  .then(valid => {
			setDisabled(!valid)
		  })
	  }, [suFormValues])

	return (
		<>
		<h2>Login</h2>
		<div className='errors'>
                <div>{errors.username}</div>
                <div>{errors.password}</div>
            </div>
		<form onSubmit={submit}>
			<label>
				Username:
				<input
					type="text"
					name="username"
					value={user.username}
					onChange={change}
				/>
			</label>
			<label>
				Password:
				<input
					type="password"
					name="password"
					value={user.password}
					onChange={change}
				/>
			</label>
			<br/>
			<button>Login</button>
		</form>
		</>
	);

    }