'use strict';

// REVIEW: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.


// setting up the PORT
const express = require('express');
const app = express();
const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));
//we are using express to organize our data for routes and view and such. we are pointing at ./public since that is where all of our data lives at.

app.get('/new', (req, res) => {
  res.sendFile('/public/new.html', {root: '.'});
})

app.post('/articles', bodyParser, (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));

app.use((req, res) => {
  res.status(404).send('Sorry can\'t find that!');
  console.error('this is a test of the 404');
});
