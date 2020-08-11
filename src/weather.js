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
	timezone,
}) => {
	// convert unix to sunrise
	console.log(sunrise);

	// convert timezone
	console.log("timezone: " + timezone);
	const sunriseTimeZoneConversion = sunrise + timezone;
	console.log("sunrise conversion: " + sunriseTimeZoneConversion);
	const dateObj = new Date(sunriseTimeZoneConversion * 1000);

	console.log("date obj: " + dateObj);
	let sunriseHours = dateObj.getHours();
	let sunriseMinutes = dateObj.getMinutes();
	console.log(sunriseHours, sunriseMinutes);

	const sunriseTime = `${sunriseHours}:${sunriseMinutes}`;

	// const toString = dateObj.toString();
	// console.log("to string: " + toString);

	// const sunriseTime = toString.slice(-11, -4);
	// console.log("sunrise time: " + sunriseTime);

	// convert unix to sunset
	const dateObj2 = new Date(sunset * 1000);
	let sunsetHours = dateObj2.getHours();

	let sunsetMinutes = dateObj2.getMinutes();
	const sunsetTime = `${sunsetHours}:${sunsetMinutes}`;

	// const utcString2 = dateObj2.toUTCString();
	// const sunsetTime = utcString2.slice(-11, -4);

	// Convert country code to country name

	const countryName = () => {
		return isoCountries[code].name;
	};

	const country = countryName();

	return (
		<div className={style.weather}>
			{console.log("weather comp render")}

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
