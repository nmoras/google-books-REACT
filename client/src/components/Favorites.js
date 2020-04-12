import React, {useState, useEffect} from 'react'


function Favorites() {
    const [books, setBooks] = useState([] )
    async function loadFavorites(){
        const savedBooks = await fetch('/api/favorites/list').then( result => result.json() )  
        let newBookList = savedBooks.dbfetchBooks
        setBooks( newBookList )
        console.log('saved books from db are', savedBooks.dbfetchBooks)
        
    }
    console.log(books);

    useEffect( function(){
        loadFavorites();
    }, [] );

    //function to delete the image 
    async function handleDeleteBook(id){
        // console.log(id);
    const deleteBook = await fetch(`/api/delete/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          }).then( result=>result.json()) 
          alert(deleteBook.message)
    }
 

    return (
        <>
             {(books.map( item => 
                
                    <div class="col-md-4 d-inline-flex flex-row justify-content-around">
                        <div class="card mb-4 box-shadow">
                            <img class="img-thumbnail" src={item.image} alt="Card cap"/>
                                <h5 class="card-title">{item.title}</h5>
                                <div class="card-body justify-content-center">
                                    {/* <p class="card-text">{item.title} </p> */}
                                    <form>
                                        <button onClick={() => handleDeleteBook(item._id)}>Delete</button>

                                    </form>
                                    
                                    
                                </div>
                        </div>
                    </div>
               
            ))}
        )
        </>
        )

    }
export default Favorites
