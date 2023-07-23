import React, {useEffect, useState} from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";


const SignUp = () => {
    const[username,setUsername] = useState("")
    const[password,setPassword] = useState("")
    const[email,setEmail] = useState("")
    const[firstName,setFirstName] = useState("")
    const[lastName,setLastName] = useState("")
    const[adress,setAdress] = useState("")
    const[phone,setPhone] = useState("")
    const[creditCard,setCreditCard] = useState("")

    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await axios.post('http://127.0.0.1:8000/anonymous/add_customer/', {
            username:username,
            password:password,
            email:email,
            first_name:firstName,
            last_name:lastName,
            address:adress,
            phone_no:phone,
            credit_card_no:creditCard,
        })
        
        navigate("/login");

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

      const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
      };
    
      const handleLastNameChange = (event) => {
        setLastName(event.target.value);
      };
    
      const handleAdressChange = (event) => {
        setAdress(event.target.value);
      };

      const handlePhoneChange = (event) => {
        setPhone(event.target.value)
      };

      const handleCreditCardChange = (event) => {
        setCreditCard(event.target.value)
      };



    return (
        <>
        <h1>Sign Up</h1>
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

        <div className="form-group">
            <label>Adress:</label>
            <input type="text" value={adress} onChange={handleAdressChange} />
        </div>

        <div className="form-group">
            <label>Phone Number:</label>
            <input type="text" value={phone} onChange={handlePhoneChange} />
        </div>

        <div className="form-group">
            <label>Credit Card:</label>
            <input type="text" value={creditCard} onChange={handleCreditCardChange} />
        </div>

        <button type="submit">Register</button>
        </form>
        </div>
        </>
    );
};

export default SignUp;