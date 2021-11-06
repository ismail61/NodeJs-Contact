const { validationResult } = require('express-validator')
const contact = require('./contacts')

exports.getallcon = (req, res) => {
    //res.json(ConTacts.getAllContacts())
    const errors = validationResult(req)
    contact.find()
        .then(cont => {
            //res.json(con)
            res.render('index', { cont, errors: errors.array() })
        }).catch(e => {
            res.json(e)
        })
}
exports.createpost_ = (req, res) => {
    let { name, email, phone, id } = req.body //extract name,email,phone
        //console.log(req.body)
        /* let con = ConTacts.createpost({
            name,
            email,
            phone
        }) 
        /* const errors = validationResult(req)

        if (errors.isEmpty()) {
            console.log(req.body)
            return
        } else {
            contact.find()
                .then(con => {
                    //res.json(con)
                    console.log(req.body)
                        //var message = errors.array()
                        //var msg = message[0].msg
                    console.log(errors.array())
                        //console.log(msg)
                    res.render('index', { con, errors: errors.array() })
                }).catch(e => {
                    res.json(e)
                })
                //res.render('index', { errors: errors.array() })
        } */
        //console.log(req.body)
    if (id) {
        contact.findOneAndUpdate({ _id: id }, {
            $set: {
                name,
                email,
                phone
            }
        }).then(() => {
            contact.find().then(cont => {
                res.render('index', { cont })
            })
        }).catch(e => {
            console.log(e)
            res.json({
                message: 'Error'
            })
        })
    } else {
        let con = new contact({
            name,
            email,
            phone
        })

        con.save()
            .then(c => {
                //res.json(c)
                contact.find()
                    .then(cont => {
                        return res.render('index', { cont })
                    })
            }).catch(e => {
                console.log(e)
                res.json({
                    message: 'Error'
                })
            })
    }



}

exports.getAcontact = (req, res) => {
    const id = req.params.id
        //const {id} = req.params
        //res.json(ConTacts.getacontact(id))

    /* contact.findOne({_id:id}).then(c => {
        res.json(c)
    }) */

    contact.findById(id).then(cont => {
        //res.json(c)
        console.log(cont.name)
        res.render('index', { cont })
    }).catch(e => {
        console.log(e)
        res.json({
            message: 'Error'
        })
    })
}

exports.updateContact = (req, res) => {
    const { id } = req.params
        //new_id = parseInt(id)
        //console.log(req.body)
    const { name, email, phone } = req.body
        /* res.json(ConTacts.updatecontact(new_id, {
            name,
            email,
            phone
        })) */

    contact.findOneAndUpdate({ _id: id }, {
        $set: {
            name,
            email,
            phone
        }
    }, { new: true }).then(c => {
        res.json(c)
    }).catch(e => {
        console.log(e)
        res.json({
            message: 'Error'
        })
    })
}
exports.deleteAcontact = (req, res) => {
    const { id } = req.params
    let new_id = parseInt(id)
        //res.json(ConTacts.deleteacontact(new_id))

    contact.findOneAndDelete({ _id: id }).then(() => {
        //res.json(c)
        contact.find().then(cont => {
            res.render('index', { cont })
        })
    }).catch(e => {
        console.log(e)
        res.json({
            message: 'Error'
        })
    })

}