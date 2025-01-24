import React, { useState } from "react";
import "./Passenger.css"; // Import corresponding CSS styles
import Login from "./Login";
import { useNavigate } from 'react-router-dom';

function Passenger() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [page, setPage] = useState("track-bus");

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const loadPage = (page) => {
    setPage(page);
  };

  const renderContent = () => {
    switch (page) {
      case "home":
        return (
          <div>
            <h2>Home</h2>
            <p>Welcome to the Home page.</p>
          </div>
        );
      case "track-bus":
        return <TrackBus />;
      case "about":
        return <About/>;
      case "contact-us":
        return <ContactUs />;
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
      <button onClick={() => loadPage("track-bus")} className="link-button">Routes</button>
<button onClick={() => loadPage("about")} className="link-button">About</button>
<button onClick={() => loadPage("contact-us")} className="link-button">Contact Us</button>
<button onClick={handleLogout} className="link-button">Logout</button>

      </div>
    </nav>
  );
};

const Sidebar = ({ active, toggleSidebar, loadPage }) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLogout = () => {
    navigate("/"); // Navigate to the login page
  };

  return (
    <>
      <div className={`sidebar ${active ? "active" : ""}`}>
        <h2>Passenger Panel</h2>
        <img src="/passenger profile.png" alt="profile" />

        <nav className="nav-aside">
          <ul>
            <li>
              <a href="#track-bus" onClick={() => loadPage("track-bus")}>
                Routes
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => loadPage("about")}>
                About
              </a>
            </li>
            <li>
              <a href="#contact-us" onClick={() => loadPage("contact-us")}>
                Contact Us
              </a>
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
const About = () => (
  <div className="about-container">
    <div className="about-card">
      <h2>About Us</h2>
      <p>Welcome to the Dynamic Bus Route Optimization project!</p>

      <section className="about-section">
        <h3>Project Overview</h3>
        <p>
          Our project aims to optimize bus routes and provide real-time tracking for an efficient bus fleet management system. This platform offers several key features:
        </p>
        <ul>
          <li><strong>Dynamic Route Optimization:</strong> Calculate and optimize bus routes based on real-time traffic data.</li>
          <li><strong>Real-time Bus Tracking:</strong> Track buses in real-time and stay updated on their locations.</li>
          <li><strong>Traffic and Road Condition Detection:</strong> Monitor road conditions and optimize routes to avoid delays.</li>
          <li><strong>IoT-Based Monitoring:</strong> Collect and use data from traffic sensors to improve routing decisions.</li>
        </ul>
      </section>

      <section className="about-section">
        <h3>Our Goal</h3>
        <p>
          We aim to improve the efficiency and effectiveness of public transportation systems by integrating dynamic route optimization, real-time tracking, and IoT-based monitoring.
        </p>
      </section>

      <section className="about-section">
        <h3>Team</h3>
        <p>Our team consists of passionate engineers and developers who are committed to enhancing transportation systems.</p>
        <ul>
          <li><strong>Project Team Lead:</strong> A. Devika</li>
          <li><strong>Team Member 1:</strong> A. Ananya</li>
          <li><strong>Team Member 2:</strong> B. Amrutha</li>
          <li><strong>Team Member 3:</strong> A.Venkatanarasaiah</li>

        </ul>
      </section>
    </div>
  </div>
);
const showAlert = (event) => {
  event.preventDefault();
  alert('Message Sent!');


};
const TrackBus = () => {
  const [result, setResult] = useState("");
  const [imageResult, setImageResult] = useState("");  // State to store the image for the result

  const handleSearch = () => {
    const busNum = document.getElementById("busnum").value;
    setResult(`Bus Number: ${busNum}`);
    setImageResult("/search.jpg");  // Change image when "Search" is clicked
  };

  const handleSubmit = () => {
    const source = document.getElementById("source").value;
    const destination = document.getElementById("destination").value;
    setResult(`Source: ${source} <br> Destination: ${destination}`);
    setImageResult("/submit.jpg");  // Change image when "Submit" is clicked
  };

  return (
    <div>
      <h3>Track Your Bus</h3>
      <div className="card-container">
        <div className="card-busnum">
          <h4>Track Your Route</h4>
          <img
            src="/bus.jpg"
            alt="Route"
          />
          <form>
            <label htmlFor="busnum">Bus Number:</label>
            <input type="text" id="busnum" placeholder="Enter Bus Number" />
            <button type="button" onClick={handleSearch}>
              Search
            </button>
          </form>
        </div>
        <div className="card-busnum">
          <h4>Track Your Route</h4>
          <img
            src="/m5.jpeg"
            alt="Route"
          />
          <form>
            <label htmlFor="source">Source:</label>
            <input type="text" id="source" placeholder="Enter Source" />
            <label htmlFor="destination">Destination:</label>
            <input type="text" id="destination" placeholder="Enter Destination" />
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
      {result && (
       <div className="track-card">
       <h3>Result</h3>
       <p dangerouslySetInnerHTML={{ __html: result }} />
       {imageResult && (
         <img
           src={imageResult}  // Dynamically set image based on the action
           alt="Result"
         />
       )}
     </div>

      )}
    </div>
  );
};

const ContactUs = () => (
  <section id="contact-us" className="contact-us">
    <div className="card">
      <h2>Contact Us</h2>
      <form id="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          rows="4"
        ></textarea>
        <button type="submit" onClick={showAlert}>Submit</button>
      </form>
    </div>
  </section>
);

export default Passenger;
