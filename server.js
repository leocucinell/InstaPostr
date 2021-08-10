/* SECTION: External modules */
const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const dotenv = require('dotenv').config()

/* SECTION: Internal modules */
const {auth} = require("./controllers/index");

/* SECTION: Instanced Modules */
const app = express();

/* SECTION: Middleware */
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.use(
    session({
      store: MongoStore.create({ mongoUrl: process.env.MONGO_URI || 'mongodb://localhost:27017/instapost' }),
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // one week
      },
    })
);

//checks to see if a user is already logged in (through cookies) and directs them to posts if they are
const checkAuth = function(req, res, next){
  if(req.path != "/logout"){
    if(req.path === "login" || req.path === "/register"){
      if(req.session.currentUser){
        return res.send("Already logged in");
      }
    }
  }
}

/* SECTION: Routes */
//Direct a user to /login if they hit the home route
app.get("/", (req, res, next) => {
  return res.redirect("/login")
});

app.use("/", auth);

/* SECTION: Port config */
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
});