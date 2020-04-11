import React, {useState, useEffect} from 'react'


function Favorites() {
    const [books, setBooks] = useState([] )
    async function loadFavorites(){
        const savedBooks = await fetch('/api/favorites/list').then( result => result.json() )
        setBooks( savedBooks )
    }

    useEffect( function(){
        loadFavorites();
    }, [] );

    return (
    <div>

        { books.map( item => 
            (<div class="row">
                <div class="col-md-4 d-flex flex-row justify-content-around">
                    <div class="card mb-4 box-shadow">
                        <img class="card-img-top" data="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card cap"/>
                            <div class="card-body">
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    
                            </div>
                    </div>
                </div>
            </div>    
        ))}
    )
    </div>
    )

}
export default Favorites
