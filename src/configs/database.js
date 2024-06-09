// models/index.js
const { Sequelize, DataTypes } = require('sequelize');

// Create a new instance of Sequelize, connecting to your MySQL database
const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  dialect: process.env.DATABASE_CONNECION,
});

// Authenticate the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Define a model (example: User)
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  // Other model options go here
});

// Sync the model with the database
sequelize.sync()
  .then(() => {
    console.log('User table has been created.');
  })
  .catch(err => {
    console.error('Unable to create the table:', err);
  });

// Export the sequelize instance and models
module.exports = {
  sequelize,
  User
};
