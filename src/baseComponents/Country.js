import React, {useState, useEffect} from "react";
import axios from 'axios';


const Country = (props) => {
    const [country, setCountry] = useState([]);
    const { id } = props;


    async function getCountry() {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/anonymous/countries/${id}/`);
            setCountry(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        console.log("useEffect get flight triggered");
        getCountry();
    }, []);


  return (
    <div className="instance-card">
      <div className="left-info">
          <div className="airline-name">{country.name}</div>

      </div>
    </div>
  );
    
};

export default Country;