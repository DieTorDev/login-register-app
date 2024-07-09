import { useContext } from 'react';
import Cookies from 'js-cookie';
import AuthContext from '../contexts/authContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
	const { userLogged, setUserLogged } = useContext(AuthContext);
	const navigate = useNavigate();

	return (
		<>
			<h1>{userLogged.username}´s profile</h1>
			<p>{userLogged.email}</p>
			<button onClick={() => logout(setUserLogged, navigate)}>Log Out</button>
		</>
	);
};

const logout = (setUserLogged, navigate) => {
	Cookies.remove('token');
	setUserLogged(null);
	navigate('/');
};

export default Profile;
