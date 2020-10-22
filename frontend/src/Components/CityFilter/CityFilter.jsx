import React from 'react';

//Componentes
import { FilterFormControl, FilterLaber, SelectCity, City } from './CityFilter.styles';

function CityFilter({ onSelect, cities }) {

  if(!Array.isArray(cities) || (cities.length < 0)) {
    return null;
  }

  const onChange = (event) => {
    onSelect(event.target.value);
  };

  return (
    <FilterFormControl>
    <FilterLaber id="select-city-label">Cuidad</FilterLaber>
      <SelectCity
        labelId="select-city-label"
        id="select-city-outlined"
        onChange={onChange}
        label="City"
      >
        {
          cities.map((city, index ) => <City key={index} value={city}>{city} </City>)
        }
      </SelectCity>
    </FilterFormControl>
  );
}

export default CityFilter;
