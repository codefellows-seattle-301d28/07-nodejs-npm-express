'use strict';

// REVIEW: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.

const express = require('express');
const app = express();
const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

//The public directory is the front end directory, determining what the user sees. The express JS (controller) communicates between the front end (view) and the backend (model) to ensure that we are getting the data we want.

// app.get('index', (req, res) => {
//   res.sendFile('/public/index.html', {root: '.'});
// });

app.get('/new', (req, res) => {
  res.sendFile('/public/new.html', {root: '.'});
});

app.post('/articles', bodyParser, function(request, response) {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
});

app.listen(PORT, () => console.log(`Listening to ${PORT}`));

app.use((req, res, next) => {
  res.status(404).send('Oops look like something went wrong!');
});
