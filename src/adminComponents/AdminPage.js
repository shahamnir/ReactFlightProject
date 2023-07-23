import React from "react";
import { Link, Outlet } from "react-router-dom";



const AdminPage = () => {

    return(
        <>
        <AdminNav />
        <Outlet />

        </>
    );
};


const AdminNav = () => {
    return(
        <>
        <div className="admin-nav-card">
            <div className="admin-nav">
        <ul>
            <button><li><Link to='/admin/add_admin'> Add Admin</Link></li></button>
            <button><li><Link to="/admin/customers"> Customers</Link></li> </button>
            <button><li><Link to="/admin/add_airline"> Add Airline</Link></li>  </button>
            <button><li><Link to="/admin/remove_airline"> Remove Airline </Link></li></button>   
        </ul>
            </div>
        </div>
        </>
    );

}



export default AdminPage;