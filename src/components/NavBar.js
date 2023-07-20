import React from 'react'
import {NavLink } from 'react-router-dom'
import '../App.css';

const NavBar = () => {
    return (
        <div className='nav sticky-top'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src="/news.png" alt="..." height={32} style={{ background: "white" }} />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item"><NavLink className="nav-link" to="/business">Business</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/entertainment">Entertainment</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/general">General</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/health">Health</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/science">Science</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/sports">Sports</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/technology">Technology</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar