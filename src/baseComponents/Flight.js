import React, {useState, useEffect} from "react";
import axios from 'axios';
import ArrowImg from '../imgs/arrow.jpg'



const Flight = (props) => {
    const [flight, setFlight] = useState([]);
    const { id } = props;

  // Function to fetch flight data using the provided id
    async function getFlight() {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/anonymous/flights/${id}/`);
            setFlight(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    // useEffect getFlight function, when the component mounts
    useEffect(() => {
        getFlight();
    }, []);

      // Format date using JavaScript Date.toLocaleDateString()
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
  };

  // Format time using JavaScript Date.toLocaleTimeString()
  const formatTime = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    });
  };

  return (
    <div className="instance-card">
      <div className="left-info">
        <div className="departure-info">
          <div className="airline-name">{flight.airline}</div>
          <div className="time-label">Departure</div>
          <div className="time-value">{formatTime(flight.departure_time)}</div>
          <div className="date-value">{formatDate(flight.departure_time)}</div>
          <div className="origin-country">{flight.origin_country}</div>
        </div>
      </div>

      <div className="center-info">
        <div className="airline-name"></div>
        <div className="arrow-img"><img src={ArrowImg} width="280" height="15" alt="arrow"/></div>
      </div>

      <div className="right-info">
      <div className="arrival-info">
        <div className="airline-name">{flight.airline}</div>
        <div className="time-label">Arrival</div>
        <div className="time-value">{formatTime(flight.landing_time)}</div>
        <div className="date-value">{formatDate(flight.landing_time)}</div>
        <div className="destination-value">{flight.destination_country}</div>
        </div>
      </div>
    </div>
  );
    
};

export default Flight;