import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";
const Weather = () => {
	const [weather, setWeather] = useState({
		region: "",
		backup: "",
		country: "",
		conditions: "",
		icon: "",
		temperature: "",
		feelsLike: "",
		humidity: "",
		windSpeed: "",
	});

	const currentDisplay = useSelector(selectDisplay);

	const axios = require("axios");
    const source = axios.CancelToken.source();
    console.log(currentDisplay.name.common)
	const params = currentDisplay.latlng[1];
	const params2 = currentDisplay.latlng[2];
	const options = {
		method: "GET",
		url: "https://weatherapi-com.p.rapidapi.com/current.json",
		params: { q: `${params},${params2}` },
		headers: {
			"X-RapidAPI-Key": "9a2570b026msh9e8b48edef23f34p190e59jsnc9973747cfa7",
			"X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
			cancelToken: source.token,
		},
	};

	const fetchWeather = async () => {
		try {
			const res = await axios.request(options);

			console.log(res.data);

			return setWeather({
				region: res.data.location.region,
				backup: res.data.location.name,
				country: res.data.location.country,
				icon: res.data.current.condition.icon,
				conditions: res.data.current.condition.text,
				temperature: res.data.current.temp_f,
				feelsLike: res.data.current.feelslike_f,
				humidity: res.data.current.humidity,
				windSpeed: res.data.current.wind_mph,
			});
		} catch (error) {
			if (axios.isCancel(error)) {
				console.log("Request canceled due to component unmounting");
			} else {
				console.error(error);
			}
		}
	};
	useEffect(() => {
		fetchWeather();
	}, []);

	return (
		<div>
			<div className='overview-table'>
                <h1 style={{ color: 'white'}}>
					{currentDisplay.capital},<br></br> {currentDisplay.name.common}
				</h1>

				<div className={"weather-tables"}>
					<div className={"tables"}>
						<h1>Current Conditions : {weather.conditions} </h1>
						<img
							src={weather.icon}
							className='icon'
						/>
						<h1>Currently : {weather.temperature} Fahrenheit</h1>
					</div>
				</div>

				<div className={"bottom-wrapper"}>
					<div>
						<div className={"weather-tables start"}>
							<h1>Feels Like : {weather.feelsLike} Fahrenheit</h1>
						</div>
					</div>
					<div>
						<div className={"weather-tables"}>
							<h1>Humidity : {weather.humidity}%</h1>
						</div>
					</div>
					<div>
						<div className={"weather-tables"}>
							<h1> Wind Speed : {weather.windSpeed} mph </h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Weather;
