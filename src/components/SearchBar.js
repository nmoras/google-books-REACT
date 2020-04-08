import React, {useState} from 'react'
import './style/style.css'

function SearchBar() {
    const [myInput, setMyInput ] = useState ( '' );

    function handleChange(e){
        e.preventDefault();

        let searchInput = e.target.value;
    }
    function handleClick(e){
        e.preventDefault();
        

    }

    return (
        <div>
            <div class="row justify-content-center searchrow">
                        <div class="col-8 searchdiv p-4">
                            <div class="input-group mb-3 ">
                                <input type="text" class="form-control" placeholder="Enter a book" onChange={handleChange}/>
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleClick}>Search</button>
                                </div>
                            </div>
                        </div>
            </div>
        </div>
    )
}

export default SearchBar
