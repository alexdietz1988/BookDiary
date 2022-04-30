const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/', (req, res) => {
    res.render('account/login.ejs')
})

// Home - Links to user's bookshelves
router.get('/home', async (req, res, next) => {
    try {
        const username = req.session.currentUser.username
        const currentlyReading = await db.Book.find({ username: username, readingStatus: 'reading' })
        const wantToRead = await db.Book.find({ username: username, readingStatus: 'wanttoread' })
        const read = await db.Book.find({ username: username, readingStatus: 'read' })
        const context = { username, currentlyReading, wantToRead, read }
        return res.render('home.ejs', context)
    } catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

// Currently Reading
router.get('/currentlyreading', async (req, res, next) => {
    try {
        const username = req.session.currentUser.username
        const books = await db.Book.find({ username: username, readingStatus: 'reading' })
        const context = { books, username }
        return res.render('library/currentlyreading', context)

    } catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

// Want to Read
router.get('/wanttoread', async (req, res, next) => {
    try {
        const username = req.session.currentUser.username
        const books = await db.Book.find({ username: username, readingStatus: 'wanttoread' })
        const context = { books, username }
        return res.render('library/wanttoread', context)

    } catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

// Finished Reading
router.get('/finishedreading', async (req, res, next) => {
    try {
        const username = req.session.currentUser.username
        const books = await db.Book.find({ username: username, readingStatus: 'read' })
        const context = { books, username }
        return res.render('library/finishedreading', context)

    } catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

// Add a new book
router.get('/new', (req, res) => {
    const username = req.session.currentUser.username
    const context = { username }
    res.render('new.ejs', context)
})

router.post('/new', async (req, res, next) => {
    try {
        const username = req.session.currentUser.username
        await db.Book.create(req.body)
        return res.redirect(`/${username}/home`)
    } catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

// Edit
router.get('/:bookId/edit', async (req, res, next) => {
    try {
        const username = req.session.currentUser.username
        const bookId = req.params.bookId
        const book = await db.Book.findById(bookId)
        const context = { book, bookId, username }
        return res.render('edit.ejs', context)
    } catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

router.put('/:bookId', async (req, res, next) => {
    try {
        const bookId = req.params.bookId
        await db.Book.findByIdAndUpdate(bookId, req.body)
        return res.redirect(`/${bookId}`)
    } catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

// Show page
router.get('/:bookId', async (req, res, next) => {
    try {
        const username = req.session.currentUser.username
        const book = await db.Book.findById(req.params.bookId)
        const context = { book, username }
        return res.render('book.ejs', context)
    } catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})


// Delete a book
router.delete('/:bookId', async (req, res, next) => {
    try {
        await db.Book.findByIdAndDelete(req.params.bookId)
        return res.redirect(`/home`)
    } catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

module.exports = router