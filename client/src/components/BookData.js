import React, {useState} from 'react'


function BookData(props) {
    const [ alertMessage, setAlertMessage ] = useState( { type: "", message: ""} );
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
                            authors: data.authors,
                            description: data.description,
                            infoLink: data.infoLink,
                            image: data.imageLinks.thumbnail
        } 
        // console.log('the save book data is', saveBookData)

        const apiBooks = await fetch('/api/post/book', {   
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(saveBookData),
        }).then( result=>result.json())
            alert(apiBooks.message)
            if(apiBooks.message){
                setAlertMessage( { type: 'success', message: 'Book added to favorites!' } );
                return;
            }
        }    

            
    
    return (
        <div style={{backgroundColor: 'white'}}>
            <div className={ alertMessage.type ? `alert alert-${alertMessage.type}` : 'd-hide' } role="alert">
                {alertMessage.message}
            </div>
            {props.bookList.map( item => (
                    <div className='row justify-content-center mt-2' >
                         <div className='col-10 p-2' >
                             <div className="row">
                                <div className="col-3 imgcontainer">
                                    <img className="img-thumbnail imgbook" alt={item.volumeInfo.title} src={item.volumeInfo.imageLinks.thumbnail} />
                                </div>
                                <div className="col-9 emp-content">
                                    <div className='row'>
                                        <div className='col'>
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
                                            
                                            <div className="row justify-content-center">
                                                <div className="col-4">
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
