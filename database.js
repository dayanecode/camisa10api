const knex = require("knex")

module.exports = knex({
    client: 'mysql2',
    connection: {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASS,
        database: process.env.DATABASE
    }
})