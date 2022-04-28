const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const { User } = require('../models')

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

module.exports = router