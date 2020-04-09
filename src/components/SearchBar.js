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
        console.log(myInput)
    }

    async function handleClick(e){
        e.preventDefault();
        let bookListResult = await fetch( `https://www.googleapis.com/books/v1/volumes?q=${myInput}` ).then( result => result.json()  )
        
        setBookList( bookListResult.items )
        // console.log(bookList);


        // console.log( bookListResult );
        // console.log(bookListResult.items[0].volumeInfo)
        // console.log(bookListResult.items[0].volumeInfo.title)
        // console.log(bookListResult.items[0].volumeInfo.authors)
        // console.log(bookListResult.items[0].volumeInfo.description)
        // console.log(bookListResult.items[0].volumeInfo.averageRating)
        // console.log(bookListResult.items[0].volumeInfo.imageLinks.thumbnail)
        // console.log(bookListResult.items[0].volumeInfo.infoLink)
        setMyInput(' ');

    }

    return (
        <div>
            <div class="row justify-content-center searchrow">
                        <div class="col-8 searchdiv p-4">
                            <div class="input-group mb-3 ">
                                <input type="text" value={myInput} class="form-control" placeholder="Enter a book" onChange={handleChange}/>
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" value={myInput} type="button" id="button-addon2" onClick={handleClick}>Search</button>
                                </div>
                            </div>
                        </div>
            </div>
            <BookData bookList ={bookList} />
        </div>
    )
}

export default SearchBar
