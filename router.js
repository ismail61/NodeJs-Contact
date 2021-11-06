const routerr = require('express').Router()

const contactpage = require('./contactpage')
const multer = require('multer')
const parser = require('body-parser')
const { check, validationResult } = require('express-validator')
const bodyparserurl = parser.urlencoded({ extended: true })
const bodyParser = parser.json();
const {
    getallcon,
    createpost_,
    getAcontact,
    updateContact,
    deleteAcontact
} = require('./contactpage')



routerr.get('/', getallcon)

routerr.post('/', bodyParser, bodyparserurl, createpost_)


routerr.get('/post/:id', bodyParser, getAcontact)

routerr.put('/:id', bodyParser, updateContact)
    //routerr.delete('/:id', bodyParser, deleteAcontact)
routerr.get('/delete/:id', bodyParser, deleteAcontact)


routerr.get('*', (req, res) => {
    res.send('404 Not Found')
})

module.exports = routerr