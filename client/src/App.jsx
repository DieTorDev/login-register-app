import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Users from './pages/Users';
import AuthProvider from './providers/AuthProvider';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<AuthProvider>
				<GlobalStyles />
				<Home />
				<Register />
				<Login />
				<Users />
			</AuthProvider>
		</>
	);
};

export default App;
