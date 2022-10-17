const mongoose = require('mongoose')

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
}

const EmployeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        maxLength: 100
    },
    lastName: {
        type: String,
        required: true,
        maxLength: 50
    },
    email: {
        type: String,
        unique: true,
        maxLength: 50,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    gender: {
        type: String,
        enum: ["male", "female", "Other"],
        maxLength: 25
    },
    salary: {
        type: Number,
        required: true,
        default: 0.0
    }
})

const Employee = new mongoose.model("employees", EmployeeSchema)
module.exports = Employee