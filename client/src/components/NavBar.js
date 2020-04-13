import React from 'react'
import { Link, useLocation} from "react-router-dom";

function NavBar() {
    const location = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-fixed-top transparent">
            
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                   <button style={{backgroundColor: 'coral', marginRight: '0.25rem'}}> <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Book Search
                    </Link></button>
                </li>    
                <li className="nav-item">
                    <button style={{backgroundColor: 'coral', marginRight: '0.25rem'}}><Link to="/favorites" className={location.pathname === "/favorites" ? "nav-link active" : "nav-link"}>
                    Favorites
                    </Link> </button>
                </li>               
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
