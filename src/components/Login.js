import React , {useState} from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { auth } from "./firebase";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
//import SignInwithGoogle from "./signInWIthGoogle";

let Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await signInWithEmailAndPassword(auth, email, password);
          console.log("User logged in Successfully");
          toast.success("User logged in Successfully", {
            position: "top-center",
          });
        } catch (error) {
          console.log(error.message);
          toast.error(error.message, {
            position: "bottom-center",
          });
        }
      };
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
            <form onSubmit={handleSubmit}>
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
                    <input type="email" 
                    id="email" placeholder="Enter your email" required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" 
                    id="password" 
                    placeholder="Enter your password" required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="forgot-password">
                    <a href="/forgetpassword">Forgot Password?</a>
                </div>
                
                <button type="submit" class="login-btn">Login</button>
                <p className='or' >------or------</p>
                <div class="forgot-password">
                    <p className='signup-login' > Doesn't have an account ? <Link to="/signup">Sign up here</Link></p>
                    
                </div>
                

            </form>
        </div>
        </div>
        
        </React.Fragment>

    );

    
};

export default Login;
