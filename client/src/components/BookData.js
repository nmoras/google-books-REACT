import React from 'react'


function BookData(props) {
    console.log('the props is', props)
    // console.log(props.bookList[0].volumeInfo.title);

    const Style = {
        listtype: {listStyleType: 'none'},
    };

    function handleViewBook(url){
        window.location = url;

    }

    async function handleSaveBook(data){
        // console.log( 'the data to save in the server', data)
        let saveBookData = {
                            title: data.title,
                            infoLink: data.infoLink,
                            image: data.imageLinks.thumbnail
        } 
        console.log('the save book data is', saveBookData)

        const apiBooks = await fetch('/api/post/book', {   
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(saveBookData),
        })
        .then((response) => response.json())
        .then((data) => {
             console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        }    
    
    return (
        <div>
            {props.bookList.map( item => (
                    <div class='row justify-content-center mt-2'>
                         <div class='col-10 p-2' >
                             <div class="row">
                                <div class="col-3 imgcontainer">
                                    <img class="img-thumbnail" alt={item.volumeInfo.title} src={item.volumeInfo.imageLinks.thumbnail} />
                                </div>
                                <div class="col-9 emp-content">
                                    <div class='row'>
                                        <div class='col'>
                                            <ul style={Style.listtype} >
                                                <li >
                                                    <strong>Title:</strong> {item.volumeInfo.title}
                                                </li>
                                                <li>
                                                    <strong>Author:</strong> {item.volumeInfo.authors}
                                                </li>
                                                <li>
                                                    <strong>Average Rating:</strong> {item.volumeInfo.averageRating}
                                                </li>
                                                <li>
                                                    <strong>Description:</strong> {item.volumeInfo.description}
                                                </li>
                                                <li>
                                                    <strong>Infolink:</strong> {item.volumeInfo.infoLink}
                                                </li>
                                            </ul>
                                            
                                            <div class="row justify-content-center">
                                                <div class="col-4">
                                                    <button onClick={() => handleViewBook(item.volumeInfo.infoLink)} style={{backgroundColor: 'black', padding: '1rem', color: 'white'}}>View</button>
                                                    <button onClick={() => handleSaveBook(item.volumeInfo)} style={{backgroundColor: 'black', padding: '1rem', color: 'white'}}>Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                               
                                    </div>
                                </div>
                     
                            </div>
                        </div>    
                 ) )}       
            

        </div> 

    )
}
export default BookData
