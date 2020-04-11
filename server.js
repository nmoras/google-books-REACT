require('dotenv').config(); // --> process.env
const express = require( 'express' );
const fs = require('fs');
const orm = require( './db/orm.mongoose' );

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use( express.static('client/build/') );

// PORT is only set by Heroku, else we know it's local
// if( !process.env.PORT && !fs.existsSync('.env') ){
//     console.log( `*ERROR* You need a .env file (with DB_NAME,...)` );
//     process.exit();
// }

//save book in the database
app.post('/api/post/book', async function( req, res ) {
    // console.log(req.body)
    const bookData = req.body;
    // console.log( bookData)
    const saveBook = await orm.saveBookData( bookData )
    res.send(saveBook);
    
});

app.get('/api/favorites/list', async function(req, res){

    const getBooks = await orm.fetchBooksData();
    console.log(getBooks)
    res.send(getBooks)
})



app.listen( PORT, function(){
    console.log( `[everest server] RUNNING, http://localhost:${PORT}` );
 });