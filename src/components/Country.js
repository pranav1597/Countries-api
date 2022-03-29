import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Country({darkMode}) {

    const[country, setCountry] = useState([])
    const { name } = useParams()

    
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(res => res.json())
        .then(data => setCountry(data));
    }, [])

    return (
        <div className='country-details'>
            {/* {props.countries.name.common} */}
    <Link to="/" className={`btn ${darkMode ? 'darkMode' : ''}`}>
        <i className={`fas fa-arrow-left ${darkMode ? 'darkMode' : ''}`}></i>
        Back
    </Link>

        <div className={`country-details-one ${darkMode ? 'darkMode' : ''}`}>
           {country.map((count) => {
               const {cca2, name , capital, region,subregion,tld, population, flags,  area, maps} = count
               return(
                   <div className="details-one">
                        <img key={name.common} src={flags.svg} alt={name.common} className="flag"></img>

                        <div className="countries-info info-one">
                            <h1 className={`country-name ${darkMode ? 'darkMode' : ''}`}>{name.common}</h1>
                            <h3  className={`details-name ${darkMode ? 'darkMode' : ''}`}><span className={`details-name ${darkMode ? 'darkMode' : ''}`}>Native name:</span> {name.official}</h3>
                            <h3  className={`details-name ${darkMode ? 'darkMode' : ''}`}><span className={`details-name ${darkMode ? 'darkMode' : ''}`}>Population:</span> {population}</h3>
                            <h3  className={`details-name ${darkMode ? 'darkMode' : ''}`}><span className={`details-name ${darkMode ? 'darkMode' : ''}`}>Region:</span> {region}</h3>
                            <h3  className={`details-name ${darkMode ? 'darkMode' : ''}`}><span className={`details-name ${darkMode ? 'darkMode' : ''}`}>Sub Region:</span> {subregion}</h3>
                            <h3  className={`details-name ${darkMode ? 'darkMode' : ''}`}><span className={`details-name ${darkMode ? 'darkMode' : ''}`}>Capital:</span> {capital}</h3>
                        </div>

                        <div className="countries-info info-two">
                           
                            <h3  className={`details-name ${darkMode ? 'darkMode' : ''}`}><span className={`details-name ${darkMode ? 'darkMode' : ''}`}>Top Level Domain:</span> {tld}</h3>
                            <h3  className={`details-name ${darkMode ? 'darkMode' : ''}`}><span className={`details-name ${darkMode ? 'darkMode' : ''}`}>Area:</span> {area}</h3>
                            <h3  className={`details-name ${darkMode ? 'darkMode' : ''}`}><span className={`details-name ${darkMode ? 'darkMode' : ''}`}>Maps:</span> <a href={maps.googleMaps} target="_blank" rel="noreferrer" className={`map-link ${darkMode ? 'darkMode' : ''}`}>{maps.googleMaps}</a> </h3>
                        </div>

                   </div>
               )
           })}
        </div>

    </div>
  )
}

