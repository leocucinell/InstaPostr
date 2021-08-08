/* SECTION: External modules */
const express = require("express");

/* SECTION: Instanced modules */
const router = express.Router();

/* SECTION: Related model */
const {User} = require("../models/index");

/* SECTION: Related middleware */

/* SECTION: Routes */
//GET /login Presentational
app.get("/login", (req, res, next) => {

});

//POST /login Functional
app.post("/login", (req, res, next) => {

});

//GET /register Presentational
app.get("/register", (req, res, next) => {

});

//POST /register Functional
app.post("/register", (req, res, next) => {

});

//GET /logout Functional
app.get("/logout", (req, res, next) => {

});


/* SECTION: Export */
module.exports = router;