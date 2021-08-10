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
    },
    avatar: {
        type: String,
        default: "https://images.squarespace-cdn.com/content/v1/54b7b93ce4b0a3e130d5d232/1519987020970-8IQ7F6Z61LLBCX85A65S/icon.png?format=1000w"
    }
});

/* SECTION: Create model from schema */
const User = mongoose.model("User", userSchema);

/* SECTION: Export */
module.exports = User;