import React, {useEffect, useState} from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";


const AddAirline = () => {
    const[username,setUsername] = useState("")
    const[password,setPassword] = useState("")
    const[email,setEmail] = useState("")
    const[name,setName] = useState("")
    const[country,setCountry] = useState("")
    const[countries,setCountries] = useState([]);


    // Function to get countries data from the server
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

    const navigate = useNavigate();


    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          // Make a POST request to add an airline
          await axios.post("http://127.0.0.1:8000/admin/add_airline/", {
            username: username,
            password: password,
            email: email,
            name: name,
            country: country,
          }

          )
          navigate("/admin");// Redirect to the admin page after successful addition
          }
           
        catch (error) {
        console.error(error); 
        }
      };




      // Functions to handle input changes and update state
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    
      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };

      const handleNameChange = (event) => {
        setName(event.target.value);
      };
    



    return (
        <>
        <h1>Add Airline</h1>
        <div className="form-card">
        <form onSubmit={handleSubmit}>

        <div className="form-group">
        <label>Username:</label>
        <input type="text" value={username} onChange={handleUsernameChange} />
        </div>

        <div className="form-group">  
        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
        </div>

        <div className="form-group">
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
        </div>

        <div className="form-group">
            <label>Name:</label>
            <input type="text" value={name} onChange={handleNameChange} />
        </div>

        <div className="form-group">
            <label>Country:</label>
            <select 
            id="country" name="country"
            value={country} onChange={(e)=> setCountry(e.target.value)}
            >
                <option value=""> Country </option>
                {countries.map(country => 
                <option value={country.name}> {country.name}</option>
                )}
            </select>
        </div>


        <button type="submit">Add Airline</button>
        </form>
        </div>

        </>
    );
};

export default AddAirline;