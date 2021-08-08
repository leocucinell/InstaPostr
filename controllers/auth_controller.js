/* SECTION: External modules */
const express = require('express');
const bcrypt = require('bcryptjs');

/* SECTION: Instanced modules */
const router = express.Router();

/* SECTION: Related model */
const { User } = require("../models/index");

/* SECTION: Related middleware */

/* SECTION: Routes */
//NOTE: Remember, to add to the cookie, use: req.session.example: <some data>

//GET /login Presentational
router.get("/login", (req, res, next) => {
    res.render("auth/login");
});

//POST /login Functional
router.post("/login", async (req, res, next) => {
    try {
        const foundUser = await User.findOne({$or: [{email: req.body.name}, {username: req.body.name}]});
        if(!foundUser){
            console.log("user does not exist");
            return res.render("auth/register");
        }

        const matchedPass = await bcrypt.compare(req.body.password, foundUser.password);
        if(!matchedPass){
            console.log("invalid user credentials");
            return res.render("auth/login");
        }

        //this is the cookie stored on the users machine
        req.session.currentUser = {
            id: foundUser._id,
            username: foundUser.username,
            email: foundUser.email,
        }

        return res.send("Congrats on logging in!");
    } catch(error){
        console.log(error.message);
        return res.send(error);
    }  
});

//GET /register Presentational
router.get("/register", (req, res, next) => {
    res.render("auth/register");
});

//POST /register Functional
router.post("/register", async (req, res, next) => {
    //register a new user inside the database
    try{
        ///first check if the user exists
        const foundUser = await User.exists({$or:[{email: req.body.email}, {username: req.body.username}]});
        //if the do exist...
        if(foundUser){
            console.log("This user already exists!");
            return res.render("/register");
        }
        //if they dont yet exist

        //hash and salt password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        req.body.password = hash;

        //create a user
        const createdUser = await User.create(req.body);

        //return to the login screen
        return res.redirect("/login");

    } catch(error){
        console.log(error.message);
        return res.send(error);
    }
});

//GET /logout Functional
router.get("/logout", (req, res, next) => {
    res.send("Logging out...");
});


/* SECTION: Export */
module.exports = router;