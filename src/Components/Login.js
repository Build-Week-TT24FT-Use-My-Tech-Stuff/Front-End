import {React} from 'react'


export default function Login(props) {

    const {username,password,change, submit} = props


	return (
		<>
		<h2>Login</h2>
		<form onSubmit={submit}>
			<label>
				Username:
				<input
					type="text"
					name="username"
					value={username}
					onChange={change}
				/>
			</label>
			<label>
				Password:
				<input
					type="password"
					name="password"
					value={password}
					onChange={change}
				/>
			</label>
			<br/>
			<button>Login</button>
		</form>
		</>
	);

    }