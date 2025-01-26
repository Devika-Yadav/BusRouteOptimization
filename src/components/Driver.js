import React, { useState } from "react";
import "./Driver.css";
import Login from "./Login";
import { useNavigate } from 'react-router-dom'; // Move your styles into a CSS file

const Driver = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [page,setPage] = useState("RouteDetails");

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };
  const loadPage = (page) => {
    setPage(page);
  };
  const renderContent = () => {
    switch (page) {
      
      case "RouteDetails":
        return <RouteDetails />;
      case "Map":
        return <Map/>;
      case "AlertsandFeedback":
        return <AlertsandFeedback />;
      case "Logout":
        return <Login />;
      default:
        return (
          <div>
            <h2>404</h2>
            <p>Page not found.</p>
          </div>
        );
    }
  };
  return (
    <div className="app">
      <Navbar loadPage={loadPage} />
      <Sidebar active={sidebarActive} toggleSidebar={toggleSidebar} loadPage={loadPage} />
      <div className={`content ${sidebarActive ? "shifted" : ""}`}>
        {renderContent()}
      </div>
    </div>
  );
}
const Navbar = ({ loadPage }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // Navigate to the login page
  };
  return (
    <nav className="nav-bar">
      <div className="welcome">Welcome to Dynamic Bus Route Optimization</div>
      <div>
      <button onClick={() => loadPage("RouteDetails")} className="link-button">Route Details</button>
<button onClick={() => loadPage("Map")} className="link-button">Map</button>
<button onClick={() => loadPage("AlertsandFeedback")} className="link-button">Alerts and Feedback</button>
<button onClick={handleLogout} className="link-button">Logout</button>

      </div>
    </nav>
  );
};
const Sidebar = ({ active, toggleSidebar, loadPage }) => {
  const navigate = useNavigate();
   // Initialize the useNavigate hook
   const handleLogout = () => {
    navigate("/"); // Navigate to the login page
  };

  return (
    <>
      <div className={`sidebar ${active ? "active" : ""}`}>
        <h2>Driver Panel</h2>
        <img src="/passenger profile.png" alt="profile" />

        <nav className="nav-aside">
          <ul>
            <li>
            <button onClick={() => loadPage("RouteDetails")} className="link-button">Route Details</button>

            </li>
            <li>
            <button onClick={() => loadPage("Map")} className="link-button">Map</button>

            </li>
            <li>
            <button onClick={() => loadPage("AlertsandFeedback")} className="link-button">Alerts and Feedback</button>

            </li>
            <li>
            <button onClick={handleLogout} className="link-button">Logout</button>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={`sidebar-toggle ${active ? "active" : ""}`}
        onClick={toggleSidebar}
      >
        &#9776;
      </div>
    </>
  );
};
const RouteDetails = () => (
  <>
  <div class="container">
            <div class="row">
              <div class="card-1">
                <h3>Bus Number</h3>
                <p>104</p>
              </div>
              <div class="card-1">
                <h3>Time Stamp</h3>
                <p>9:00 AM - 11:00 AM</p>
              </div>
            </div>
            <div class="row-2">
              <div class="card-3">
                <h3>Stop Names</h3>
                <ul>
                  <li>Agar Nagar</li>
                  <li>Kirari Lal Mandir</li>
                  <li>Ram pura</li>
                  <li>Bara Hindhu Rao</li>
                  <li>Ashoka Park</li>
                  <li>Old Delhi Railway Station</li>
                  <li>RedFort</li>
                </ul>
              </div>
            </div>
          </div>
  </>
);
const Map = () => (
  <>
  <div className="Container">
    <h3>Route Map</h3>

  </div>
  </>

);
  const AlertsandFeedback = () => (
    <>
     <div class="container">
            <div class="card-4">
              <h3>Alerts</h3>
            </div>
            <div class="card-4">
              <h3>Feedback</h3>
              <section id="contact-us" class="contact-us">
                <form id="contact-form">
                  <label for="name">Name:</label>
                  <input type="text" id="name" name="name" placeholder="Your Name" required />
                  <label for="email">Email:</label>
                  <input type="email" id="email" name="email" placeholder="Your Email" required />
                  <label for="message">Message:</label>
                  <textarea id="message" name="message" placeholder="Your Message" rows="4" required></textarea>
                  <button type="submit">Submit</button>
                </form>
              </section>
            </div>
          </div>
    </>
  );




export default Driver;
