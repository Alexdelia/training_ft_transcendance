//import { useState } from "react";

interface i_user {
	name: string;
}

function User(props: i_user) {
	return (
		<div className='card'>
			<h2>{props.name}</h2>
			<div className='action'>
				<button className='btn'>💬</button>
				<button className='btn'>👤</button>
			</div>
		</div>
	);
}

export default User;