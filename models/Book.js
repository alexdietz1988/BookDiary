const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Every book must have a title"]
    },
    author: {
        type: String,
        required: [true, "Every book must have an author"]
    },
    yearPublished: {
        type: Number
    },
    genre: {
        type: String
    },
    pages: {
        type: Number
    },
    audioBook: {
        type: Boolean,
        hours: Number
    },
    readingStatus: {
        type: String
    },
    notes: {
        type: String
    }

})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;