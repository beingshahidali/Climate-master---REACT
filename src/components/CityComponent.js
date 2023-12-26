import React from "react";
import styled from "styled-components";

const CityComponent = (props) => {
  const { setCity, fetchWeather, city } = props;

  return (
    <>
      <WeatherLogo src="https://cdn-icons-png.flaticon.com/512/6122/6122436.png"></WeatherLogo>
      
      <SearchBox
        onSubmit={(e) => {
          e.preventDefault();
          fetchWeather(city);
        }}
      >
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </SearchBox>
    </>
  );
};

export default CityComponent;

const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 30px auto;
`;

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin: 12px auto;
  border:  solid 2px #5D4E3F;
  border-radius: 20px;
  & input {
    padding: 10px;
    font-size: 18px;
    border: none;
    outline: none;
    text-align: center;
    border-radius: 20px;
  }
  & button {
    padding: 10px;
    font-size: 18px;
    border: none;
    color: white;
    background-color: #5D4E3F;
    cursor: pointer;
    border-top-right-radius: 18px; 
  border-bottom-right-radius: 18px;
  }
`;


