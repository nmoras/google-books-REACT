const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/${process.env.googlebooks}`, {useNewUrlParser: true});

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });

const db = require( './models' );

async function saveBookData(bookData){

    const dbBook = new db.Book(bookData)
    const saveBook = await db.dbBook.save()
    return{message: "The book is successfully saved", id: saveBook._id}

}

async function fetchBooksData(){

    const dbfetchBooks = await db.Book.find({ })
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