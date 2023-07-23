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


    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          axios({
            method:'post',
            url:'http://127.0.0.1:8000/admin/add_airline/',
            data: {
            username:username,
            password:password,
            email:email,
            name:name,
            country:country,
            },
            headers:{
            xsrfCookieName: "csrftoken",
            xsrfHeaderName: "X-CSRFToken",
            }
          })
          navigate("/admin");
        }
           
        catch (error) {
        console.error(error); // Handle registration error
        }
      };





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