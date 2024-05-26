// Create web server
const express = require('express');
const app = express();

// Create a route for POST /comments
app.post('/comments', (req, res) => {
  res.send('POST /comments route on port 3000');
});

// Create a route for GET /comments
app.get('/comments', (req, res) => {
  res.send('GET /comments route on port 3000');
});

// Create a route for GET /comments/:id
app.get('/comments/:id', (req, res) => {
  res.send('GET /comments/:id route on port 3000');
});

// Create a route for PUT /comments/:id
app.put('/comments/:id', (req, res) => {
  res.send('PUT /comments/:id route on port 3000');
});

// Create a route for DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
  res.send('DELETE /comments/:id route on port 3000');
});

// Listen to the port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Path: index.js
const express = require('express');
const app = express();

// Import comments.js file
const comments = require('./comments.js');

// Use comments route
app.use(comments);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Path: package.json
{
    "name": "expressjs",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "start": "node index.js"
    },
    "dependencies": {
        "express": "^4.17.1"
    },
}

// Run the server
$ npm start

// Output
Server is running on http://localhost:3000

// Test the routes
$ curl -X POST http://localhost:3000/comments
POST /comments route on port 3000

$ curl -X GET http://localhost:3000/comments
GET /comments route on port 3000

$ curl -X GET http://localhost:3000/comments/1
GET /comments/:id route on port 3000

$ curl -X PUT http://localhost:3000/comments/
