/* class Contacts {
    constructor() {
        this.contacts = []
    }

    getAllContacts() {
        return this.contacts
    }

    createpost(contact) {
        contact.id = this.contacts.length + 1
        this.contacts.push(contact)
        return contact
    }
    getacontact(id) {
        return this.contacts.find(contact => contact.id == id)
    }
    updatecontact(id, upcontact) {
        const index = this.contacts.findIndex(contact => contact.id == id)
        this.contacts[index].name = upcontact.name || this.contacts[index].name
        this.contacts[index].email = upcontact.email || this.contacts[index].email
        this.contacts[index].phone = upcontact.phone || this.contacts[index].phone

        return this.contacts[index]
    }
    deleteacontact(id) {
        this.contacts = this.contacts.filter(cont => cont.id != id)
    }
}

module.exports = new Contacts() */



const { Schema, model } = require('mongoose')

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 20,
        minlength: 2
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    phone: {
        type: Number,
        maxlength: 11,
        required: true,
        trim: true

    }
})

const contact = model('Contact', contactSchema)

module.exports = contact