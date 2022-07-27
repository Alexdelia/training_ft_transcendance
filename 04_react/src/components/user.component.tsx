import { useState } from "react";

import { Backdrop } from "./Backdrop";

interface i_user {
	name: string;
}

function User(props: i_user) {
	const [showChat, setShowChat] = useState(false);
	const [showProfile, setShowProfile] = useState(false);

	function resetAllStateHandle() {
		setShowChat(
	}

	return (
		<div className="card">
			<h2>{props.name}</h2>
			<div className="action">
				<button className="btn" onClick={() => { setShowChat(true) }}>💬</button>
				<button className="btn" onClick={() => { setShowProfile(true) }}>👤</button>
			</div>
			{(showChat || showProfile) && <Backdrop />}
			{showChat && <ChatModal srcName='adelille' dstName={props.name} onClose={() => { setShowChat(false) }} />
		</div>
	);
}

export default User;
