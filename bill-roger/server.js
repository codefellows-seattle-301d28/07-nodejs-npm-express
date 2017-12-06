'use strict';

// REVIEW: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.
const express = require('express');
const app = express();
const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;
app.use(express.static('./public'))
// We are using a public directory because anyone thats using this website will have access to this code, while they would not be able to interface with anything on the server.
app.post('/articles', bodyParser, function(request, response) {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
});
app.get('/new', (req, res) => {
  res.sendFile('/public/new.html', {root: '.'});
});
app.get('*', (req, res) => {
  console.log('404ing');
  res.send('404');
});
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
