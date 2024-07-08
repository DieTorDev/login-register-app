import { useContext } from 'react';
import AuthContext from '../contexts/authContext';
import { loginRequest } from '../utils/auth';

const Login = () => {
	const { userLogged, setUserLogged } = useContext(AuthContext);

	console.log(userLogged);

	return (
		<>
			<h1>LOGIN</h1>
			<form onSubmit={event => handleSubmit(event, setUserLogged)}>
				<input type='text' placeholder='Email' name='email' />
				<input type='text' placeholder='Password' name='password' />
				<input type='submit' value='Login' />
			</form>
		</>
	);
};

const handleSubmit = async (event, setUserLogged) => {
	event.preventDefault();

	const { email, password } = event.target;
	const loginData = {
		email: email.value,
		password: password.value
	};

	const serverMessage = await loginRequest(loginData, setUserLogged);
	console.log(serverMessage);
};

export default Login;
