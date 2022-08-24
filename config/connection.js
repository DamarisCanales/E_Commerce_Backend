//sets up the secure password and username
require("dotenv").config();

//import the Sequelize constructor from the library
const Sequelize = require("sequelize");

//below following code is used after heroku has been confirmed
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      user: 'root',
      password: 'rootroot',
      database: 'employee_db'
    }
  );
}

module.exports = sequelize;
