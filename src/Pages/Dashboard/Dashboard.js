/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Dashboard() {
    return (
        <div className="drawer-mobile drawer">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h2 className="text-2xl font-bold text-purple-500">Welcome to your Dashboard</h2>
                <Outlet />
                {/* <label htmlFor="dashboard-sidebar" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label> */}
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay" />
                <ul className="menu w-80 overflow-y-auto bg-base-100 p-4 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/review">My Review</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;
