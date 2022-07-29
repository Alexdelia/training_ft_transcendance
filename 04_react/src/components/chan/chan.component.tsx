import React, { useState } from "react";

import SearchByName from "../../utils/search_by_name";

import Chat from "./chat.component";
import Users from "./user.component";

import i_chan from "../../interface/chan.interface";
import i_user from "../../interface/user.interface";

function Chans(props: { connected_user: i_user, chans: i_chan[], users: i_user[] })
{
	const [search, setSearch] = useState("");

	const searchHandle = (event: React.KeyboardEvent<HTMLInputElement>) =>
	{
		setSearch(event.target.value);
	};

	return (
		<div>
			<input className='card--input input--search' type='text' placeholder='🔍 ' onChange={searchHandle} value={search} />
			<SearchByName objs={props.chans} query={search} Constructor={Chan} />

			<div className='split split--chan split--center'>
				<div className='split--center--div' /*this style doesn't exist*/>
					<Chat chan={props.chans[1]} />
				</div>
			</div>

			<div className='split split--chan split--right'>
				<div className='split--center--div' /*this style doesn't exist*/>
					<Users connected_user={props.connected_user} users={props.users} />
				</div>
			</div >
		</div >
	);
}

function Chan(props: { obj: i_chan })
{
	return (
		<div>
			<div className='card card--border card--btn card--chan'>{props.obj.name}</div>
		</div>
	);
}

export default Chans;
