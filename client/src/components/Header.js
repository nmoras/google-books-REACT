import React from 'react'
import './style/style.css'
import SearchBar from './SearchBar'


function Header() {
    
    
    return (
        <div>
            <div class="row headerdiv">
                <div class="col-lg">
                    <SearchBar />
                </div>
            </div>
            
        </div>
    )
}

export default Header
