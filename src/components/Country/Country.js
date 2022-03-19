import React from 'react';
import'./Country.css'

const Country = (props) => {
    const {area, name, flags, population } = props.country;
    return (
        <div className='single-countries'>
            <h4>Country Name: {name.common}</h4>
            <img src={flags.png} alt="" />
            <p>Area:  {area} </p>
            <p>Population:  {population} </p>
        </div>
    );
};

export default Country;