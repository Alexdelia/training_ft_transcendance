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
			<button className='card card--border card--btn' style={{ marginLeft: "4px" }} onClick={() => { setShowProfile(true) }}>
				<img className='img img--card--user' src={props.user.profilePicPath} alt="profile" />
				<span className='span--card--user truncate'>{props.user.name}</span>
			</button>
			{showProfile && <Backdrop onClick={resetAllStateHandle} />}
			{showProfile && <ProfileModal user={props.user} onClose={() => { setShowProfile(false) }} />}
		</div >
	);
}

export default User;
