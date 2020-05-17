import React, { useEffect, useState } from "react";
import Weather from "./weather";
import "./App.css";

const App = () => {
	const API_KEY = "e55f6512fa859d8ffa450609930032ad";

	const [weather, setWeather] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("");

	const getWeather = async () => {
		// try {
		// if query isn't an empty string then we run the code for getWeather()
		console.log(query !== "");
		if (query !== "") {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${API_KEY}`
			);
			if (response.ok) {
				const data = await response.json();
				setWeather(data);
				console.log(data);
			} else {
				alert("Check your spelling for your city");
			}
			// if the query is an empty string then we don't run the code
		}
		// throw new Error("Request failed");
		// } catch (error) {
		// 	console.log(error);
		// 	alert(error);
		// }
	};

	useEffect(() => {
		getWeather();
		// eslint-disable-next-line
	}, [query]);

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};

	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
		setSearch("");
	};

	// set background conditionals
	// if cloudiness is below 50% and temperature above 20*C set to sunny bg
	// if cloudiness is below 50% and temperature below 20*C set to non sunny
	// if cloudiness is above 50% and temperature below 20*C set to jack

	// const setBackground = () => {
	// 	if (weather.clouds.all < 50 & weather.main.temp >=20) {
	// 		apply style background-nosun
	// 	} else if (weather.clouds.all < 50 & weather.main.temp < 20) {
	// 		apply style background-sun
	// 	} else if (weather.clouds.all > 50 & weather.main.temp < 20) {
	// 		apply style background-jack
	// 	}

	return (
		<div 
	// 		{if ((weather.main.temp > 20) & (weather.clouds.all < 50)) {
	// 			className={"background-sun"}
	// 		} else { 
	// 			"App"
	// 		}
	// 	}
	// }

			className={
				typeof weather.main != "undefined"
					? (weather.main.temp > 20) & (weather.clouds.all < 50)
						? "background-sun"
						: (weather.main.temp < 20) & (weather.clouds.all < 50)
						? "background-nosun"
						: (weather.main.temp < 20) & (weather.clouds.all > 50)
						? "background-jack"
						: "App"
					: "App"
			}
		>
			<h1 className="title">Weather App</h1>
			<form onSubmit={getSearch} className="search-form">
				<input
					className="search-bar"
					type="text"
					placeholder="City name"
					value={search}
					onChange={updateSearch}
				/>
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
			{typeof weather.main != "undefined" ? (
				<div className="weather">
					<Weather
						key={weather.id}
						city={weather.name}
						code={weather.sys.country}
						temp={weather.main.temp}
						feel={weather.main.feels_like}
						cloud={weather.clouds.all}
						sunrise={weather.sys.sunrise}
						sunset={weather.sys.sunset}
					/>
				</div>
			) : (
				[""]
			)}
		</div>
	);
};
export default App;
