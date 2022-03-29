import React, { useState, useEffect, useRef } from 'react'
import { Link, useParams} from 'react-router-dom'
import Filter from './Filter'

export default function Countries({ darkMode }) {

    const[countries, setCountries] = useState([])
    const[filter, setFilter] = useState([])
    const[searchInput, setSearchInput] = useState("")
    const countriesInputRef = useRef();
    const regionRef = useRef();

    const noCountries = countries.status || countries.message;

   
    // console.log("countries" , darkMode)

    
    // const fetchCountries = async() => {
    //     const response = await fetch(`https://restcountries.com/v3.1/all`)
    //     const data = await response.json();
    //     setCountries(data)
       
    // }
    const fetchCountries = useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => setCountries(data));
       
    }, [])

   


   

    //search countries

    const searchCountries = () => {
      
        
        const searchValue = countriesInputRef.current.value;
        console.log(searchValue.trim())
        if(searchValue.trim()){
            const fetchSearch = async() => {
                const response = await fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
                // console.log(response)
                const data = await response.json();
                // console.log(data)

                if(data.status === 404){
                    setCountries([]);
                    return;
                }

                setCountries(data)
            };

            try{
                fetchSearch()

            }catch(error){
                console.log(error)
            } 
        }
        else{
            fetchCountries(countries)
        }


    }

    // filter region

    const selectRegion = () => {
        const selectValue = regionRef.current.value;

        if(selectValue.trim()){
            console.log(selectValue)
            const fetchSelect = async() => {
                if(selectValue !== 'All'){
                    
                    const response = await fetch(`https://restcountries.com/v3.1/region/${selectValue}`);
                    // console.log(response)
                    const data = await response.json();
                    // console.log(data)
                    setCountries(data);
                }
                if(selectValue === 'All'){
                    const response = await fetch(`https://restcountries.com/v3.1/all`)
                    const data = await response.json();
                    setCountries(data);

                }

            };

            try{
                fetchSelect()
            }catch(error){
                console.log(error)
            }
        }
    }

    return (
        <>
            <div className="search-flex">
                <div className='search-section'>

                <input type='text' className={`search-input ${darkMode ? 'darkMode' : ''}`} placeholder='Search for a country...' ref={countriesInputRef} onChange={searchCountries}/>
                </div>
                <div className="filter-section">

                
                    {/* <input type="search" 
                    name="search"
                    id="search" 
                    className='search-input' 
                    placeholder='Search for a country...'
                    value={searchInput}
                    onChange={(e) => searchCountries(e.target.value)}
                    autoComplete= 'off'
                    /> */}

                    
                

            
                    <select name='select'
                    id='select'
                    className={`select-region ${darkMode ? 'darkMode' : ''}`}
                    ref = {regionRef}
                    onChange={selectRegion}
                    >
                        <option value='Filter by region' disabled>Filter by region</option>
                        <option value="All">All</option>
                        <option>Africa</option>
                        <option>America</option>
                        <option>Asia</option>
                        <option>Europe</option>
                        <option>Oceania</option>
                    </select>
                
                </div>
            </div>
           
          <div className={`grid ${darkMode ? 'darkMode' : ''}`}>
                {!noCountries ? (countries.map((count) => {
                const {cca2, name , capital, region, population, flags} = count
                return(
                    <div key={cca2} className={`countries ${darkMode ? 'darkMode' : ''}`}>
                        <Link to= {`/countries-api/countries/${name.common}`} key={name.common}>
                        <img src={flags.svg} alt={name.common} className="flags"></img>
                            </Link>

                        <div className="countries-info">
                            <h1 className={`country-name ${darkMode ? 'darkMode' : ''}`}>{name.common}</h1>
                            <h3 className={`details-name ${darkMode ? 'darkMode' : ''}`}><span className={`details-name ${darkMode ? 'darkMode' : ''}`}>Population:</span> {population}</h3>
                            <h3 className={`details-name ${darkMode ? 'darkMode' : ''}`}><span className={`details-name ${darkMode ? 'darkMode' : ''}`}>Region:</span> {region}</h3>
                            <h3 className={`details-name ${darkMode ? 'darkMode' : ''}`}><span className={`details-name ${darkMode ? 'darkMode' : ''}`}>Capital:</span> {capital}</h3>
                        </div>

                    </div>
                    )
                    })) : (
                        <p className={`not-found ${darkMode ? 'darkMode' : ''}`}>No countries found...</p>
                    )
                }
            </div>
            
            
    </>
  )
}

