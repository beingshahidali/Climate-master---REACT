import React from "react";
import styled from "styled-components";
import WeatherInfoComponent from "./WeatherInfoComponent";
import { ImLocation2 } from "react-icons/im";
import { BiArrowBack } from "react-icons/bi";

const WeatherInfo = (props) => {
  const { weather, setFound, BackClick } = props;
  return (
    <>
      <Back
        onClick={(e) => {
          setFound(false);
          BackClick();
        }}
      >
        <BiArrowBack />
      </Back>
      <WeatherCondition>
        <WeatherLogo
          src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
        />
      </WeatherCondition>
      <Temperature>{`${Math.floor(weather?.main?.temp - 273)}°C`}</Temperature>
      <Condition>{weather?.weather[0]?.description}</Condition>
      <Location>
        <ImLocation2 /> {`${weather?.name},${weather?.sys?.country}`}
      </Location>
      <WeatherInfoContainer>
        <WeatherInfoComponent
          name="Feels like"
          value={`${Math.floor(weather?.main?.feels_like - 273)}°C`}
        />
        <WeatherInfoComponent
          name="Humidity"
          value={`${weather?.main?.humidity}%`}
        />
        <WeatherInfoComponent name="Wind" value={`${weather?.wind?.speed}`} />
        <WeatherInfoComponent
          name="pressure"
          value={`${weather?.main?.pressure}`}
        />
      </WeatherInfoContainer>
    </>
  );
};

export default WeatherInfo;

const WeatherCondition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: auto;
`;
const Back = styled.span`
  color: #43aefc;
  font-size: 25px;
  cursor: pointer;
  margin-right: 90%;

`;
const Temperature = styled.div`
  margin: auto;
  font-size: 50px;
  font-weight: bold;
`;
const Condition = styled.span`
  margin: 5px auto;
  font-size: 18px;
  text-transform: capitalize;
  font-weight: 50;
`;
const Location = styled.span`
  margin: 5px auto;
  font-size: 18px;
  font-weight: 50;
`;
const WeatherLogo = styled.img`
  width: 150px;
  height: 150px;
  margin: auto;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;
`;
