# 07-nodejs-npm-express

**Author**: Kevin Miller, Sunitha Vivekanandan

**Version**: 1.0.0

## Overview
Create a blog site that is user friendly to encourage people to come back frequently. It needs to render responsively on mobile devices and desktop and display blog articles in a clear and logical manor.  It gives the user the ability to filter articles by author or category.  There is an authoring page available for creating and previewing new articles. The data is loaded using a get request to a data file with jQuery getJSON.  The requested data is added to local storage to prevent unnecessary requests to the data file.  A key is kept in localStorage form the request headers to determine if the data in local storage is the most current.  It the data is stale a new request is made.  The application is runs using express and node.js

## Getting Started
Since the project is using node.js, you will need node.js and npm to build and run it.

## Architecture
Currently, this is a multi-page application using node.js and express as the backend and server in conjunction with HTML5 and CSS3, javascript and JQuery.  The Articles are dynamically created from an array of article objects stored in a data file to be fetched with an ajax GET request.  Handlebars templates are used to dynamically build out the articles as html on the page.. Using HTML, javascript and jQuery, we set up filters based on Author or Category, giving the user the ability to hide and show content. The index.html use CDN's for jQuery and Handlebars, and highlight.jsso an internet connection is required. We also used open source icons and fonts at IcoMoon (https://icomoon.io/app/#/select).

## Change Log

12-06-2017 10:16am - Changes the server form live-server to node.js with express.

## Credits and Collaborations
IcoMoon https://icomoon.io/app/#/select
MDN https://developer.mozilla.org/en-US/docs/Web/CSS
jQuery: https://jquery.com/
Handlebars: http://handlebarsjs.com/
Highlightjs: https://highlightjs.org/
Marked: https://github.com/chjj/marked
node.js: https://nodejs.org
express: http://expressjs.com/
Code Fellows 301 TAs
