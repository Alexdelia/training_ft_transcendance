import React from 'react';

import Chan from './components/chan.component';
import Chat from './components/chat.component';
import User from './components/user.component';

import i_user from './interface/user.interface';
import i_chan from './interface/chan.interface';

function App()
{
	let users: i_user[] = [];
	let chans: i_chan[] = [{ name: "global" }, { name: "this is a channel name" }, { name: "another channel" }];

	function addUser(user: i_user)
	{
		users.push(user);
	}

	addUser({ name: "glaverdu" });
	addUser({ name: "idhiba" });
	addUser({ name: "adelille", win: 42, lose: 21, profilePicPath: "profile_picture/adelille.png" });
	addUser({ name: "very_long_text_very_long_text_very_long_text_very_long_text", profilePicPath: "profile_picture/default.png" });

	users[0].profilePicPath = "profile_picture/default.png";
	users[1].profilePicPath = "profile_picture/default.png";

	/* need to auto insert users/chans*/
	return (
		<div>
			<div className='split split--chan split--left'>
				<div className='split--left--div' /*this style doesn't exist*/>
					<Chan chan={chans[0]} />
					<Chan chan={chans[1]} />
					<Chan chan={chans[2]} />
				</div>
			</div >

			<div className='split split--chan split--center'>
				<div className='split--center--div' /*this style doesn't exist*/>
					<Chat chan={chans[1]} />
				</div>
			</div>

			<div className='split split--chan split--right'>
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
