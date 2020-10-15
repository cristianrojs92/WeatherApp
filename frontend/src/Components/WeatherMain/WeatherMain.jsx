import React from 'react';

import { WeatherContainer, WeatherHeader, WeatherContent, WeatherFooter,
         WeatherLogo, NameCity, NameCoutry, WeatherTemp, TempContainer, Temp, WeatherInfo, Info } from "./WeatherMain.styles";


function WeatherMain() {
  return (
    <WeatherContainer>
      <WeatherHeader>
        <NameCity variant="h4" gutterBottom>
          {"San Francisco Solano"} 
        </NameCity>
        <NameCoutry variant="h6" gutterBottom>
           {"Argentina"} 
        </NameCoutry>
      </WeatherHeader>
      <WeatherContent>
        <WeatherTemp>
          <WeatherLogo src={"http://openweathermap.org/img/wn/10d@2x.png"}/>
          <TempContainer>
            <Temp variant="h4">20 C°</Temp>
          </TempContainer>        
        </WeatherTemp>
        <WeatherInfo>
          <Info>Temperatura minima 13 C°</Info>
          <Info>Temperatura maxima 27 C°</Info>
          <Info>Humedad 10 %</Info>
        </WeatherInfo>
      </WeatherContent>
      <WeatherFooter>

      </WeatherFooter>      
    </WeatherContainer>
  );
}

export default WeatherMain;
