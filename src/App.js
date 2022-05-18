import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Appointment from './Pages/Appointment/Appointment';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyHistory from './Pages/Dashboard/MyHistory';
import MyReview from './Pages/Dashboard/MyReview';
import Users from './Pages/Dashboard/Users';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Register from './Pages/Register/Register';
import Footer from './Shared/Footer';
import Loading from './Shared/Loading';
import Nav from './Shared/Nav';
import RequireAuth from './Shared/RequireAuth';

function App() {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<Home />} />

                <Route
                    path="/appointment"
                    element={
                        <RequireAuth>
                            <Appointment />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/dashboard"
                    element={
                        <RequireAuth>
                            <Dashboard />
                        </RequireAuth>
                    }
                >
                    <Route index element={<MyAppointments />} />
                    <Route path="review" element={<MyReview />} />
                    <Route path="history" element={<MyHistory />} />
                    <Route
                        path="users"
                        element={
                            <RequireAdmin>
                                <Users />
                            </RequireAdmin>
                        }
                    />
                    <Route
                        path="addDoctor"
                        element={
                            <RequireAdmin>
                                <AddDoctor />
                            </RequireAdmin>
                        }
                    />
                    <Route
                        path="manageDoctors"
                        element={
                            <RequireAdmin>
                                <ManageDoctors />
                            </RequireAdmin>
                        }
                    />
                </Route>
                <Route path="/reviews" element={<Home />} />
                <Route path="/contact" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/loading" element={<Loading />} />

                <Route path="/*" element={<Home />} />
            </Routes>
            <Footer />
            <ToastContainer />
        </div>
    );
}

export default App;
