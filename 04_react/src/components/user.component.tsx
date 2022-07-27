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
		<div className="card">
			<h2>{props.user.name}</h2>
			<div className="action">
				<button className="btn" onClick={() => { setShowChat(true) }}>💬</button>
				<button className="btn" onClick={() => { setShowProfile(true) }}>👤</button>
			</div>
			{(showChat || showProfile) && <Backdrop onClick={resetAllStateHandle} />}
			{showChat && <ChatModal srcName='adelille' dstName={props.user.name} onClose={() => { setShowChat(false) }} />}
			{showProfile && <ProfileModal user={props.user} onClose={() => { setShowProfile(false) }} />}
		</div>
	);
}

export default User;
