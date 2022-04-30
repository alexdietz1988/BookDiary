module.exports = {
    books: require('./books_controller'),
    auth: require('./auth_controller')
}

// GET ROUTES
// Login/landing: '/login'
// Register: '/login/register'

// user home: '/home'
// bookshelves: '/currentlyreading', '/wanttoread', '/finishedreading'
// new book: '/new'
// edit book: /:bookId/edit'
// show book: '/:bookId'

// OTHER ROUTES
// * POST: register: '/login/register'
// * POST: login: '/login/login'

// * POST: new book: '/new'
// * PUT: edit book: '/:bookId'
// * DELETE: delete book: '/:bookId'