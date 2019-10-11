// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	server.get('/post/:id', (req, res) => {
		app.render(req, res, '/post', req.params);
	});

	server.get('*', (req, res) => handle(req, res));

	server.listen(3000, (error) => {
		if (error) throw error;
		console.log('Next Server on PORT:3000');
	});
});
