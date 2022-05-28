const express = require('express')
const app = express()

const loginRouter = require('./routes/login')
const signupRouter = require('./routes/signup')

app.use('/login', loginRouter)
app.use('/signup', signupRouter)
app.use(express.json())

app.set('view engine', 'ejs')

const users = require('./models/users.json')


app.get('/', (req, res) => {
    res.render('index.ejs')
})


app.listen(3000)