import React from "react";
import style from "./weather.module.css";
import isoCountries from "./countries.js";

const Weather = ({ city, code, desc, temp, feel, cloud, sunrise, sunset }) => {
	// convert unix to sunrise
	const dateObj = new Date(sunrise * 1000);
	const utcString = dateObj.toUTCString();
	const sunriseTime = utcString.slice(-11, -4);

	// convert unix to sunset
	const dateObj2 = new Date(sunset * 1000);
	const utcString2 = dateObj2.toUTCString();
	const sunsetTime = utcString2.slice(-11, -4);

	// Convert country code to country name

	const countryName = () => {
		console.log(code);
		console.log(isoCountries);
		return isoCountries[code].name;
	};

	const country = countryName();

	return (
		<div className={style.weather}>
			<p>
				Current Weather For {city}, {country}
			</p>
			<ul>
				<li>Summary: {desc}</li>
				<li>Temperature {({ temp } = Math.round(temp))}°c</li>
				<li>Feels like {({ feel } = Math.round(feel))}°c</li>
				<li>Cloudiness {cloud}%</li>
				<li>Sunrise {sunriseTime} AM</li>
				<li>Sunset {sunsetTime} PM</li>
			</ul>
		</div>
	);
};

export default Weather;
