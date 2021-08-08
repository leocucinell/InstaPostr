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
        required: [true, "Please add your email"]
    },
    password: {
        type: String,
        required: [true, "add an email for authorization"]
    }
});

/* SECTION: Create model from schema */

/* SECTION: Export */