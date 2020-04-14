import React, {useState, useEffect} from 'react'


function Favorites() {
    const [books, setBooks] = useState([] )
    const [ alertMessage, setAlertMessage ] = useState( { type: "", message: ""} );

    async function loadFavorites(){
        const savedBooks = await fetch('/api/favorites/list').then( result => result.json() )  
        let newBookList = savedBooks.dbfetchBooks
        setBooks( newBookList )
        console.log('saved books from db are', savedBooks.dbfetchBooks)
        
    }
    

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

          if(deleteBook.message){
            setAlertMessage( { type: 'success', message: 'Book deleted from favorites' } );
            return;
        };
    }
    

    return (
        <div>

            <div className={ alertMessage.type ? `alert alert-${alertMessage.type}` : 'd-hide' } role="alert">
                {alertMessage.message}
            </div>

             {(books.map( item => 
                
                    <div className="col-md-4 d-inline-flex flex-row justify-content-around mt-4" >
                        <div className="card mb-4 box-shadow cardfav" style={{backgroundColor: 'white', border: '2px solid black'}}>
                            <img className="img-thumbnail imgbook" src={item.image} alt="Card cap"/>
                                <h5 className="card-title">{item.title}</h5>
                                <div className="card-body justify-content-center">
                                    {/* <p class="card-text">{item.title} </p> */}
                                    <form>
                                        <button onClick={() => handleDeleteBook(item._id)}>Delete</button>

                                    </form>
                                    
                                    
                                </div>
                        </div>
                    </div>
               
            ))}
        
        </div>
        )

    }
export default Favorites
