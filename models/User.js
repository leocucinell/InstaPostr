/* SECTION: External modules */
const mongoose = require("mongoose");

/* SECTION: Make the schema */
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "add a username"]
    },
    email: {
        type: String,
        required: [true, "Please add your email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "add an email for authorization"]
    }
});

/* SECTION: Create model from schema */
const User = mongoose.model("User", userSchema);

/* SECTION: Export */
module.exports = User;