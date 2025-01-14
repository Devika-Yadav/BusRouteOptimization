import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

let SignUp = () => {
    return (
        <React.Fragment>
                <div class="side-color"></div>
                <div className='signup-container'>
    <div className="signup">
      <h1>Create Account</h1>
      <form>
          <div className="form-group">
          <div className="list-box-container">
              <label for="user-role" class="list-label">Select Role</label>
              <select id="user-role" class="custom-list-box">
                  <option value="admin">Admin</option>
                  <option value="driver">Driver</option>
                  <option value="passenger">Passenger</option>
              </select>
          </div>
      </div>
          <div className="form-group">
              <label for="username">Username</label>
              <input type="username" id="username" placeholder="Enter your username" required/>
          </div>
          <div className="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" required/>
          </div>
          <div className="form-group">
              <label for="password">New Password</label>
              <input type="password" id="password" placeholder="Enter New Password" required/>
          </div>
          <div className="form-group">
            <label for="password">Confirm Password</label>
            <input type="password" id="password" placeholder="Enter Confirm password" required/>
        </div>
          
          
          <button type="submit" className="signup-btn">SignUp</button>
          <p className='or'>------or------</p>
          <div class="forgot-password">
              <p > Already have an account ? <Link to="/">Login</Link></p>
              
          </div>
      </form>
  </div>
  </div>


        </React.Fragment>

    );
};
export default SignUp;