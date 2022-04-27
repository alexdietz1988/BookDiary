const express = require('express')
const app = express()
const PORT = 4000
const controllers = require('./controllers/controller.js')
const methodOverride = require('method-override')
require('./config/db.connection')
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))

app.use('/', controllers)

app.listen(PORT, () => console.log('Server is running on port ' + PORT))