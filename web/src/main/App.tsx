import React, { useState } from 'react';
import './App.css'
import { DebugData } from "../utils/debugData";
import { FetchNui } from "../utils/fetchNui";

// This will set the NUI to visible if we are
// developing in browser
DebugData([
	{
		action: 'visible',
		data: true,
	}
])

const App: React.FC = () => {
	return (
		<div>
			
		</div>
	);
}

export default App;
