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
      { temp !== undefined &&
        <TempContainer>
        <Temp variant="h4">{${temp} C°}</Temp>
        </TempContainer>  
      }      
    </TempBody>
  );
}

function WeatherInfo({tempMin, tempMax, humidity}) {
  return (
    <InfoContainer>
      {
        tempMin !== undefined &&
        <Info>{Temperatura minima ${tempMin} C°}</Info>
      }
      {
        tempMax !== undefined &&
        <Info>{Temperatura maxima ${tempMax} C°}</Info>
      }
      {
        humidity !== undefined &&
        <Info>{Humedad ${humidity} %}</Info>
      }    
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
    if(!weatherMain) {
      return null;
    }

    const {
      city,
      description,
      urlIcon,
      temp,
      tempMin,
      tempMax,
      humidity
    } = weatherMain || '';

    return (
      weatherMain &&
      <WeatherCard variant="outlined">
        <WeatherContainer>
          <WeatherHeader city={city} description={description}/>
          <WeatherBody urlIcon={urlIcon} temp={temp} tempMin={tempMin} tempMax={tempMax} humidity={humidity}/>   
        </WeatherContainer>
      </WeatherCard>
    );
}

export default WeatherMain;
