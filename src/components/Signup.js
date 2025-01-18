import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [username, setUsername] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();

        if (newpassword !== confirmpassword) {
            toast.error("Passwords do not match!", {
                position: "bottom-center",
            });
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, newpassword);
            const user = auth.currentUser;
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    Username: username,
                });
            }
            toast.success("User Registered Successfully!!", {
                position: "top-center",
            });
        } catch (error) {
            toast.error("Already registered Email", {
                position: "bottom-center",
            });
        }
    };

    return (
        <React.Fragment>
            <div className="side-color"></div>
            <div className='signup-container'>
                <div className="signup">
                    <h1>Create Account</h1>
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <div className="list-box-container">
                                <label htmlFor="user-role" className="list-label">Select Role</label>
                                <select id="user-role" className="custom-list-box">
                                    <option value="admin">Admin</option>
                                    <option value="driver">Driver</option>
                                    <option value="passenger">Passenger</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text"
                                id="username"
                                placeholder="Enter your username" required
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email"
                                id="email"
                                placeholder="Enter your email"
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                        </div>
                        <div className="form-group">
    <label htmlFor="password">New Password</label>
    <div className="password-input-container">
        <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter New Password"
            onChange={(e) => setNewPassword(e.target.value)}
            required
        />
        <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            className="password-icon-inside"
            onClick={() => setShowPassword(!showPassword)}
        />
    </div>
</div>
<div className="form-group">
    <label htmlFor="confirm-password">Confirm Password</label>
    <div className="password-input-container">
        <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirm-password"
            placeholder="Enter Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
        />
        <FontAwesomeIcon
            icon={showConfirmPassword ? faEyeSlash : faEye}
            className="password-icon-inside"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        />
    </div>
</div>
                        <button type="submit" className="signup-btn">SignUp</button>
                        <p className='or'>------or------</p>
                        <div className="forgot-password">
                            <p> Already have an account? <Link to="/">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SignUp;
