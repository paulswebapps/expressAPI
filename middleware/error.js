// if we fail to assign as status, we'll assume it's a 500
// https://www.w3.org/Protocols/HTTP/HTRESP.html
const statusIntenralError = 500;

/**
 * errors across all middleware end up here
 *   note: this middleware will not run unless all four arguments are passed
 *     therefore, we pass @next, and disable the no-unused-vars rule
 * @param  {object} err: native js error object
 * @param  {object} req: express request object
 * @param  {object} res: express response object
 * @param  {function} next: not used, must be passed for error middleware to run
 */
/* eslint-disable no-unused-vars */

module.exports = (err, req, res, next) => {
	const status = err.status || statusIntenralError;
	const message = err.message;

	// render the error page
	res.status(status).json({
		status,
		message
	});
};
