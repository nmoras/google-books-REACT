const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({

        title: {type: String},
        authors: [{type: String}],
        description: {type: String},
        infoLink: {type: String},
        image:{type: String}  
});


var book = mongoose.model("book", bookSchema);

module.exports = book;



