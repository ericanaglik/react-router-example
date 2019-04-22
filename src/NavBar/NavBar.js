import React from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css'

const NavBar = (props) => {
    return (
        <div className="navbar">
            <Link to="/" className="navbar__link">Home</Link>
            <Link to="/about" className="navbar__link">About</Link>
            <Link to="resume" className="navbar__link">Resumé</Link>
        </div>
    )
}

export default NavBar