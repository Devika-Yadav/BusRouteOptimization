import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
let Login = () => {
    return (
        <React.Fragment>
            <div className='login-container'>
             <header>
            <h1 className="heading">DYNAMIC ROUTE OPTIMIZATION</h1>
            <div className="description">
                This platform, tailored for the Delhi Transport Corporation (DTC), streamlines bus fleet management for Admins, Drivers, and Passengers. It offers real-time tracking, dynamic route optimization, and traffic updates to ensure timely and efficient transit services. Powered by AI and IoT, it enhances operational efficiency and commuter experience.
            </div>
            
        </header>
        
        <div className="login">
            <h1>Login</h1>
            <form>
                <div className="form-group">
                <div className="list-box-container">
                    <label for="user-role" className="list-label">Select Role</label>
                    <select id="user-role" className="custom-list-box">
                        <option value="admin">Admin</option>
                        <option value="driver">Driver</option>
                        <option value="passenger">Passenger</option>
                    </select>
                </div>
            </div>
    
                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" required/>
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" required/>
                </div>
                <div className="forgot-password">
                    <a href="/components/forgetpassword">Forgot Password?</a>
                </div>
                
                <button type="submit" class="login-btn">Login</button>
                <p className='or' >------or------</p>
                <div class="forgot-password">
                    <p className='signup-login' > Doesn't have an account ? <Link to="/components/signup">Sign up here</Link></p>
                    
                </div>
                



            </form>
        </div>
        </div>

        </React.Fragment>

    );

};

export default Login;
