import React, {useState, useEffect} from 'react'

export default function Filter({setCountries}){
    
    const [regions, setRegions] = useState([])


    const region = [
        {
            name: "Africa"
        },
        {
            name: "Asia"
        },
        {
            name: "Oceania"
        },
        {
            name: "Americas"
        },
        {
            name: "Europe"
        },
    ]


    const fetchCountryByRegion = async(region) => {
        const response = await fetch(`https://restcountries.com/v3.1/region/${region}`)
        const data = await response.json();
        console.log(data)
        setRegions(data)
    }

    useEffect(() => {
        fetchCountryByRegion()
    }, [])

    return (
        <></>
    )
}