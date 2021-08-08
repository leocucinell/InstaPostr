//This is where we connect the database configuration with the created models
require("../config/db.connection");

module.exports = {
    User: require("./User"),
}