import React, { useState } from "react";
import "./Admin.css";
import Login from "./Login";
import { useNavigate } from 'react-router-dom'; // Move your styles into a CSS file

const Admin = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [page,setPage] = useState("Dashboard");
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => setShowProfile(!showProfile);
  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };
  const loadPage = (page) => {
    setPage(page);
  };
  const renderContent = () => {
    switch (page) {
      
      case "Dashboard":
        return <Dashboard/>;
      case "Route Management":
        return <RouteManagement/>;
      case "Driver Management":
        return <DriverManagement />;
        case "Real-Time Monitoring":
        return <RealTimeMonitoring/>;
      case "Feedback":
        return <Feedback />;
        
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
      <Sidebar active={sidebarActive} toggleSidebar={toggleSidebar} loadPage={loadPage} toggleProfile={toggleProfile} />
      <div className={`content ${sidebarActive ? "shifted" : ""}`}>
        {renderContent()}
      </div>
      {showProfile && <ProfileModal toggleProfile={toggleProfile} />}
    </div>
  );
}
const Navbar = ({toggleProfile}) => {

  return (
    <nav className="nav-bar">
      <div className="welcome">Welcome to Dynamic Bus Route Optimization</div>
        <div className="profile-nav" onClick={toggleProfile} style={{ cursor: "pointer" }}>
          
      <img src="/passenger profile.png" alt="profile" className="profile-image"
          /></div>
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
        <h2>Admin Panel</h2>
       

        <nav className="nav-aside">
          <ul>
            <li>
            <button onClick={() => loadPage("Dashboard")} className="link-button"> Dashboard</button>

            </li>
            <li>
            <button onClick={() => loadPage("Route Management")} className="link-button">Route Management</button>

            </li>
            <li>
            <button onClick={() => loadPage("Driver Management")} className="link-button">Driver Management</button>

            </li>
            <li>
            <button onClick={() => loadPage("Real-Time Monitoring")} className="link-button">Real-Time Monitoring</button>

            </li>
            <li>
            <button onClick={() => loadPage("Feedback")} className="link-button">Feedback</button>

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
const ProfileModal = ({ toggleProfile }) => {
  const [userDetails, setUserDetails] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
  });
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSaveChanges = () => {
    // Save changes logic (e.g., API call)
    alert("Changes saved successfully!");
    setIsEditing(false);
  };

  const handleDeleteAccount = () => {
    // Add account deletion logic here
    alert("Account has been deleted.");
    navigate("/"); // Redirect to the login or home page after deletion
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={toggleProfile}>
          &times;
        </button>
        <h2>Profile Details</h2>
        <div className="profile-details">
          <label>
            <strong>Name:</strong>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleInputChange}
              />
            ) : (
              <span>{userDetails.name}</span>
            )}
          </label>
          <label>
            <strong>Email:</strong>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
              />
            ) : (
              <span>{userDetails.email}</span>
            )}
          </label>
          <label>
            <strong>Role:</strong>
            <span>{userDetails.role}</span>
          </label>
        </div>
        {isEditing ? (
          <button className="save-button" onClick={handleSaveChanges}>
            Save Changes
          </button>
        ) : (
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            Edit Profile
          </button>
        )}
        <button className="delete-button" onClick={handleDeleteAccount}>
          Delete Account
        </button>
      </div>
    </div>
  );
};

const assignBus = () => alert("Bus has been successfully assigned to the route!");
const assignDriver = () =>
  alert("Driver has been successfully assigned to the bus and notification sent to driver!");
const getOptimizedRoute = () =>
  alert("Optimized route has been successfully generated!");

const Dashboard = () => (
  <>
  <div class="container">
  <div className="stat-card">
      <h1>Analytics</h1>
      <div className="piechart-container">
        <div className="piechart"></div>
        <div className="color-list">
          <div className="color-item">
            <div className="color-box" style={{ backgroundColor: 'rgb(39, 245, 28)' }}></div>
            <span>During a breakdown 11</span>
          </div>
          <div className="color-item">
            <div className="color-box" style={{ backgroundColor: 'rgb(243, 75, 45)' }}></div>
            <span>No.of active buses 243</span>
          </div>
          <div className="color-item">
            <div className="color-box" style={{ backgroundColor: 'rgb(246, 251, 245)' }}></div>
            <span>Returning to distribution center 146</span>
          </div>
        </div>
      </div>
    </div>
    <div className="main-content-1">
    <h1>Reports </h1>

    {/* <!-- Fleet Usage Report Section --> */}
    <section id="fleet-usage-report">
      <h2>Fleet Usage Report</h2>
      <table id="fleet-usage-table">
        <thead>
          <tr>
            <th>Bus ID</th>
            <th>Route</th>
            <th>Occupancy Rate</th>
            <th>On-Time Performance (%)</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- Fleet Usage Data will be injected here --> */}
          <tr><td>DTC504</td> <td>Route 146</td> <td>85%</td><td>95%</td></tr>
              <tr><td>DTC124</td> <td>route 32A</td> <td>75%</td><td>90%</td></tr>
                <tr><td>DTC324</td> <td>Route 231D</td> <td>65%</td><td>92%</td></tr>
          
          </tbody>
      </table>
    </section>

    {/* <!-- Traffic Patterns Report Section --> */}
    <section id="traffic-patterns-report">
      <h2>Traffic Patterns Report</h2>
      <table id="traffic-patterns-table">
        <thead>
          <tr>
            <th>Route</th>
            <th>Average Speed (km/h)</th>
            <th>Traffic Condition</th>
          </tr>
        </thead>
        <tbody>
            <tr><td>Route 123C</td> <td>45</td> <td>Moderate</td></tr>
              <tr><td>Route 426</td> <td>30</td> <td>Heavy</td></tr>
                <tr><td>Route 342A</td> <td>50</td> <td>Light</td></tr>
          {/* <!-- Traffic Patterns Data will be injected here --> */}
            
        </tbody>
      </table>
    </section>

    {/* <!-- Efficiency Report Section --> */}
    <section id="efficiency-report">
      <h2>Efficiency Report</h2>
      <table id="efficiency-table">
        <thead>
          <tr>
            <th>Route</th>
            <th>Average Delay (min)</th>
            <th>On-Time (%)</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- Efficiency Data will be injected here --> */}
            <tr><td>Route 144</td> <td>5</td> <td>90%</td></tr>
  <tr><td>Route 342D</td> <td>10</td> <td>85%</td></tr>
    <tr><td>Route 231A</td> <td>3</td> <td>95%</td></tr>
        </tbody>
      </table>
    </section>
</div>
          </div>
  </>
);
const Feedback = () => (
  <>
  <div class="container">
  <div class="admin-feedback">
    <h3>Passenger Feedback</h3>
    <table id="feedbackTable">
        <thead>
            <tr>
                <th>Name</th>
                <th>Bus Number</th>
                <th>Passenger Feedback</th>
                
            </tr>
        </thead>
        <tbody>
           <tr><td>Teja</td> <td>146</td> <td>through your web app , it make easy to find bus location</td></tr>
            <tr><td>Leela</td> <td>205A</td> <td>instead of going to bus stand or wait near bus stops too long , your application helps alot</td></tr>
            <tr><td>Krishna</td> <td>102C</td> <td>the bus predictions are good , but some times the bus may late few mintues</td></tr>
        </tbody>
    </table>
</div>
<div class="admin-feedback">
    <h3>Driver Feedback</h3>
    <table id="feedbackTable">
        <thead>
            <tr>
                <th>Name</th>
                <th>Bus Number</th>
                <th>Driver Feedback</th>
                
            </tr>
        </thead>
        <tbody>
           <tr><td>Satya</td> <td>146</td> <td>reaching on time .... by giving route details and directions</td></tr>
            <tr><td>Rama rao</td> <td>205A</td> <td>bus number 120D bus Breakdown, i am available to take other route buses</td></tr>
            <tr><td></td> <td>102C</td> <td>the bus predictions are good , but some times the bus may late few mintues</td></tr>
        </tbody>
    </table>
</div>
</div>
          
      
  </>
);
const DriverManagement = () => (
  <>
  <div className="Container">
  <div class="row">
              <div class="card-6">
              <div id="bus-assignment" class="section">
            <h2>Assign Bus to Route</h2>
            <form id="bus-assignment-form">
                <label for="bus-select">Select Bus:</label>
                <select id="bus-select">
                    <option value="bus1">Bus 1</option>
                    <option value="bus2">Bus 2</option>
                    <option value="bus3">Bus 3</option>
                </select>

                <label for="route-select">Select Route:</label>
                <select id="route-select">
                    <option value="route1">Route A (Stop 1 → Stop 2)</option>
                    <option value="route2">Route B (Stop 2 → Stop 3)</option>
                    <option value="route3">Route C (Stop 3 → Stop 4)</option>
                </select>

                <button type="button" onClick={assignBus}>
          Assign Bus
        </button>
            </form>
        </div>
              </div>
              <div class="card-6">
              <div class="section" id="driver-assignment">
            <h2>Assign Driver to Bus</h2>
            <form id="driver-assignment-form">
                <label for="driver-select">Select Driver:</label>
                <select id="driver-select">
                    <option value="driver1">Driver 1</option>
                    <option value="driver2">Driver 2</option>
                    <option value="driver3">Driver 3</option>
                </select>

                <label for="driver-bus-select">Select Bus:</label>
                <select id="driver-bus-select">
                    <option value="bus1">Bus 1</option>
                    <option value="bus2">Bus 2</option>
                    <option value="bus3">Bus 3</option>
                </select>
                <button type="button" onClick={assignDriver}>
          Assign Driver
        </button>
                
            </form>
        </div>
              </div>
            </div>
            <div class="row-2">
              <div class="card-7">
              <div class="section" id="driver-schedules">
    <input type="text" placeholder="Search"/>
            <button>Search</button>
            <div class='driver-sch'>
    <h2>Driver Schedules</h2>
    <table>
        <thead>
            <tr>
                <th>Driver</th>
                <th>Bus</th>
                <th>Shift</th>
                <th>Schedule Date</th>
            </tr>
        </thead>
        <tbody id="schedule-list">
            {/* <!-- Schedules will be dynamically populated --> */}
            
            <tr> <td>Pavan rao</td> <td>DTC432</td> <td>morning</td> <td>01-02-25</td></tr>
            <tr> <td>Bhuvan</td> <td>DTC136</td>  <td>afternoon</td> <td>02-02-25</td></tr>
            <tr> <td>varun </td><td>DTC145</td> <td>evening</td> <td>02-02-25</td></tr>
           
        </tbody>
    </table>
    </div>
</div>
              </div>
            </div>
    
  </div>
  </>

);
const RealTimeMonitoring = () => (
  <>
  <div className="Container">
  <div className="real-monitoring-card">
    <h2>Real-Time Monitoring</h2>
    <p>Real-Time Monitoring...(MAP)</p>
  </div>
    
  </div>
  </>

);
  const RouteManagement = () => (
    <>
     <div class="container">
            <div class="card-4">
            <div class="route-opt" id="routeOpt">
        <h2 class="title">Get Optimized Route</h2>
        <form id="route-form" class="form">
          <div class="form-group">
            <label for="source" class="label">Source Location:</label>
            <input type="text" id="source" name="source" placeholder="Enter Source Location" class="input" />
          </div>
      
          <div class="form-group">
            <label for="destination" class="label">Destination Location:</label>
            <input type="text" id="destination" name="destination" placeholder="Enter Destination Location" class="input" />
          </div>
          <div class="checkbox-group">
      <div class="checkbox-item">
        <input type="checkbox" id="traffic-update" class="checkbox" />
        <label for="traffic-update">Include Real-Time Traffic Updates</label>
      </div>
      <div class="checkbox-item">
        <input type="checkbox" id="weather-update" class="checkbox" />
        <label for="weather-update">Consider Weather Conditions</label>
      </div>
    </div>

    <div class="route-preferences">
      <label class="label">Route Preferences:</label>
      <div class="preferences">
        <label><input type="checkbox" id="avoid-tolls" /> Avoid Tolls</label>
        <label><input type="checkbox" id="shortest-route" /> Shortest Route</label>
      </div>
      </div>

    <button type="button" class="submit-btn" onClick={getOptimizedRoute}>Get Optimized Route</button>
  </form>
</div>
            </div>
          </div>
    </>
  );
  
  



export default Admin;
