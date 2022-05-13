import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Footer from './Shared/Footer';
import Loading from './Shared/Loading';
import Nav from './Shared/Nav';

function App() {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<Home />} />
                <Route path="/appointment" element={<Appointment />} />
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
