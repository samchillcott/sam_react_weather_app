import React, { useEffect, useState } from "react";
import Weather from "./weather";
import "./App.css";

const App = () => {
	const API_KEY = "e55f6512fa859d8ffa450609930032ad";

	const [weather, setWeather] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("");

	const getWeather = async () => {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`
		);
		const data = await response.json();
		setWeather(data.hits);
		console.log(data.hits);
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

	return (
		<div className="App">
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
			<div className="weather">
				<Weather />
			</div>
		</div>
	);
};
export default App;
