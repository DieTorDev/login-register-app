import { useEffect, useState } from 'react';
import { getData } from '../utils/api';
import { URLS } from '../constants/urls';

const Users = () => {
	const [allUsers, setAllUsers] = useState();

	useEffect(() => {
		getUsers(setAllUsers);
	}, []);

	if (allUsers)
		return (
			<>
				<h1>USERS</h1>
				{allUsers.map(user => (
					<div key={user._id}>
						<h3>{user.username}</h3>
						<p>{user.email}</p>
					</div>
				))}
			</>
		);
};

const getUsers = async setAllUsers => {
	const data = await getData(URLS.USER_API);
	setAllUsers(data);
};

export default Users;
