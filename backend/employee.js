const mongoose = require('mongoose')

const Employee = mongoose.model('Employee', {
    name:String,
    position:String,
    dept:String
})

module.exports = Employee;