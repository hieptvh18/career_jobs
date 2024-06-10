// app.js
const express = require('express');
require('dotenv').config(); // load all env variable

const app = express();
const port = process.env.SERVER_PORT;

// Middleware to parse JSON requests
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
