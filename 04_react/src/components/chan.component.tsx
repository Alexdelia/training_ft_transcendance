import React, { useState } from "react";

import i_chan from "../interface/chan.interface";

function strncmp(str1: string, str2: string, n: number): boolean
{
	str1 = str1.substring(0, n);
	str2 = str2.substring(0, n);
	return ((str1 === str2) ? true : false);
}

function Search(props: { chans: i_chan[], query: string })
{
	let ret_chans: JSX.Element[] = [];

	for (let i = 0; i < Object.keys(props.chans).length; i++)
	{
		if (props.query.length === 0 || strncmp(props.query, props.chans[i].name, props.query.length))
			ret_chans.push(<Chan chan={props.chans[i]} />);
	}
	return (
		<div>
			{ret_chans};
		</div>
	);
}

function Chans(props: { chans: i_chan[] })
{
	const [search, setSearch] = useState("");

	const searchHandle = (event: React.KeyboardEvent<HTMLInputElement>) =>
	{
		setSearch(event.target.value);
	};

	return (
		<div>
			<input className='card--input input--search' type='text' placeholder='🔍 ' onChange={searchHandle} value={search} />
			<Search query={search} chans={props.chans} />
		</div>
	);
}

function Chan(props: { chan: i_chan })
{
	return (
		<div>
			<div className='card card--border card--btn card--chan'>{props.chan.name}</div>
		</div>
	);
}

export default Chans;
