import './Country.css'
import React from 'react';

const Country = (props) => {
    const {name, population, region, area,flags} = props.country;
    return (
        <div className='countryContainer'>
            <h1>Country Name: {name.common}</h1>
            <img src={flags.png} alt="" />
            <h2>Population: {population}</h2>
            <p><small>Region: {region}</small></p>
            <p><small>Area:  {area}</small></p>
        </div>
    );
};

export default Country;