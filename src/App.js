import { Route, Routes } from 'react-router-dom';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer';
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
                <Route path="/login" element={<Home />} />
                <Route path="/register" element={<Home />} />
                <Route path="/*" element={<Home />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
