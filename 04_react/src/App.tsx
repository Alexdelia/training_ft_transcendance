import React from 'react';

import Chan from './components/chan.component';
import Chat from './components/chat.component';
import User from './components/user.component';

import i_user from './interface/user.interface';

function App()
{
	let users: i_user[] = [];

	function addUser(user: i_user)
	{
		users.push(user);
	}

	addUser({ name: "glaverdu" });
	addUser({ name: "idhiba" });
	addUser({ name: "adelille", win: 42, lose: 21, profilePicPath: "profile_picture/adelille.png" });
	addUser({ name: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", profilePicPath: "profile_picture/default.png" });

	users[0].profilePicPath = "profile_picture/default.png";
	users[1].profilePicPath = "profile_picture/default.png";

	/* need to auto insert users*/
	return (
		<div>
			<div className='split split--chan split--left'>
				<h1>Channel</h1>
				<div className='split--left--div' /*this style doesn't exist*/>
					<Chan />
				</div>
			</div >

			<div className='split split--chan split--center'>
				<h1>Chat</h1>
				<div className='split--center--div' /*this style doesn't exist*/>
					<Chat />
				</div>
			</div>

			<div className='split split--chan split--right'>
				<h2>Users</h2>
				<div className='split--center--div' /*this style doesn't exist*/>
					<User user={users[0]} />
					<User user={users[1]} />
					<User user={users[2]} />
					<User user={users[3]} />
				</div>
			</div >
		</div>
	);
}

export default App;
