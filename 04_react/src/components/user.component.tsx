import { useState } from "react";

import i_user from "../interface/user.interface";

import Backdrop from "./backdrop";
import ProfileModal from "./profile.modal";

function User(props: { user: i_user })
{
	const [showProfile, setShowProfile] = useState(false);

	function resetAllStateHandle(): void
	{
		setShowProfile(false);
	}

	return (
		<div>
			<button className='card card--border card--user' onClick={() => { setShowProfile(true) }}>{props.user.name}</button>
			{showProfile && <Backdrop onClick={resetAllStateHandle} />}
			{showProfile && <ProfileModal user={props.user} onClose={() => { setShowProfile(false) }} />}
		</div>
	);
}

export default User;
