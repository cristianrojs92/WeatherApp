import React from 'react';

//Componentes
import { FilterFormControl, FilterLaber, SelectCity, City } from './CityFilter.styles';



function WeatherMain() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    };
  return (
    <FilterFormControl variant="outlined">
    <FilterLaber id="select-city-label">Cuidad</FilterLaber>
    <SelectCity
      labelId="select-city-label"
      id="select-city-outlined"
      value={age}
      onChange={handleChange}
      label="Age"
    >
      <City value="">
        <em>Ninguna</em>
      </City>
      <City value={10}>Montreal</City>
      <City value={20}>Chicago</City>
      <City value={30}>Seattle</City>
      <City value={30}>Yeongam-gun</City>
      <City value={30}>Rahway</City>
    </SelectCity>
    </FilterFormControl>
  );
}

export default WeatherMain;
