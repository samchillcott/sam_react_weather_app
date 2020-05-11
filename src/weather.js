import React from "react";
import style from "./weather.module.css";

const Weather = ({ city, code, temp, feel, cloud, sunrise, sunset }) => {
	return (
		<div className={style.weather}>
            <p>Current Weather For {city}, {code} </p>
            <ul>
                <li>Temperature {temp} Celsuis</li>
                <li>Feels like {feel} Celsius</li>
                <li>Cloudiness {cloud} %</li>
                <li>Sunrise {sunrise}</li>
                <li>Sunset {sunset}</li>
            </ul>
		</div>
	);
};

export default Weather;
