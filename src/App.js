
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Flights from './baseComponents/Flights';
import NavBar from './baseComponents/NavBar';
import Flight from './baseComponents/Flight';
import Airlines from './baseComponents/Airlines';
import Countries from './baseComponents/Countries';
import LoginForm from './baseComponents/Login';
import RegisterForm from './baseComponents/Register';
import AddAdmin from './adminComponents/AddAdmin';
import Customers from './adminComponents/Customers';
import SignUp from './baseComponents/SignUp';
import AdminPage from './adminComponents/AdminPage';
import AddAirline from './adminComponents/AddAirline';
import RemoveAirline from './adminComponents/RemoveAirline';
import LogoImg from './imgs/logo2.jpg';
import AddCountry from './adminComponents/AddCountry';


function App() {
  return (
    <div className="App">
        {/* Header section with logo */}
        <div className='header-flights'>
        
        <div><img src={LogoImg} width="200" height="100" alt="logo"/></div>
    
        </div>

        {/* Navigation bar component */}
        <NavBar />

        {/* Routing configuration for different pages */}
        <Routes>
          <Route path="/flights" element={<Flights />}/>
          <Route path="/flight" element = {<Flight />}/>
          <Route path="/airlines" element={<Airlines />}/>
          <Route path="/countries" element={<Countries />}/>
          <Route path="/login" element={<LoginForm />}/>
          <Route path="/register" element={<RegisterForm />}/>
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/admin/*" element={<AdminPage />}/>
        </Routes>
        
        <Routes>
            <Route path="/admin/customers" element={<Customers />} />
            <Route path="/admin/add_admin" element={<AddAdmin />} />
            <Route path="/admin/add_airline" element={<AddAirline />} />
            <Route path="/admin/remove_airline" element={<RemoveAirline />} />
            <Route path="/admin/add_country" element={<AddCountry />} />
        </Routes>


        
      
        
      
    </div>
  );
}

export default App;
