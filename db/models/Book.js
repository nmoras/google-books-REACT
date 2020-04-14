const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({

        title: {type: String},
        authors: [{type: String}],
        description: {type: String},
        infoLink: {type: String},
        image:{type: String}  
});


module.exports = mongoose.model("Book", bookSchema);

// module.exports = book;



