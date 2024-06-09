// app.js
const express = require('express');
const { sequelize, User } = require('./src/configs/database');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Create a new user
app.post('/users', async (req, res) => {
  try {
    const { username, email } = req.body;
    const newUser = await User.create({ username, email });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
