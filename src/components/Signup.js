import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

let SignUp = () => {
    const [email, setEmail] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [username, setUsername] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
          await createUserWithEmailAndPassword(auth, email, newpassword);
          const user = auth.currentUser;
          console.log(user);
           if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          Username: username,
          NewPassword: newpassword,
          Confirmpassword: confirmpassword,
         
        });
      }
          console.log("User Registered Successfully!!");
          toast.success("User Registered Successfully!!", {
            position: "top-center",
          });
        } catch (error) {
          console.log(error.message);
          toast.error("Already registered Email", {
            position: "bottom-center",
          });
        }
      };
    
    return (
        <React.Fragment>
                <div class="side-color"></div>
                <div className='signup-container'>
    <div className="signup">
      <h1>Create Account</h1>
      <form onSubmit={handleRegister}>
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
              <input type="username" 
              id="username" 
              placeholder="Enter your username" required
              onChange={(e) => setUsername(e.target.value)}
              />
          </div>
          <div className="form-group">
              <label for="email">Email</label>
              <input type="email" 
              id="email" 
              placeholder="Enter your email" 
              onChange={(e) => setEmail(e.target.value)}
              required/>
          </div>
          <div className="form-group">
              <label for="password">New Password</label>
              <input type="password"
               id="password"
                placeholder="Enter New Password" 
                onChange={(e) => setNewPassword(e.target.value)}
                required/>
          </div>
          <div className="form-group">
            <label for="password">Confirm Password</label>
            <input type="password" 
            id="password" 
            placeholder="Enter Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required/>
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