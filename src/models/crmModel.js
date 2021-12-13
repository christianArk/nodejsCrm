import mongoose from "mongoose"

const { Schema } = mongoose

const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: "Firstname is required"
    },
    lastName: {
        type: String,
        required: "Lastname is required"
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

export default ContactSchema