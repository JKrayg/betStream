const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SignUp = new Schema({
    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String
    },

    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },

    username: {
        type: String,
        trim: true,
        required: "Username is Required"
    },

    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [
          function(input) {
            return input.length >= 6;
          },
          "Password should be longer."
        ]
    },

    userCreated: { 
        type: Date,
        default: Date.now
    }

});

const userSignUp = mongoose.model("userSignUp", SignUp);
module.exports = userSignUp;