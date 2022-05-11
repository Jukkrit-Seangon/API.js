const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

const employeeSchma = new Schema({
    
    name:{
        type:   String
    },
    designation:    {
        type:   String
    },
    email:  {
        type:   String
    },
    phone:  {
        type:   String
    },
    age:    {
        type:   Number
    },
    avatar:    {
        type:   String
    }

},{timestamps:  true})

const Employee  = mongoose.model('Employee', employeeSchma)
module.exports  = Employee



