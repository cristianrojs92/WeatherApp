import React from 'react';

import { WeatherContainer, WeatherCard, Header, Body, WeatherLogo,
         NameCity, Description,TempBody,  Temp, TempContainer, InfoContainer, Info } from "./WeatherMain.styles";

function WeatherHeader({city, description}) {
  return (
      <Header>
        <NameCity variant="h4" gutterBottom>
          {city} 
        </NameCity>
        <Description variant="h6" gutterBottom>
          {description} 
        </Description>
      </Header>
  );
}

function WeatherTemp({urlIcon, temp}) {
  return (
    <TempBody>
      <WeatherLogo src={urlIcon}/>
      <TempContainer>
        <Temp variant="h4">{`${temp} C°`}</Temp>
      </TempContainer>        
    </TempBody>
  );
}

function WeatherInfo({tempMin, tempMax, humidity}) {
  return (
    <InfoContainer>
      <Info>{`Temperatura minima ${tempMin} C°`}</Info>
      <Info>{`Temperatura maxima ${tempMax} C°`}</Info>
      <Info>{`Humedad ${humidity} %`}</Info>
    </InfoContainer>
  );
}

function WeatherBody({urlIcon, temp, tempMin, tempMax, humidity}) {
  return (
      <Body>
        <WeatherTemp urlIcon={urlIcon} temp={temp}/>
        <WeatherInfo tempMin={tempMin} tempMax={tempMax} humidity={humidity}/>
      </Body>
  );
}

function WeatherMain({weatherMain}) {
  const {
          city,
          description,
          urlIcon,
          temp,
          tempMin,
          tempMax,
          humidity
        } = weatherMain;

  return (
    weatherMain &&
    <WeatherCard>
      <WeatherContainer>
        <WeatherHeader city={city} description={description}/>
        <WeatherBody urlIcon={urlIcon} temp={temp} tempMin={tempMin} tempMax={tempMax} humidity={humidity}/>   
      </WeatherContainer>
    </WeatherCard>
  );
}

export default WeatherMain;
