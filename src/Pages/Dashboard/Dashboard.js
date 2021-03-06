/* eslint-disable prettier/prettier */
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../Shared/Loading';

function Dashboard() {
    const [user, loading] = useAuthState(auth);
    const [admin] = useAdmin(user);
    if (loading) {
        return <Loading />;
    }
    return (
        <div className="drawer-mobile drawer">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h2 className="my-4 text-center text-3xl font-bold text-accent">
                    Welcome to your Dashboard
                </h2>
                <Outlet />
                {/* <label htmlFor="dashboard-sidebar" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label> */}
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay" />
                <ul className="menu w-48 overflow-y-auto bg-base-100 p-4 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/review">My Review</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/history">My History</Link>
                    </li>

                    {admin && (
                        <>
                            <li>
                                <Link to="/dashboard/users">All Users</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/addDoctor">Add Doctor</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/manageDoctors">Manage Doctor</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;
