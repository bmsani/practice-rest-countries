import React, { useEffect, useState } from 'react';

const Countries = () => {
    const [countries, setCountry] = useState([]);

    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])

    return (
        <div>
            <h1>Number of countries: {countries.length} </h1>
        </div>
    );
};

export default Countries;