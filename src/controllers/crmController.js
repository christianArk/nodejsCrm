import mongoose from "mongoose"
import ContactSchema from "../models/crmModel"

const Contact = mongoose.model('Contact', ContactSchema)

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body)

    newContact.save((err, contact) => {
        if(err){
            res.status(400).send(err)
        }
        res.json(contact)
    })
}

export const getContacts = (req, res) => {
    Contact.find({}, (err, contacts) => {
        if(err){
            res.status(400).send(err)
        }
        res.json(contacts)
    })
}

export const getContact = (req, res) => {
    Contact.findById({_id: req.params.contactid}, (err, contact) => {
        if(err){
            res.status(400).send(err)
        }
        res.json(contact)
    })
}

export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({_id: req.params.contactid}, req.body, {new: true}, (err, contact) => {
        if(err){
            res.status(400).send(err)
        }
        res.json(contact)
    })
}

export const deleteContact = (req, res) => {
    Contact.remove({_id: req.params.contactid}, (err, contact) => {
        if(err){
            res.status(400).send(err)
        }
        res.json({message: "Contact succesfully deleted."})
    })
}