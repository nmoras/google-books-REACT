import React from 'react'



function BookData(props) {
    console.log('the props is', props)
    // console.log(props.bookList[0].volumeInfo.title);
    const Style = {
        listtype: {listStyleType: 'none'},
    }
   function handleClick(){
       console.log('i am saved')
   }
    
    return (
        <div>
            {props.bookList.map( item => (
                    <div class='row justify-content-center mt-2' style={{backgroundColor: "white"}}>
                         <div class='col-11 p-2' >
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
                                        </div>
                                        <div>
                                            <button style={{bacgroundColor: 'black', padding: '5px', color: 'white'}}>View</button>
                                            <button onClick={handleClick}>Save</button>
                                        
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
