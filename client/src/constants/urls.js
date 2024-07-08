const PORT = 3000;
const URL_BASE = `http://localhost:${PORT}/`;
const API_USERS = URL_BASE + 'api/users';
const AUTH_USERS = URL_BASE + 'auth/register';
const LOGIN_USERS = URL_BASE + 'auth/login';
const TOKEN_VERIFY = URL_BASE + 'auth/verify-token';

export const URLS = {
	USER_API: API_USERS,
	USERS_AUTH: AUTH_USERS,
	USER_LOGIN: LOGIN_USERS,
	VERIFY_TOKEN: TOKEN_VERIFY
};
