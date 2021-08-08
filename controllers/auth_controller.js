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
    res.render("../views/auth/login");
});

//POST /login Functional
router.post("/login", (req, res, next) => {
    res.send("Posting to the login route");
});

//GET /register Presentational
router.get("/register", (req, res, next) => {
    res.send("This is the register route");
});

//POST /register Functional
router.post("/register", (req, res, next) => {
    res.send("Posting to the register route");
});

//GET /logout Functional
router.get("/logout", (req, res, next) => {
    res.send("Logging out...");
});


/* SECTION: Export */
module.exports = router;