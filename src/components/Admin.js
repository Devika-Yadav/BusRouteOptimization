import React, { useState } from "react";
import "./Admin.css"; // Import the styles

const AdminPage = () => {
  const [isSidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!isSidebarActive);
  };

  return (
    <div>
      <nav className="nav-bar">
        <div className="welcome">Welcome to Dynamic Bus Route Optimization</div>
        <div>
          <a href="#Dashboard">Dashboard</a>
          <a href="#RouteManagement">Route Management</a>
          <a href="#BusManagement">Bus Management</a>
          <a href="#DriverManagement">Driver Management</a>
          <a href="#Real-TimeMonitoring">Real-Time Monitoring</a>
          <a href="#ReportsandAnalytics">Reports and Analytics</a>
          <a href="/">Logout</a>
          <i className="fa fa-bell" style={{ fontSize: "20px" }}></i>
        </div>
      </nav>

      <aside className={`sidebar ${isSidebarActive ? "active" : ""}`}>
        <h2>Admin Panel</h2>
        <img src="/passenger profile.png" alt="profile" />
        <nav className="nav-aside">
          <ul>
            <li><a href="#Dashboard">Dashboard</a></li>
            <li><a href="#RouteManagement">Route Management</a></li>
            <li><a href="#BusManagement">Bus Management</a></li>
            <li><a href="#DriverManagement">Driver Management</a></li>
            <li><a href="#Real-TimeMonitoring">Real-Time Monitoring</a></li>
            <li><a href="#ReportsandAnalytics">Reports and Analytics</a></li>
            <li><a href="/">Logout</a></li>
          </ul>
        </nav>
      </aside>

      <div className="sidebar-toggle" onClick={toggleSidebar}>
        &#9776;
      </div>
    </div>
  );
};

export default AdminPage;
