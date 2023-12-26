import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import CityComponent from "./components/CityComponent";
import CurrentLocation from "./components/CurrentLocation";
import Error from "./components/Error";
import WeatherInfo from "./components/WeatherInfo";

import API_KEY from "./ApiKey.js";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [found, setFound] = useState(false);
  const [apierror, setApierror] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (CurrCity) => {
    if (CurrCity) {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${CurrCity}&appid=${API_KEY}`
        );
        setWeather(response.data);
        setFound(true);
        setApierror(false);
      } catch {
        setApierror(true);
        setFound(false);
      }
      setLoading(false);
    }
  };
  const formatDateTime = () => {
      const currentDate = new Date();
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      return currentDate.toLocaleDateString('en-US', options);
  };

  return (
    <Container>
      <AppLabel>CLIMATE MASTER  </AppLabel>
      
      {weather && found ? (
        <WeatherInfo
          weather={weather}
          setFound={setFound}
          BackClick={() => {
            setCity("");
          }}
        />
      ) : apierror && city.length > 0 ? (
        <Error
          setApierror={setApierror}
          BackClick={() => {
            setCity("");
          }}
        />
      ) : (
        <>
          <CityComponent
            setCity={(e) => {
              setCity(e);
            }}
            city={city}
            fetchWeather={fetchWeather}
            weather={weather}
            loading={loading}
          />
          <div>or</div>
          <CurrentLocation
            setCity={setCity}
            setFound={setFound}
            fetchWeather={fetchWeather}
          />
        </>
      )}
      
      <DateTime>{formatDateTime()}</DateTime>
      <GitHubLink href="https://github.com/beingshahidali" target="_blank">
        <GitHubImage
          src="https://assets.stickpng.com/images/5847f98fcef1014c0b5e48c0.png"
          alt="GitHub"
        />
      </GitHubLink>
    </Container>
  );
}
export default App;
const GitHubLink = styled.a`
  display: inline-block;
  margin-top: 5px;
  margin-right: 10px; /* Adjust the margin as needed */
  text-decoration: none;
`;

const GitHubImage = styled.img`
  width: 40px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1); 
  }
`;
const DateTime = styled.span`
  background-color: #5D4E3F;
  color: white;
  padding:10px;
  font-size: 15px;
  border-radius:20px;
  weight: bold;
  margin-top: 10px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 40px 20px;
  border-radius: 4px;
  width: 380px;
  background-color: white;
  font-family: "DM Sans", sans-serif;
  border-radius: 40px;
  border: 1px solid #5C9ED1;
  -webkit-box-shadow: 0px 0px 95px 47px rgba(93,78,63,1);
-moz-box-shadow: 0px 0px 95px 47px rgba(93,78,63,1);
box-shadow: 0px 0px 95px 47px rgba(93,78,63,1);

  > div {
    margin: auto;
    padding-bottom: 15px;
    font-weight: bold;
    font-size: 23px;
    color: gray;
  }
`;
const AppLabel = styled.span`
  color: #5D4E3F;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: -22px;
  letter-spacing:1px;
  font-family: verdana, arial,
`;
