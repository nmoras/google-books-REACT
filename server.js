require('dotenv').config(); // --> process.env
const express = require( 'express' );
const fs = require('fs');
const orm = require( './db/orm.mongoose' );

const PORT = process.env.PORT || 8080;

const app = express();
app.use( express.static('client/build/') );
app.use( express.urlencoded({ extended: false }) );

//save book in the database
app.post('/api/book/:id/', async function( req,res ){

});

app.listen( PORT, function(){
    console.log( `[everest server] RUNNING, http://localhost:${PORT}` );
 });