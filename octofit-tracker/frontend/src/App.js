import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import 'bootstrap/dist/css/bootstrap.min.css';
import octoLogo from '../docs/octofitapp-small.png';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img src={octoLogo} alt="OctoFit Logo" className="app-logo" />
              OctoFit
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/activities">Activities</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/leaderboard">Leaderboard</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/teams">Teams</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/users">Users</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/workouts">Workouts</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-4 page-content">
          <Routes>
            <Route path="/" element={<h1>Welcome to OctoFit Tracker</h1>} />
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
