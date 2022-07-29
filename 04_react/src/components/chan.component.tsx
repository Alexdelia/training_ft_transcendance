import { useState } from "react";

import i_chan from "../interface/chan.interface";

function Chan(props: { chan: i_chan })
{
	return (
		<div>
			<div className='card card--border card--btn card--chan'>{props.chan.name}</div>
		</div>
	);
}

export default Chan;
