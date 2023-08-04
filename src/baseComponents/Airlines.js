import React, {useState, useEffect} from "react";
import Airline from "./Airline";
import axios from 'axios';



const Airlines = (props) => {
    const[airlines,setAirlines] = useState([]);
    const[countries,setCountries] = useState([]);
    const[airlineCountry,setAirlineCountry] = useState("")
    const[errMsg,setErrMsg] = useState("")


    async function getAirlines() {
        try {
            const response = await axios.get('http://127.0.0.1:8000/anonymous/airlines/');
            setAirlines(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        };
    };


    useEffect(() => {
        getAirlines();
    },[]);

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

    // Function to handle the form submission and search for airlines by country
    async function handleSubmit(event){
        event.preventDefault()

        try{
            const response = await axios.get('http://127.0.0.1:8000/anonymous/airline_by_params/',
            { params:{"country": airlineCountry}})
            setAirlines(response.data)
            console.log(response.data)
            if (response.data.length === 0){
                setErrMsg("No Matching Airlines Found")
            }
            else {
                setErrMsg("")
            }
        }
        catch (error){
            console.log(error)
        }
    }



    return (
        <>
        <form onSubmit={handleSubmit}>

            
            {/* Dropdown menu to select airline country */}
            <select
            id="airline-country" name="airline_country" 
            value={airlineCountry} onChange={(e)=> setAirlineCountry(e.target.value)}
            className="country-select"
            >
                <option value=""> Airline Country </option>
                {countries.map(country => 
                <option value={country.name}> {country.name}</option>
                )}
                </select>

                <input type="submit" value="Search Airline" className="search-button"/>

            </form>

        {/* Display the list of airlines */}
        {airlines.map(airline => <Airline id={airline.id}/>)}

        {/* Display an error message if no matching airlines found */}
        {errMsg &&<div className="instance-card">
            <div className="isntance-err-msg">{errMsg}</div>
        </div>}
        </>
        
    );
};

export default Airlines;