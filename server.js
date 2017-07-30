const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes');
const errorHandling = require('./middleware/error.js');

const port = process.env.PORT || 3001;
const app = express();

app.use(logger('dev'));
// converts request body to js object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// requests flow to appropriate place
app.use('/', routes);

// unrouted requests fall through to here
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// all routes with errors fall through to here
app.use(errorHandling);

// start server
app.listen(port, (err) => {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	console.log(`Listening on port ${port}`);
});
