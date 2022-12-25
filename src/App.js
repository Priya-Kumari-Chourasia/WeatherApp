import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import CityComp from "./modules/CityComp";
import WeatherComp from "./modules/WeatherComp";
const API_KEY = "fe4feefa8543e06d4f3c66d92c61b69c";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 400px;
  background: white;
`;

const AppLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

function App() {
  const [city, updateCity] = useState("");
  const [weather, updateweather] = useState("");

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    // console.log(response)
    updateweather(response.data);
  };

  return (
    <Container>
      <AppLabel>Weather App</AppLabel>

      {weather ? (
        <WeatherComp weather={weather}  />
      ) : (
        <CityComp updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
