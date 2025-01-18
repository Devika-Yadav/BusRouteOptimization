import { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'; // Correct if the file is Login.js
import Signup from './components/Signup';
import ForgetPassword from './components/ForgetPassword';

import { ToastContainer } from "react-toastify";
function App() {
  
  return (
    <Fragment>
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgetpassword" element = {<ForgetPassword/>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer />
    </Router>


    
    </Fragment>
  );
};
  


export default App;
