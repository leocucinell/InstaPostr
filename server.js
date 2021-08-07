/* SECTION: External modules */
const express = require("express");

/* SECTION: Internal modules */

/* SECTION: Instanced Modules */
const app = express();

/* SECTION: Middleware */
app.use("view engine", "ejs");

/* SECTION: Routes */

/* SECTION: Port config */
const PORT = 4000;
app.listen(PORT, (req, res) => {
    console.log(`App listening on port: ${PORT}`);
});