const {Client} = require("pg");
require("dotenv").config();
async function main(sqlquery){

    const client = new Client({
        host : process.env.host,
        port : process.env.port,
        database: process.env.database,
        user: process.env.user,
        password: process.env.password
    });

    console.log("Seeding");
    await client.connect();
    await client.query(sqlquery);
    await client.end();
    console.log("Done");
};

module.exports = {main};