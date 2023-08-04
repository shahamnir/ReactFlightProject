import React from "react";
import { Link, Outlet } from "react-router-dom";



const AdminPage = () => {

    return(
        <>
        {/* Render the Admin Navigation */}
        <AdminNav />

        {/* Render the child routes within the Outlet */}
        <Outlet />

        </>
    );
};


const AdminNav = () => {
    return(
        <>
        <div className="admin-nav-card">
            <div className="admin-nav">

        {/* Links to different admin pages */}        
        <ul>
            <li><Link to='/admin/add_admin'> Add Admin</Link></li>
            <li><Link to="/admin/customers"> Customers</Link></li>
            <li><Link to="/admin/add_airline"> Add Airline</Link></li>
            <li><Link to="/admin/remove_airline"> Remove Airline </Link></li>
            <li><Link to="/admin/add_country"> Add Country </Link></li>
        </ul>
            </div>
        </div>
        </>
    );

}



export default AdminPage;