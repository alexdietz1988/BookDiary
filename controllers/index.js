module.exports = {
    books: require('./books_controller'),
    account: require('./account_controller')
}

// GET ROUTES
// login/landing: '/account'
// register: '/account/register'
// logout: '/account/logout'

// user home: '/home'
// bookshelves: '/currentlyreading', '/wanttoread', '/finishedreading'
// new book: '/new'
// edit book: /:bookId/edit'
// show book: '/:bookId'

// OTHER ROUTES
// * POST: register: '/account/register'
// * POST: login: '/account/login'

// * POST: new book: '/new'
// * PUT: edit book: '/:bookId'
// * DELETE: delete book: '/:bookId'