import { useState } from "react";

import i_user from "../interface/user.interface";

import Backdrop from "./backdrop";
import ChatModal from "./chat.modal";
import ProfileModal from "./profile.modal";

function User(props: { user: i_user }) {
	const [showChat, setShowChat] = useState(false);
	const [showProfile, setShowProfile] = useState(false);

	function resetAllStateHandle(): void {
		setShowChat(false);
		setShowProfile(false);
	}

	return (
		<div>
			<div className='card' style={{ display: "flex" }}>
				<span className='h--username' style={{ flexGrow: "1" }}>{props.user.name}</span>
				<span>
					<button className='btn' onClick={() => { setShowChat(true) }}>💬</button>
					<button className='btn' onClick={() => { setShowProfile(true) }}>👤</button>
				</span >
			</div >
			{(showChat || showProfile) && <Backdrop onClick={resetAllStateHandle} />}
			{showChat && <ChatModal srcName='adelille' dstName={props.user.name} onClose={() => { setShowChat(false) }} />}
			{showProfile && <ProfileModal user={props.user} onClose={() => { setShowProfile(false) }} />}
		</div>
	);
}

export default User;
