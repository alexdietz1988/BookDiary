const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const { User } = require('../models')

// Login/landing page
router.get('/', (req, res) => {
    res.render('auth/login.ejs')
})

// Register
router.get('/register', (req, res) => {
    res.render('auth/register.ejs')
})

router.post('/register', async (req, res) => {
    try {
        const foundUser = await User.exists({ email: req.body.email })
        if (foundUser) return res.redirect('/account/login')

        const salt = await bcrypt.genSalt(12)
        const hash = await bcrypt.hash(req.body.password, salt)
        req.body.password = hash

        await User.create(req.body)

        return res.redirect('/account/login')
    } catch (error) {
        console.log(error)
        req.error = error
        return res.send(error)
    }
})

router.post('/login', async (req, res) => {
    try {
        const foundUser = await User.findOne({ username: req.body.username })
        if (!foundUser) return res.redirect('/account/register')
        const match = await bcrypt.compare(req.body.password, foundUser.password)
        
        if (!match) return res.send('invalid username or password')

        const username = foundUser.username
        req.session.currentUser = {
            id: foundUser._id,
            username: username
        }
        return res.redirect(`/home`)
    } catch (error) {
        console.log(error)
        req.error = error
        return res.send(error)
    }
})

module.exports = router