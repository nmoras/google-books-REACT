import React from 'react'



function BookData(props) {
    console.log(props)
    // let book = props.items.volumeInfo;
    // let image = props.items.volumeInfo.imageLinks.thumbnail;
        

    
    return (
        <div>
            {props.bookList.map( item => (
                    <div class='row justify-content-center'>
                         {/* <div class='col-11 p-2' style={employeeListStyle.colborder}> */}
                            <div class="row">
                                <div class="col-3 imgcontainer">
                                    <img class="img-thumbnail" alt={item.book.name} src={item.image} />
                                </div>
                                <div class="col-9 emp-content">
                                    <div class='row'>
                                        <div class='col'>
                                            <ul >
                                                <li >
                                                    <strong>Title:</strong> {item.book.name}
                                                </li>
                                                <li>
                                                    <strong>Author:</strong> {item.book.author}
                                                </li>
                                                <li>
                                                    <strong>Average Rating:</strong> {item.book.averageRating}
                                                </li>
                                                <li>
                                                    <strong>Description:</strong> {item.book.description}
                                                </li>
                                                <li>
                                                    <strong>Infolink:</strong> {item.book.infoLink}
                                                </li>
                                            </ul>
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
