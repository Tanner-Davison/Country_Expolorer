import React, { useState } from "react";
import Overview from "./Overview";
import Weather from './Weather';
import Symbol from "./Symbol";

const MainDisplay = () => {
	const [view, setView] = useState("Overview");
	
    return (
			<div className='stack'>
				<div className='tab-select'>
					<button onClick={() => setView("Overview")}>{view}</button>
					<button onClick={() => setView("Weather")}>
						Current Weather at Capitol
					</button>
					<button onClick={() => setView("Symbols")}>Symbols</button>
				</div>
				{view === "Overview" && <Overview />}
				{view === "Weather" && <Weather />}
				{view === "Symbols" && <Symbol />}
			</div>
		);
};

export default MainDisplay;
