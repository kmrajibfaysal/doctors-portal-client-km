import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Nav from './Shared/Nav';

function App() {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<Home />} />
                <Route path="/appointment" element={<Home />} />
                <Route path="/reviews" element={<Home />} />
                <Route path="/contact" element={<Home />} />
                <Route path="/login" element={<Home />} />
                <Route path="/register" element={<Home />} />
                <Route path="/*" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
