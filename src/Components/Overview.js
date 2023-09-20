import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Overview = () => {
	const currentDisplay = useSelector(selectDisplay);
    const mapsPlace = currentDisplay.name.official;
	return (
		<div className='stack'>
			<h1>{currentDisplay.name.official}</h1>
			<div className='langTrans'>
				<h3 id='titlelang'>Language Translations:</h3>
				{Object.values(currentDisplay.translations).map((trans, index) => {
					return <p key={index}>{trans.common}</p>;
				})}
			</div>
			<h2>{currentDisplay.name.common}</h2>
			<div className={"flagBorder"}>
				{currentDisplay.coatOfArms === "" ? (
					<img
						className='flags'
						src={currentDisplay.coatOfArms.png}
						alt='picture of coat of arms'
					/>
				) : (
					<img
						className='flags'
						src={currentDisplay.flags.png}
						alt='flag'
					/>
				)}
			</div>
			
			<div className={"countryInfo"}>
				<h2
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						gap: 15,
					}}>
					{" "}
					Current Population: <p>{currentDisplay.population}</p>{" "}
				</h2>
				<br></br>
			</div>
			<h2>View on World Map</h2>
			<div>
				<iframe
					className='maps'
					width='400'
					height='350'
					style={{ borderRadius: 30 }}
					loading='lazy'
					allowFullScreen
					src={`https://www.google.com/maps/embed/v1/place?q=${mapsPlace}&key=AIzaSyBhxkhETAxu0qYJa-gCTo_uPu1PL7LcFj8`}></iframe>
			</div>
		</div>
	);
};

export default Overview;
