const pgUri = require('./secrets');
const { Pool } = require('pg');


const PG_URI = pgUri;

const pool = new Pool ({
    connectionString: PG_URI,
});

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    },
};
