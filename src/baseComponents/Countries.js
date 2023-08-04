import React, {useState, useEffect} from "react";
import axios from 'axios';
import Country from "./Country";


const Countries = (props) => {
    const[countries,setCountries] = useState([]);

    // Function to fetch all countries from the server
    async function getCountries(){
        try {
            const response = await axios.get('http://127.0.0.1:8000/anonymous/countries/')
            setCountries(response.data)
        }
        catch (error) {
            console.log(error)
        };
    };

    // useEffect hook to fetch countries data when the component mounts
    useEffect(() => {
        getCountries();
    },[]);



    return (
        <>
        {/* Display the list of countries */}
        {countries.map(country => <Country id={country.id}/>)}
        </>
        
    );
};

export default Countries;