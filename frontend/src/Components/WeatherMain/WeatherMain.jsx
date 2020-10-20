import React from 'react';

import { WeatherContainer, WeatherCard, WeatherHeader, WeatherContent, WeatherFooter,
         WeatherLogo, NameCity, Description, WeatherTemp, TempContainer, Temp, WeatherInfo, Info } from "./WeatherMain.styles";

function WeatherMain({weatherMain}) {
  return (
    weatherMain &&
    <WeatherCard>
      <WeatherContainer>
        <WeatherHeader>
          <NameCity variant="h4" gutterBottom>
            {weatherMain.city} 
          </NameCity>
          <Description variant="h6" gutterBottom>
            {weatherMain.description} 
          </Description>
        </WeatherHeader>
        <WeatherContent>
          <WeatherTemp>
            <WeatherLogo src={weatherMain.urlIcon}/>
            <TempContainer>
              <Temp variant="h4">{`${weatherMain.temp} C°`}</Temp>
            </TempContainer>        
          </WeatherTemp>
          <WeatherInfo>
            <Info>{`Temperatura minima ${weatherMain.tempMin} C°`}</Info>
            <Info>{`Temperatura maxima ${weatherMain.tempMax} C°`}</Info>
            <Info>{`Humedad ${weatherMain.humidity} %`}</Info>
          </WeatherInfo>
        </WeatherContent>
        <WeatherFooter>

        </WeatherFooter>      
      </WeatherContainer>
    </WeatherCard>
  );
}

export default WeatherMain;
