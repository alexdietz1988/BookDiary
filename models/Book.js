const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    username: String,
    title: {
        type: String,
        required: [true, "Every book must have a title"]
    },
    author: {
        type: String,
        required: [true, "Every book must have an author"]
    },
    year: {
        type: Number
    },
    genre: {
        type: String
    },
    cover: {
        type: String
    },
    pages: {
        type: Number
    },
    audioBook: Number,

    readingStatus: {
        type: String
    },
    notes: {
        type: String
    }

})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;