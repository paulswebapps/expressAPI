
[![dependencies](https://david-dm.org/paulswebapps/expressAPI.svg)](https://david-dm.org/paulswebapps/expressAPI)
[![Build Status](https://travis-ci.org/paulswebapps/expressAPI.svg?branch=master)](https://travis-ci.org/paulswebapps/expressAPI)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

# Simple Web Service

This is a bare-bones web service, to quickly get started in building a stateless (and therefore clusterable) web service.

## Setup

Clone this repo.

```bash
git clone https://github.com/paulswebapps/expressAPI
```
Install using npm or yarn.

```bash
npm install
```
Run all tests
```bash
npm test
```

### Debugging

When debugging, run `server.js` directly. For [VS Code](https://code.visualstudio.com/), the debugger's confuration file could look like this:

```
{
	"version": "0.2.0",
	"configurations": [
		{
			"type": "node",
			"request": "launch",
			"name": "Launch Program",
			"program": "${workspaceRoot}/server.js"
		}
	]
}
```

To confirm that the server is up and responding to request, ping `http://localhost:3001/healthcheck`. It should return some sort of positive confirmation message, like "we are healthy and good".

### Clustering

Node, by default, runs on a single core. To spawn multiple processes, load-balanced across cores, we use the [cluster module](https://nodejs.org/api/cluster.html), called in by [PM2](http://pm2.keymetrics.io/). When `yarn` or `npm install` is ran, pm2 will be installed on the machine, using the `preinstall` hook in [package.json](package.json).

Start the server cluster, one process per core, load balanced.
```bash
npm start
```
You should see PM2's report of `online` node load-balanced processes.

For benchmarking, it can be useful to monitor your node processes.

```bash
pm2 monit
```

When you're done using your cluster, stop all processes.
```bash
npm stop
```
## License

  [MIT](LICENSE)
