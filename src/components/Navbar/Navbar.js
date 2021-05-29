import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav style={{background: '#343A40'}} className="navbar-area navbar navbar-expand-lg navbar-light">
            <div className="container-fluid py-3">
                <div className="nav-title">
                    <Link to="/"><h3>Office Management</h3></Link>
                </div>

                <div className="ms-auto">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav custom-nav">
                            <Link to="/home" className="mx-3 nav-link text-white">Home</Link>
                            <Link to="/" className="mx-3 nav-link text-white">Management</Link>
                            <Link to="/" className="mx-3 nav-link text-white">Employee</Link>
                            <Link to="/" className="mx-3 nav-link text-white">Contact</Link>
                            <Link to="/" className="mx-3 nav-link text-white">About US</Link>
                            <Link to="/" className="mx-3 nav-link text-white">Admin</Link>
                            <Link to="/" className="mx-3 nav-link text-white">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;