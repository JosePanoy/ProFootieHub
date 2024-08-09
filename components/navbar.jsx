import React, { useState } from 'react';
import { FiMenu, FiSearch } from 'react-icons/fi'; 
import { Link } from 'react-router-dom'; 
import '../src/assets/css/navbar.css';
import SiteLogo from '../public/logo.png';

function Navbar() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(prevState => !prevState);
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src={SiteLogo} alt="Site Logo" className="site-logo" />
                    <span className="site-name">ProFootieHub</span>
                </div>
                <div className="navbar-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/teams" className="nav-link">Teams</Link>
                    <Link to="/matches" className="nav-link">Matches</Link>
                    <Link to="/players" className="nav-link">Players</Link>
                    <Link to="/standings" className="nav-link">Standings</Link>
                    <Link to="/test" className="nav-link">Test Page</Link>
                </div>
                <FiMenu className="menu-icon" onClick={toggleSidebar} />
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <FiSearch className="search-icon" />
                </div>
            </nav>
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <Link to="/" className="sidebar-link">Home</Link>
                <Link to="/teams" className="sidebar-link">Teams</Link>
                <Link to="/matches" className="sidebar-link">Matches</Link>
                <Link to="/players" className="sidebar-link">Players</Link>
                <Link to="/test" className="sidebar-link">Test Page</Link>
            </div>
        </>
    );
}

export default Navbar;
