import React, {useState, useEffect} from "react";
import Flight from "./Flight";
import axios from 'axios';



const Flights = (props) => {
    const[flights,setFlights] = useState([]);
    const[countries,setCountries] = useState([]);
    const[originCountry,setOriginCountry] = useState("")
    const[destinationCountry,setDestinationCountry] = useState("")
    const[date,setDate] = useState("")
    const[errMsg,setErrMsg] = useState()


    async function getFlights() {
        try {
            const response = await axios.get('http://127.0.0.1:8000/anonymous/flights/');
            setFlights(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        };
    };


    useEffect(() => {
        getFlights();
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

    // Function to handle form submission and fetch flights based on form inputs
    async function handleSubmit(event){
        event.preventDefault()

        try{
            const response = await axios.get('http://127.0.0.1:8000/anonymous/flights_by_params/',
            { params:{"origin_country": originCountry,
            "destination_country": destinationCountry,
            "departure_date": date}})
            setFlights(response.data)
            console.log(response.data)
            if (response.data.length === 0){
                setErrMsg("No Matching Flights Found")
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
            {/* Origin Country Dropdown */}
            <select
            id="o-country" name="origin_country" 
            value={originCountry} onChange={(e)=> setOriginCountry(e.target.value)}
            className="country-select"
            >
                <option value=""> Origin Country </option>
                {countries.map(country => 
                <option value={country.name}> {country.name}</option>
                )}
        
            </select>

            {/* Destination Country Dropdown */}        
            <select 
            id="d-country" name="destination_country"
            value={destinationCountry} onChange={(e)=> setDestinationCountry(e.target.value)}
            className="country-select"
            >

                <option value=""> Destination Country </option>
                {countries.map(country => 
                <option value={country.name}> {country.name}</option>
                )}
            </select>
            
            {/* Departure Date Input */}
            <input 
            className="country-select"
            type="date" name="date"
            value={date}
            onChange={(e)=> setDate(e.target.value)}
            min="2023-01-01"
            max="2023-12-31"
            />

            <input 
            type="submit" 
            value="Search Flight"
            className="search-button"
            />
        </form>
        
        {/* Display Flights */}
        {flights.map(flight => <Flight id={flight.id}/>)}

        {/* Display Error Message */}
        {errMsg &&<div className="instance-card">
            <div className="instance-err-msg">{errMsg}</div>
        </div>}
        </>
        
    );
};

export default Flights;