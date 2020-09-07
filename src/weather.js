import React from "react";
import style from "./weather.module.css";
import isoCountries from "./countries.js";
import moment from "moment";

/**
 * Weather view displaying the retrieved data from Open Weather API/App component.
 *     Some console logs have been left for debugging on purpose for convenience of reviewers.
 * @param  {string} city
 * @param  {number} code
 * @param  {img} icon
 * @param  {string} desc
 * @param  {number} temp
 * @param  {number} feel
 * @param  {number} cloud
 * @param  {number} sunrise
 * @param  {number} sunset
 * @param  {number} timezone
 */
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
	const sunriseTimeZoneConversion = sunrise + timezone;
	// console.log("sunrise conversion: " + sunriseTimeZoneConversion);

	let dateAfterConversion = moment.unix(sunriseTimeZoneConversion).utc();
	// console.log("date after conversion: " + dateAfterConversion);

	let sunriseHours = moment(dateAfterConversion).hour();
	let sunriseMinutes =
		(moment(dateAfterConversion).minute() < 10 ? "0" : "") +
		moment(dateAfterConversion).minute();
	const sunriseTime = `${sunriseHours}:${sunriseMinutes}`;

	// convert unix to sunset
	const sunsetTimeZoneConversion = sunset + timezone;
	console.log("sunset conversion: " + sunsetTimeZoneConversion);

	let dateAfterSunsetConversion = moment
		.unix(sunsetTimeZoneConversion)
		.utc()
		.format();

	console.log("string after sunset conversion: " + dateAfterSunsetConversion);

	let sunsetHours = moment(dateAfterSunsetConversion).hour();
	let sunsetMinutes =
		(moment(dateAfterSunsetConversion).minutes() < 10 ? "0" : "") +
		moment(dateAfterSunsetConversion).minutes();

	console.log("sunset minutes: " + sunsetMinutes);

	const sunsetTime = `${sunsetHours}:${sunsetMinutes}`;

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
				<li>Sunrise {sunriseTime} </li>
				<li>Sunset {sunsetTime} </li>
			</ul>
		</div>
	);
};

export default Weather;
