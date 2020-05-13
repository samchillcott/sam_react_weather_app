import React from "react";
import style from "./weather.module.css";

const Weather = ({ city, code, temp, feel, cloud, sunrise, sunset }) => {
	// const dateObj = new Date({ sunrise } * 1000);
	// const hours = dateObj.getUTCHours();
	// console.log(hours);
	// const minutes = dateObj.getUTCMinutes();
	// const sunriseTime = `${hours}:${minutes}`;
	// console.log(sunriseTime);

	// const unixTimestamp = { sunrise };
	// const milliseconds = unixTimestamp * 1000;
	// const dateObject = new Date(milliseconds);
	// const humanDateFormat = dateObject.toLocaleString();

	// convert unix to sunrise
	const dateObj = new Date(sunrise * 1000);
	const utcString = dateObj.toUTCString();
	const sunriseTime = utcString.slice(-11, -4);

	// convert unix to sunset
	const dateObj2 = new Date(sunset * 1000);
	const utcString2 = dateObj2.toUTCString();
	const sunsetTime = utcString2.slice(-11, -4);

	return (
		<div className={style.weather}>
			<p>
				Current Weather For {city}, {code}
			</p>
			<ul>
				<li>Temperature {temp}°c</li>
				<li>Feels like {feel}°c</li>
				<li>Cloudiness {cloud}%</li>
				<li>Sunrise {sunriseTime}</li>
				<li>Sunset {sunsetTime}</li>
			</ul>
		</div>
	);
};

export default Weather;
