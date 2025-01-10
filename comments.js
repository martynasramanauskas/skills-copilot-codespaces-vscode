// Create web server 
// 1. Create a web server 
// 2. Create a route for GET /comments
// 3. Create a route for POST /comments
// 4. Create a route for PUT /comments
// 5. Create a route for DELETE /comments
// 6. Listen on port 3000

const express = require('express');
const bodyParser = require('body-parser');
const comments = require('./comments');

const app = express();
app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

app.put('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = req.body;
  comments[id] = comment;
  res.json(comment);
});

app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  const deletedComment = comments.splice(id, 1);
  res.json(deletedComment);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});