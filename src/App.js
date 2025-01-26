import { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import Passenger from './components/Passenger'; // Import Passenger component
import { ToastContainer } from "react-toastify";
import Admin from './components/Admin';
import Driver from './components/Driver';

function App() {
    return (
        <Fragment>
            <Router>
                <Routes>
                    <Route exact={true} path="/" element={<Login />} />
                    <Route path="/forgetpassword" element={<ForgotPassword />} />
                    <Route exact={true} path="/signup" element={<Signup />} />
                    <Route path="/passenger" element={<Passenger />} /> {/* Passenger route */}
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/driver" element={<Driver />} />


                </Routes>
                <ToastContainer />
            </Router>
        </Fragment>
    );
}

export default App;
