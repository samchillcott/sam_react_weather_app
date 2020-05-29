import React, { useEffect, useState } from "react";
import Weather from "./weather";
import "./App.css";

const App = () => {
	const API_KEY = "e55f6512fa859d8ffa450609930032ad";

	const [weather, setWeather] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("");

	const getWeather = async () => {
		// if query isn't an empty string then we run the code for getWeather()
		console.log(query !== "");
		if (query !== "") {
			let response = null;
			try {
				response = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${API_KEY}`
				);
			} catch (error) {
				console.log(error);
				alert("Failed to connect to the API");
			}

			if (response != null) {
				if (response.ok) {
					const data = await response.json();
					setWeather(data);
					console.log(data);
				} else {
					alert("City not in database / Check your spelling");
				}
			}
		}
	};

	useEffect(() => {
		getWeather();
		// eslint-disable-next-line
	}, [query]);

	const updateSearch = (e) => {
		// console.log("repeat");
		setSearch(e.target.value);
	};

	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
		setSearch("");
	};

	let backgroundClass = "App";
	if (weather.main !== undefined) {
		if ((weather.main.temp > 20) & (weather.clouds.all < 50)) {
			backgroundClass = "background-sun";
		} else if ((weather.main.temp < 20) & (weather.clouds.all < 50)) {
			backgroundClass = "background-nosun";
		} else if ((weather.main.temp < 20) & (weather.clouds.all > 50)) {
			backgroundClass = "background-jack";
		} else if ((weather.main.temp > 20) & (weather.clouds.all > 50)) {
			backgroundClass = "background-sun_clouds";
		}
	}

	return (
		<div className={backgroundClass}>
			{console.log("grrr")}
			<div className="wrapper">
				<div className="header">
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
				</div>
				{typeof weather.main != "undefined" ? (
					<div className="weather">
						<Weather
							icon={weather.weather[0].icon}
							key={weather.id}
							city={weather.name}
							code={weather.sys.country}
							desc={weather.weather[0].description}
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
		</div>
	);
};
export default App;
