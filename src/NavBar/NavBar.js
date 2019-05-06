import React from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css'

const NavBar = (props) => {
    return (
            <div class="menu" id="menu">
                <Link to="/" className="navbar__link"><li><a href="#">HOME</a></li></Link>
                <Link to="/about" className="navbar__link"><li><a href="#">ABOUT ME</a></li></Link>
                <Link to="/resume" className="navbar__link"><li><a href="#">MY WORKS</a></li></Link>
                <Link to="/contact" className="navbar__link"><li><a href="#">CONTACT ME</a></li></Link>
            </div>
    )
}

export default NavBar