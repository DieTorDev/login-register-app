import { useState } from 'react';
import AuthContext from '../contexts/authContext';

const AuthProvider = ({ children }) => {
	const [userLogged, setUserLogged] = useState(null);

	return (
		<AuthContext.Provider value={{ userLogged, setUserLogged }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
