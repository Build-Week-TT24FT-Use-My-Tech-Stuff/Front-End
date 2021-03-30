import {React} from 'react'
import axios from 'axios';
import {useState } from 'react'
import axiosWithAuth from '../helpers/axiosWithAuth.js'

const initialUser = {
	username: '',
	password: ''
};

export default function Login() {

	const [user, setUser]= useState(initialUser);

	const change = (e) => {
		setUser({...user, [e.target.name]: e.target.value});
	  }

	const submit = e => {
		e.preventDefault();
		axios.post('https://tt-24-use-my-tech-stuff.herokuapp.com/api/users/login', user)
		.then(res => {
			console.log(res);
			localStorage.setItem('token', res.data.token);
			console.log(localStorage.token);
		})
		.catch(error => {
			console.log(error);
		})
	};

	return (
		<>
		<h2>Login</h2>
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