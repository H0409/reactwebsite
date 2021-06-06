import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <div className="container-fluid md-col-right">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 white">
                            <li className="nav-item">
                                <NavLink className="nav-link active" to = "/" aria-current="page" href="#">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/Service" aria-current="page" href="#">Service</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/About" aria-current="page" href="#">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active"  to="/Contact" aria-current="page" href="#">Contact</NavLink>
                            </li>
                          </ul>  
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
