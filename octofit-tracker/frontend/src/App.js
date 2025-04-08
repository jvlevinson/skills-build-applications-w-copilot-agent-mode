import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './octofitapp-small.png'; // Fixed import path
import './App.css';

// Placeholder components - these would be imported in a real app
const Activities = () => <div><h1>Activities</h1><p>Track your fitness activities here.</p></div>;
const Leaderboard = () => <div><h1>Leaderboard</h1><p>See who's leading in fitness achievements.</p></div>;
const Teams = () => <div><h1>Teams</h1><p>Join or create fitness teams.</p></div>;
const Users = () => <div><h1>Users</h1><p>Browse OctoFit users.</p></div>;
const Workouts = () => <div><h1>Workouts</h1><p>Discover new workout routines.</p></div>;
const Home = () => (
  <div>
    <h1>Welcome to OctoFit Tracker</h1>
    <p>Your ultimate fitness companion for Mergington High School!</p>
  </div>
);

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="OctoFit Logo" className="app-logo" />
              OctoFit Tracker
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/activities">Activities</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/teams">Teams</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users">Users</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/workouts">Workouts</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-4 page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
