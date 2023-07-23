import React,{ useEffect, useState } from "react";
import axios from 'axios';


const SearchFlight = () => {
    const[countries,setCountries] = useState([]);
    const[originCountry,setOriginCountry] = useState()
    const[destinationCountry,setDestinationCountry] = useState()
    const[date,setDate] = useState()

    
    async function getCountries(){
        try {
            const response = await axios.get('http://127.0.0.1:8000/anonymous/countries/')
            setCountries(response.data)
        }
        catch (error) {
            console.log(error)
        };
    };

    useEffect(() => {
        getCountries();
    },[]);

    async function handleSubmit(event) {
        setOriginCountry(event.target.o_country.value)
        setDestinationCountry(event.target.d_country.value)
        setDate(event.target.date.value)

        try {
            const response = await axios.get('http://127.0.0.1:8000/anonymous/flights_by_params/',
             { params:{"origin_country_id": 1,
             "destination_country_id": 2,
             "departure_date": "2023-07-28"}})
             
             
        }
        catch (error) {
            console.log(error)
        }

    }


    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>Origin Country :</label>
            <select id="o-country" name="o-country">
                <option value=""> Origin Country </option>
                {countries.map(country => <option name="o_country"value={country.name}> {country.name}</option>)}
            </select>

            <label>Origin Country :</label>
            <select id="d-country" name="d-country">
                <option value=""> Destination Country </option>
                {countries.map(country => <option name="d_country" value={country.name}> {country.name}</option>)}
            </select>

            <label>Date :</label>
            <input type="date" name="date"
                min="2023-01-01" max="2023-12-31"/>

            <input type="submit" value="Search Flight"/>
        </form>
        </>
    );

};

export default SearchFlight;