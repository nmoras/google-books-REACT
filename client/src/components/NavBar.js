import React from 'react'
import { Link, useLocation} from "react-router-dom";

function NavBar() {
    const location = useLocation();
    return (
        <nav class="navbar navbar-expand-lg navbar-fixed-top transparent">
            
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Book Search
                    </Link>
                </li>    
                <li className="nav-item">
                    <Link to="/favorites" className={location.pathname === "/favorites" ? "nav-link active" : "nav-link"}>
                    Favorites
                    </Link>
                </li>               
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
