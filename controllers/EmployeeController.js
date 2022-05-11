const Employee  =  require('../models/Employee')

// Show the list of Employees

const index = (req, res, next) => {
    Employee.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message:'An error Occured'
        })
    })
}

const show = (req, res, next) =>{
   
    let _id = req.body._id
    Employee.findById(_id)
    //let employeeID = req.body.employeeID
    //Employee.findById(employeeID)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error Occured!'
        })
    })
}


//add new Employee
const store = (req, res, next) =>{
    let employee = new Employee({
       // employeeID:req.body.employeeID,
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
        
    })
    if(req.files){
        let path = ''
        req.files.forEach(function(files, index, arr){
            path = path + files.path + ','
        })
        path = path.substring(0, path.lastIndexOf(","))
        employee.avatar = path
    }
    employee.save()
    .then(response =>{
        res.json({
            message: 'Employee Added Successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}

// update an Employee

const update = (req, res, next) =>{
    let id = req.body._id
    let updateData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    }

    Employee.findByIdAndUpdate(id, {$set: updateData})
    .then(() =>{
        res.json({
            message: 'Employee update Successfully'
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error Occured!'
        })
    })
}

//delete an employee

const destroy = (req, res, next) =>{
    let _id = req.body._id
    Employee.findByIdAndRemove(_id)
    .then(()=>{
        res.json({
            message: 'Employee deleted Successfully'
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error Occured!'
        })
    })
}
module.exports = {
    index, show, store, update, destroy
}