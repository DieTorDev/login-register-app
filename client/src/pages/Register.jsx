import { registerUser } from '../utils/auth';

const Register = () => {
	return (
		<>
			<h1>REGISTER</h1>
			<form onSubmit={handleSubmit}>
				<input type='text' placeholder='Username' name='username' />
				<input type='text' placeholder='Email' name='email' />
				<input type='text' placeholder='Password' name='password' />
				<input type='submit' value='Register' />
			</form>
		</>
	);
};

const handleSubmit = async event => {
	event.preventDefault();
	const { username, email, password } = event.target;
	const newUser = {
		username: username.value,
		email: email.value,
		password: password.value
	};

	const serverMessage = await registerUser(newUser);
	console.log(serverMessage);
};

export default Register;
