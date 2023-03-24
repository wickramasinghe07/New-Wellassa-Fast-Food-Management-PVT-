const mongoose = require ('mongoose');

//Schema name,age,gender,email,password

const Schema = mongoose.Schema;

const employerSchema = new Schema({

    name : {
        type : String,
        require : true
    },

    age : {
        type : Number,
        require : true
    },

    gender : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    }
})

const Employer = mongoose.model("Employer","employerSchema");
module.exports = Employer;