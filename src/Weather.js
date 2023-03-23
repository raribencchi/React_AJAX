import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=49e5da6325b173bba5c08dae7a5eba79&units=metric`;

  axios.get(url).then(showTemperature);

  if (temperature !== null) {
    return (
      <strong>
        {" "}
        <p>
          The temperature in {props.city} is {Math.round(temperature)} °C{" "}
        </p>
      </strong>
    );
  } else {
    return <h2> The temperature in {props.city} is loading..</h2>;
  }
}
