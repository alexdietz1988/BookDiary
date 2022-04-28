const { escapeRegExpChars } = require('ejs/lib/utils')
const express = require('express')
const router = express.Router()
const db = require('../models')
// const methodOverride = require('method-override')
// app.use(methodOverride('_method'))

// Landing page
router.get('/', (req, res) => {
    res.render('landing.ejs')
})

// Register
router.get('/register', (req, res) => {
    res.render('auth/register.ejs')
})

// Login
router.get('/login', (req, res) => {
    res.render('auth/login.ejs')
})

// Home - Links to user's bookshelves
router.get('/:username/home', (req, res,) => {
    const context = { username: req.params.username }
    res.render('home.ejs', context)
})

// Currently Reading
router.get('/:username/currentlyreading', async (req, res, next) => {
    try {
        const books = await db.Book.find({ username: req.params.username, readingStatus: 'reading' })
        const context = { books: books, username: req.params.username }
        return res.render('library/currentlyreading', context)

    } catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

// Want to Read
router.get('/:username/wanttoread', async (req, res, next) => {
    try {
        const books = await db.Book.find({ username: req.params.username, readingStatus: 'wanttoread' })
        const context = { books: books, username: req.params.username }
        return res.render('library/wanttoread', context)

    } catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

// Finished Reading
router.get('/:username/finishedreading', async (req, res, next) => {
    try {
        const books = await db.Book.find({ username: req.params.username, readingStatus: 'read' })
        const context = { books: books, username: req.params.username }
        return res.render('library/finishedreading', context)

    } catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

// Add a new book
router.get('/:username/new', (req, res) => {
    const username = req.params.username
    const context = { username: username }
    res.render('new.ejs', context)
})

router.post('/:username/new', async (req, res, next) => {
    try {
        await db.Book.create(req.body)
        return res.redirect(`/${req.params.username}/home`)
    } catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

// Edit
router.get('/:username/:bookId/edit', async (req, res, next) => {
    try {
        const bookId = req.params.bookId
        const book = await db.Book.findById(bookId)
        const context = { book: book, bookId: bookId, username: req.params.username }
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
        await db.Book.findbyIdAndUpdate(bookId, req.body)
        return res.redirect('/:bookId')
    } catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

// Show page
router.get('/:username/:bookId', async (req, res, next) => {
    try {
        const book = await db.Book.findById(req.params.bookId)
        const context = { book: book, username: req.params.username }
        return res.render('book.ejs', context)
    } catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})


// Delete a book
router.delete('/:username/:bookId', async (req, res, next) => {
    try {
        await db.Book.findByIdAndDelete(req.params.bookId)
        return res.redirect(`/${req.params.username}/home`)
    } catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})

module.exports = router