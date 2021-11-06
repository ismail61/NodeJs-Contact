const express = require('express')
const contact = require('./router')
const mongoose = require('mongoose')
const ejs = require('ejs');
const multer = require('multer')
const app = express()
const bodyParser = require('body-parser')


//set EJS
app.set('view engine', 'ejs')
    //middleware
app.use('/contacts', contact)
app.use(bodyParser.urlencoded({ extended: true }))
    //app.use(express.json)
app.use(bodyParser.json())
app.use(multer().array())


app.get('/index', (req, res) => {
    res.render('index')
})
app.get('*', (req, res) => {
    console.log("404 Not Found")
})
const port = process.env.PORT || 6060

mongoose.connect('mongodb+srv://root:password61@database.dcg2q.mongodb.net/root?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    app.listen(port, () => {
        console.log("server is running on port " + port)
    })
})