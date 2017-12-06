'use strict';

// REVIEW: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

const express = require('express');
const app = express();

app.post('/articles', bodyParser, function(request, response) {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
});

app.use(express.static('./public'));

app.listen(PORT, () => console.log(`listening on ${PORT}`));

app.get('/new',(req, res) => {
  res.sendFile('/public/new.html', {root: '.'});
});

app.get('/index',(req, res) => {
  res.sendFile('/public/index.html', {root: '.'});
});


// our files are in public directy so we only access those once we run live-server. If other directories where called then it would throw a 404 error.

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});
