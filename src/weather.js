import React from "react";
import style from "./weather.module.css";
import isoCountries from "./countries.js";

const Weather = ({
	city,
	code,
	icon,
	desc,
	temp,
	feel,
	cloud,
	sunrise,
	sunset,
}) => {
	// convert unix to sunrise
	const dateObj = new Date(sunrise * 1000);
	console.log(dateObj);
	const utcString = dateObj.toUTCString();
	console.log(utcString);
	const sunriseTime = utcString.slice(-11, -4);
	console.log(sunriseTime);

	// convert unix to sunset
	const dateObj2 = new Date(sunset * 1000);
	const utcString2 = dateObj2.toUTCString();
	const sunsetTime = utcString2.slice(-11, -4);

	// Convert country code to country name

	const countryName = () => {
		return isoCountries[code].name;
	};

	const country = countryName();

	return (
		<div className={style.weather}>
			<p className={style.summary}>
				{city}, {country} - {desc}{" "}
				<img
					className={style.icon}
					src={`http://openweathermap.org/img/w/${icon}.png`}
					alt=""
				/>
			</p>
			<p className={style.temperature}> {({ temp } = Math.round(temp))}°c</p>
			<ul className="minor_data">
				<li>(Feels like {({ feel } = Math.round(feel))}°c)</li>
				<li>Cloudiness {cloud}%</li>
				<li>Sunrise {sunriseTime} AM</li>
				<li>Sunset {sunsetTime} PM</li>
			</ul>
		</div>
	);
};

export default Weather;
