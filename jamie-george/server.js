// REVIEW: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.

let express = require('express');
let app = express();

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'))


app.get('/index', (req, res) => {
  res.sendFile('index.html', {root: './public'});
});

app.get('/new', (req, res) => {
  res.sendFile('new.html', {root: './public'});
});

app.post('/articles', bodyParser, function(request, response) {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
});

app.get('*', (request, response) => {
  response.status(404).send('<center>404 ERROR PAGE NOT FOUND</center>');
});

app.listen(PORT);