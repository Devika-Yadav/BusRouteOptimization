import { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'; // Correct if the file is Login.js
import Signup from './components/Signup';

function App() {
  
  return (
    <Fragment>
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/components/signup" element={<Signup />} />
      </Routes>
    </Router>


    
    </Fragment>
  );
};
  


export default App;
