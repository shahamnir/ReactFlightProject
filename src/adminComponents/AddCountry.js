import React, {useEffect, useState} from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";


const AddCountry = () => {
    const[name,setName] = useState("")



    const navigate = useNavigate();

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            // Make a POST request to add the country
            await axios.post("http://127.0.0.1:8000/airline_company/country/", { name });
            navigate("/admin");
        }
        catch (error) {
        console.error(error); 
        }
      };


      // Function to handle input change and update state
      const handleNameChange = (event) => {
        setName(event.target.value);
      };
    



    return (
        <>
        <h1>Add Country</h1>
        <div className="form-card">
        <form onSubmit={handleSubmit}>

        <div className="form-group">
            <label>Name:</label>
            <input type="text" value={name} onChange={handleNameChange} />
        </div>


        <button type="submit">Add Country</button>
        </form>
        </div>

        </>
    );
};

export default AddCountry;