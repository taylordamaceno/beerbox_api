const pgp = require('pg-promise')();
const db = pgp({
	user: 'postgres',
	password: '',
	host: 'ipadressServer',
	port: 5432,
	database: 'beerbox'
});

module.exports = db;
