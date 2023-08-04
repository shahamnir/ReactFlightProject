import React, {useState} from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";


const AddAdmin = () => {
    const[username,setUsername] = useState("")
    const[password,setPassword] = useState("")
    const[email,setEmail] = useState("")
    const[firstName,setFirstName] = useState("")
    const[lastName,setLastName] = useState("")

    const navigate = useNavigate();

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Make a POST request to add an administrator
        try {
          const response = await axios.post('http://127.0.0.1:8000/admin/add_administrator/', {
            username:username,
            password:password,
            email:email,
            first_name:firstName,
            last_name:lastName,
        })
        console.log(response);
        navigate("/login");// Redirect to login page after successful addition

        }
        
        catch (error) {
        console.error(error); // Handle registration error
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

      const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
      };
    
      const handleLastNameChange = (event) => {
        setLastName(event.target.value);
      };



    return (
        <>

        <div>
        <h1>Add Admin</h1>

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
            <label>First Name:</label>
            <input type="text" value={firstName} onChange={handleFirstNameChange} />
        </div>

        <div className="form-group">
            <label>Last Name:</label>
            <input type="text" value={lastName} onChange={handleLastNameChange} />
        </div>


        <button type="submit">Add Admin</button>
        </form>
        </div>
        </div>

        </>
    );
};

export default AddAdmin;