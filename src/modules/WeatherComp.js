import styled from "styled-components";

export const WeatherInfoIcons = {
  sunset: "/weather/public/icons/temp.svg",
  sunrise: "/weather/public/icons/temp.svg",
  humidity: "/weather/public/icons/humidity.svg",
  wind: "/weather/public/icons/wind.svg",
  pressure: "/weather/public/icons/pressure.svg",
};

export const WeatherIcons = {
  "01d": "/weather/public/icons/cloudy-night.svg",
  "01n": "/weather/public/icons/night.svg",
  "02d": "/weather/public/icons/day.svg",
  "02n": "/weather/public/icons/cloudy-night.svg",
  "03d": "/weather/public/icons/cloudy.svg",
  "03n": "/weather/public/icons/cloudy.svg",
  "04d": "/weather/public/icons/perfect-day.svg",
  "04n": "/WeatherApp/public/icons/cloudy-night.svg",
  "09d": "/WeatherApp/public/icons/rain.svg",
  "09n": "/WeatherApp/public/icons/rain-night.svg",
  "10d": "/WeatherApp/public/icons/rain.svg",
  "10n": "/WeatherApp/public/icons/rain-night.svg",
  "11d": "/WeatherApp/public/icons/storm.svg",
  "11n": "/WeatherApp/public/icons/storm.svg",
};

const WeatherCondition = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 30px auto;
`;

const Condition = styled.span`
  margin: 20px auto;
  font-size: 14px;
  & span {
    font-size: 28px;
  }
`;

const WeatherLogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 10px auto;
`;

const Location = styled.span`
  font-size: 28px;
  font-weight: bold;
`;

const WeatherInfoLabel = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin: 20px 25px 10px;
  text-align: start;
  width: 100%;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
`;

const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[name]} />
      <InfoLabel>
        {value}
        <span>{name}</span>
      </InfoLabel>
    </InfoContainer>
  );
};

const WeatherComp = (props) => {
  const { weather } = props;
  const isDay = weather?.weather[0].icon?.includes("d");
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };

  return (
    <>
      <WeatherCondition>
        <Condition>
          <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
          {`| ${weather?.weather[0].description}`}
        </Condition>
        <WeatherLogo src={WeatherIcons[weather?.weather[0].icon]} />
      </WeatherCondition>
      <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
      <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
      <WeatherInfoContainer>
        <WeatherInfoComponent
          name={isDay ? "sunset" : "sunrise"}
          value={getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}
        />
        <WeatherInfoComponent name="humidity" value={weather?.main?.humidity} />
        <WeatherInfoComponent name="wind" value={weather?.wind?.speed} />
        <WeatherInfoComponent name="pressure" value={weather?.main?.pressure} />
      </WeatherInfoContainer>
    </>
  );
};

export default WeatherComp;
