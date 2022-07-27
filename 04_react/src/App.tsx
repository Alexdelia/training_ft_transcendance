import React from 'react';
import User from './components/user.component';

import i_user from './interface/user.interface';

function App() {
	let users: i_user[] = [];

	function addUser(user: i_user) {
		users.push(user);
	}

	addUser({ name: 'glaverdu' });
	addUser({ name: 'idhiba' });
	addUser({ name: 'adelille', win: 42, lose: 21, profilePicPath: "profile_picture/adelille.png" });

	return (
		<div>
			<h1>Users</h1>
			<User user={users[0]} />
			<User user={users[1]} />
			<User user={users[2]} />
		</div >
	);
}

export default App;
