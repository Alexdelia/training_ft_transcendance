import React from 'react';

import ChanPage from './components/chan/chan.page';

function App()
{
	return (
		<div>
			<ChanPage connected_user={{ name: "adelille" }} />
		</div>
	);
}

export default App;
