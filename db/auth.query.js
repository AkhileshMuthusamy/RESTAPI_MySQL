const pool = require('./dbConnector');

function getAllUsers() {
  pool.query('SELECT * FROM users;', (error, results, fields) => {
    if (error) {
      console.log(error);
    }

    console.log(results);
    console.log(fields);
  });
}

module.exports = { getAllUsers };
