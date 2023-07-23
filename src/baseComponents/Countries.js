import React, {useState, useEffect} from "react";
import axios from 'axios';
import Country from "./Country";


const Countries = (props) => {
    const[countries,setCountries] = useState([]);


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



    return (
        <>
        
        {countries.map(country => <Country id={country.id}/>)}
        </>
        
    );
};

export default Countries;