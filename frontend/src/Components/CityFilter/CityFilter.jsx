import React from 'react';

//Componentes
import { FilterFormControl, FilterLaber, SelectCity, City } from './CityFilter.styles';



function CityFilter({ onSelect }) {

  const onChange = (event) => {
    onSelect(event.target.value);
  };

  return (
    <FilterFormControl variant="outlined">
    <FilterLaber id="select-city-label">Cuidad</FilterLaber>
      <SelectCity
        labelId="select-city-label"
        id="select-city-outlined"
        onChange={onChange}
        label="City"
      >
        <City value={'Montreal'}>Montreal</City>
        <City value={'Chicago'}>Chicago</City>
        <City value={'Seattle'}>Seattle</City>
        <City value={'Yeongam-gun'}>Yeongam-gun</City>
        <City value={'Rahway'}>Rahway</City>
      </SelectCity>
    </FilterFormControl>
  );
}

export default CityFilter;
