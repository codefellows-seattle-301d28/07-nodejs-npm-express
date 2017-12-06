'use strict';

// REVIEW: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.
const express = require('express');
const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

const app = express();

// COMMENT:  The files are in public because because we want express to have access to all of them in one place.  We are using express.static because our files (js, html, css, img) are not changing (the code).
app.use(express.static('./public'));

app.post('/articles', bodyParser, (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
});

app.get('/new', (req, res) => {
  res.sendFile('new.html', {root:'./public'});
});

app.get('/*', (req, res) => {
  res.status(404).send('404: File Not Found');
});

app.listen(PORT, () => {
  console.log('Listening on ', PORT);
});
