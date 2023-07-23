import React, {useState, useEffect} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Airline = (props) => {
    const [airline, setAirline] = useState([]);
    const { id, showRemoveButton} = props;


    async function getAirline() {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/anonymous/airlines/${id}/`);
            setAirline(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const navigate = useNavigate()

    async function handleRemove(id) {
      try{
      axios({
        method:'delete',
        url:`http://127.0.0.1:8000/administrator/remove_airline/${id}`,

    })
    navigate("/admin")

    }
    catch (error) {
      console.log(error);
    };
    };



    useEffect(() => {
        console.log("useEffect get flight triggered");
        getAirline();
    }, []);


  return (
    <>
    <div className="instance-card">
      <div className="left-info">
          <div className="airline-name">{airline.name}</div>
          <div className="origin-country">{airline.country}</div>
      </div>
    </div>
    {showRemoveButton && <div><button onClick={() => handleRemove(airline.id)}>Remove</button></div>}
    </>
  );
    
};

export default Airline;