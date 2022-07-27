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
			<div className='split split--chan split--left'>
				<h1>Channel</h1>
			</div >

			<div className='split split--chan split--center'>
				<h1>Chat</h1>
			</div>

			<div className='split split--chan split--right'>
				<h2>Users</h2>
				<div className='split--center-div'>
					<User user={users[0]} />
					<User user={users[1]} />
					<User user={users[2]} />
				</div>
			</div >
		</div>
	);
}

export default App;
