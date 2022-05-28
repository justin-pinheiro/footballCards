const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()

router.use(express.json())

const users = require('../models/users.json')

router.get('/', (req, res) => {
    res.render('signup.ejs')
})

router.post('/', async (req, res) => {
    let user = users.find(user => user.name == req.body.name)
    if (user != null) {
        return res.send('username already exists')
    } else {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        user = { name: req.body.name, password: hashedPassword }
        users.push(user)
        res.status(201).send()
    }
})

module.exports = router