import React, {useState, useEffect} from "react";
import axios from 'axios';
import Airline from "../baseComponents/Airline"



const RemoveAirline = (props) => {
    const[airlines,setAirlines] = useState([]);
    const[countries,setCountries] = useState([]);
    const[airlineCountry,setAirlineCountry] = useState("")
    const[errMsg,setErrMsg] = useState("")

    // Function to fetch airlines data from the server
    async function getAirlines() {
        try {
            const response = await axios.get('http://127.0.0.1:8000/anonymous/airlines/');
            setAirlines(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        };
    };

    // Call the getAirlines function once, when the component mounts
    useEffect(() => {
        getAirlines();
    },[]);

    // Function to fetch countries data from the server
    async function getCountries(){
        try {
            const response = await axios.get('http://127.0.0.1:8000/anonymous/countries/')
            setCountries(response.data)
        }
        catch (error) {
            console.log(error)
        };
    };

    // Call the getCountries function once, when the component mounts
    useEffect(() => {
        getCountries();
    },[]);

    // Function to handle form submission
    async function handleSubmit(event){
        event.preventDefault()

        try{
            // Send a GET request to the server to fetch airlines data based on the selected country
            const response = await axios.get('http://127.0.0.1:8000/anonymous/airline_by_params/',
            { params:{"country": airlineCountry}}) // Pass the selected country as a query parameter

            setAirlines(response.data)

            console.log(response.data)

            // If no matching airlines found, set an error message to be displayed
            if (response.data.length === 0){
                setErrMsg("No Matching Airlines Found")
            }
            else {
                // If matching airlines found, clear the error message
                setErrMsg("")
            }
        }
        catch (error){
            console.log(error)
        }
    }


    return (
        <>
        <h1> Remove Airline </h1>

        <form onSubmit={handleSubmit}>

        <label>Airline Country :</label>
        <select
        id="airline-country" name="airline_country" 
        value={airlineCountry} onChange={(e)=> setAirlineCountry(e.target.value)}
        >
            <option value=""> Airline Country </option>
            {countries.map(country => 
            <option value={country.name}> {country.name}</option>
            )}
            </select>

            <input type="submit" value="Search Airline"/>

        </form>
        
        {/* Display the list of airlines with a remove button */}
        {airlines.map(airline =><Airline id={airline.id} showRemoveButton={true} />)}

        {/* Display error message if no matching airlines found */}
        {errMsg &&<div className="instance-card">
        <div className="isntance-err-msg">{errMsg}</div>
        </div>}
        
        </>
        
    );
};

export default RemoveAirline;