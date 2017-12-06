'use strict';

// REVIEWED: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.
const express = require('express');
const app = express();
const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;
app.use(express.static('./public')); //files are in the public directory to keep the tree organized in a standardized format. Express serves our local files by locating them in a static directory.

app.post('/articles', bodyParser, function(request, response) {
  // REVIEWED: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
});

app.get('/new', (req, res) => {
  res.sendFile('new.html', {root: './public'});
});

app.get('/*', (req, res) => {
  res.sendFile('404.jpg', {root: './public'});
});

app.listen(PORT, () => `Listening on ${PORT}`);
