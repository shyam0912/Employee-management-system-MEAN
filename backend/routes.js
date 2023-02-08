const express = require('express')
const router = express.Router()
const ObjectId = require('mongoose').Types.ObjectId

const Employee = require('./employee')

router.get('/hai', (req,res) => {
    res.status(200).json("HAI")
    setTimeout(200)
})
// Post api

router.post('/', (req, res) => {
    let emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        dept: req.body.dept
    })

    emp.save((err, doc) => {
        if(err){
            console.log('Error in Post data ' + err );
        }
        else {
            res.send(doc)
        }
    })
})

// get api

router.get('/', (req,res) => {
    Employee.find((err,doc) => {
        if(err){
            console.log('Error in Get data ' + err );
        }
        else {
            res.send(doc)
        }
    })
})

// get api for single employee

router.get('/:id', (req,res) => {
    if(ObjectId.isValid(req.params.id)){
        Employee.findById(req.params.id, (err,doc) => {
            if(err){
                console.log('Error in Get Employee by ID ' + err );
            }
            else {
                res.send(doc)
            }
        })
    }
    else{
        return res.status(400).send(`No record found with ID ${req.params.id}`)
    }
})

// put api for a single employee

router.put('/:id', (req,res) => {
    if(ObjectId.isValid(req.params.id)){
        let emp = {
            name : req.body.name,
            position : req.body.position,
            dept : req.body.dept
        }
        Employee.findByIdAndUpdate(req.params.id, {$set: emp}, {new: true}, (err,doc) => {
            if(err){
                console.log('Error in Update Employee by ID ' + err );
            }
            else {
                res.send(doc)
            }
        })
    }
    else{
        return res.status(400).send(`No record found with ID ${req.params.id}`)
    }
})

// delete api for single employee

router.delete('/:id', (req,res) => {
    if(ObjectId.isValid(req.params.id)){
        Employee.findByIdAndRemove(req.params.id, (err,doc) => {
            if(err){
                console.log('Error in Delete Employee by ID ' + err );
            }
            else {
                res.send(doc)
            }
        })
    }
    else{
        return res.status(400).send(`No record found with ID ${req.params.id}`)
    }
})


// hai routes

module.exports = router;