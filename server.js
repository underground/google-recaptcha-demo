var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var swig = require('swig');
var routes = require('./server/index');

var app = express();
app.engine('html', swig.renderFile);
app.set('views', path.join(__dirname, '/assets'));
app.set('view engine', 'html');
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(path.join(__dirname, '/assets'))));

// routing setup
app.use('/', routes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
