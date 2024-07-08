import { HEADERS } from '../constants/headers';
import { METHODS } from '../constants/methods';
import { URLS } from '../constants/urls';

const registerUser = async user => {
	try {
		const response = await fetch(URLS.USERS_AUTH, {
			method: METHODS.POST,
			body: JSON.stringify(user),
			headers: HEADERS,
			credentials: 'include'
		});

		if (!response.ok) {
			throw new Error(`Error at fetch response: ${response.status}`);
		}
		const data = await response.json();
		console.log(data);
	} catch (err) {
		console.log(err);
	}
};

const loginRequest = async (user, setUser) => {
	try {
		const response = await fetch(URLS.USER_LOGIN, {
			method: METHODS.POST,
			body: JSON.stringify(user),
			headers: HEADERS,
			credentials: 'include'
		});

		if (!response.ok) {
			throw new Error(`Error at fetch response: ${response.status}`);
		}

		const data = await response.json();
		setUser(data);
	} catch (err) {
		console.error(`Couldn´t sing up: ${err}`);
	}
};

const verifyToken = async () => {
	try {
		const response = await fetch(URLS.VERIFY_TOKEN, {
			method: METHODS.GET,
			headers: HEADERS,
			credentials: 'include'
		});
		if (!response.ok) {
			throw new Error(`Failed response: ${response.status}`);
		}
		const data = await response.json();
		return data;
	} catch (err) {
		console.log('Invalid Token');
		return false;
	}
};

export { registerUser, loginRequest, verifyToken };
