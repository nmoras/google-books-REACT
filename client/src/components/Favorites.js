import React from 'react'

function Favorites() {
    // const [books, setBooks] = useState( )
    // async function loadFavorites(){
    //     const apiBooks = await fetch('/api/favorites/list').then( result => result.json() )
    //     setBooks( apiBooks )
    // }
    return (
        <div class="row">
            <div class="col-md-4 d-flex flex-row justify-content-around">
                <div class="card mb-4 box-shadow">
                    <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card cap"/>
                        <div class="card-body">
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                
                        </div>
                </div>
            </div>
        </div>    
    )
}

export default Favorites
