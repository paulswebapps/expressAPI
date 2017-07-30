const test = require('tape');
const sinon = require('sinon');
const errorMiddleware = require('../middleware/error');

test('error handling middleware sends appropriate response', (t) => {
	const mockJSON = sinon.spy();
	const statusMethods = {
		json: mockJSON
	};
	const mockError = {
		message: 'test message',
		status: 500
	};
	const mockRes = {
		status: () => statusMethods
	};
	errorMiddleware(mockError, {}, mockRes);

	t.equal(mockJSON.calledWith(mockError), true);

	t.end();
});
