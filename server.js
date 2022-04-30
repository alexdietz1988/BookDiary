const express = require('express')
const app = express()
const PORT = 4000
const controllers = require('./controllers')
const methodOverride = require('method-override')
require('./config/db.connection')
app.set('view engine', 'ejs')

const session = require('express-session')
const MongoStore = require('connect-mongo')

app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))

app.use(
    session ({
        store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
        secret: process.env.sessionKey,
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 * 2 }
    })
)

app.use('/login', controllers.auth)
app.use('/', controllers.books)

app.listen(PORT, () => console.log('Server is running on port ' + PORT))