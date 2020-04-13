import React from 'react'
import './style/style.css'
import SearchBar from './SearchBar'


function Header() {
    
    
    return (
        <div>
            <div className="row headerdiv">
                <div className="col-lg">
                    <SearchBar />
                </div>
            </div>
            
        </div>
    )
}

export default Header
