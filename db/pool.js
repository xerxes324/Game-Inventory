const {Pool} = require("pg");

module.exports = new Pool({
    host: "localhost",
    user : "abhi",
    database: "top_users",
    password : "abcd",
    port : 5432
});