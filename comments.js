// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  res.send('This is the comments page');
});

app.post('/comments', (req, res) => {
  const comment = req.body;
  console.log(comment);
  res.send('Your comment has been added');
});

app.listen(4001, () => {
  console.log('Comments service is running on port 4001');
});