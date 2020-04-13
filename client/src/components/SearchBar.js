import React, {useState, useEffect} from 'react'
import './style/style.css'
import BookData from './BookData';

function SearchBar(props) {
    const [myInput, setMyInput ] = useState ( ' ' );
    const [ bookList, setBookList] = useState ( [ ] );

    function handleChange(e){
        e.preventDefault();

        let searchInput = e.target.value;
        setMyInput(searchInput);
        // console.log(myInput)
    }

   async function handleClick(e){
        e.preventDefault();
        // console.log('my input is', myInput)
        let bookListResult = await fetch( `https://www.googleapis.com/books/v1/volumes?q=${myInput}` ).then( result => result.json()  )
        
        setBookList( bookListResult.items )
        // console.log('booklist is', bookListResult.items );
        setMyInput(' ');

    }

    return (
        <div>
            <div className="row justify-content-center searchrow">
                        
                        <div className="col-8 searchdiv p-4">
                        <h1 className="text-center pt-3">Book Search Engine</h1>
                               
                            <div className="input-group mb-3 ">
                                <input type="text" value={myInput} className="form-control" placeholder="Enter a book" onChange={handleChange}/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleClick}>Search</button>
                                </div>
                            </div>
                        </div>
            </div>
            <BookData bookList={bookList}/>
    </div>    
    )
}

export default SearchBar
