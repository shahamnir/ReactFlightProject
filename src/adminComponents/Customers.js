import React, {useState, useEffect} from "react";
import axios from 'axios';


const Customers = (props) => {
    const[customers,setCustomers] = useState([]);


    async function getCustomers(){
        try {
            const response = await axios.get('http://127.0.0.1:8000/administrator/all_customers/')
            setCustomers(response.data)
        }
        catch (error) {
            console.log(error)
        };
    };

    useEffect(() => {
        getCustomers();
    },[]);



    return (
        <>
        <h1> Customers</h1>
        {customers.map(customer =>
                 <div className="instance-card">
                 <div className="left-info">
                     <div className="airline-name">{customer.first_name} {customer.last_name}</div>
                     <div className="airline-name">{customer.email}</div>
                 </div>
               </div>
             )}
        </>
        
    );
};

export default Customers;


