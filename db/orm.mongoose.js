const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/googlebooks`, {useNewUrlParser: true});

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });

const db = require( './models' );

async function saveBookData(data){
    const bookData ={
        title: data.title,
        authors: data.authors,
        description: data.description,
        infoLink: data.infoLink,
        image: data.image
    };
    console.log('the bookdata is', bookData)
    const dbBook = new db.book( bookData )
    const saveBook = await dbBook.save()
    return{message: "The book is successfully saved", id: saveBook._id}

}

async function fetchBooksData(){

    const dbfetchBooks = await db.book.find({ })
    console.log(dbfetchBooks);
}

module.exports = {
    saveBookData,
    fetchBooksData
}
// dbWorkout = await db.Workout.create( body );
//     console.log('the workout is', dbWorkout)
//     res.json(dbWorkout)
//   })   