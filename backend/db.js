const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/employeeDB',err => {
    if(!err){
        console.log("MongoDB Connected Successfully");
    }
    else{
        console.log("Error in connection" + err);
    }
})

module.exports = mongoose;