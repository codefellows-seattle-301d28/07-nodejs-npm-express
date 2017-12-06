'use strict';

// REVIEW: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.
// DONE 1

//DONE 2
const express = require('express');
const app = express();
const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

//DONE 3
app.use(express.static('./public'));

//DONE 4
app.get('/index', (req, res) => {
  res.sendFile('index.html', {root: './public'});
});

app.get('/new', (req, res) => {
  res.sendFile('new.html', {root: './public'});
});



app.post('/articles', bodyParser, (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
});

//DONE 6
app.get('*', (req, res) => {
  res.sendFile('404.html', {root: './public'});
});

//DONE 5
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

/*
COMMENT
Our files are in a public directory to tell the server which files represent our completed, visitor-ready application. ExpressJS looks to our defined routes and matches them with the specified target in the public directory.
*/